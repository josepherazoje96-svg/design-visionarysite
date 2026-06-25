import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const docEl = document.documentElement
    const nav = document.getElementById('nav')

    // Scroll progress bar
    const bar = document.createElement('div')
    bar.className = 'scroll-progress'
    document.body.appendChild(bar)

    // Stagger indices on grouped children
    const groups = document.querySelectorAll('.cards-3, .steps, .cases, .plans, .stats-grid')
    groups.forEach((g) => {
      Array.from(g.children).forEach((child, i) => {
        const r = child.classList.contains('reveal') ? child : child.querySelector('.reveal')
        if (r) r.style.setProperty('--i', i)
      })
    })

    // Shimmer sweep hook on cards
    document.querySelectorAll('.card, .case, .plan').forEach((el) => el.classList.add('sweep'))

    const reveals = Array.from(document.querySelectorAll('.reveal'))

    const show = (el) => {
      el.classList.add('in')
      if (el.classList.contains('sweep')) {
        setTimeout(() => el.classList.add('swept'), 220)
      }
    }

    let io = null
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(show)
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              show(e.target)
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
      )
      reveals.forEach((el) => io.observe(el))

      // Reveal elements already in view on first paint
      requestAnimationFrame(() => {
        const vh = window.innerHeight
        reveals.forEach((el) => {
          if (el.classList.contains('in')) return
          const r = el.getBoundingClientRect()
          if (r.top < vh * 0.92 && r.bottom > 0) show(el)
        })
      })

      const sweepInView = () => {
        const vh = window.innerHeight
        reveals.forEach((el) => {
          if (el.classList.contains('in')) return
          const r = el.getBoundingClientRect()
          if (r.top < vh && r.bottom > 0) show(el)
        })
      }
      window.addEventListener('load', () => setTimeout(sweepInView, 200))
    }

    // 3D tilt on cards (pointer devices only)
    const tiltCleanups = []
    if (!reduce && window.matchMedia('(hover: hover)').matches) {
      document.querySelectorAll('.card, .plan').forEach((card) => {
        const parent = card.parentElement
        if (parent) parent.classList.add('tilt-host')
        const MAX = 6
        const onMove = (e) => {
          const b = card.getBoundingClientRect()
          const px = (e.clientX - b.left) / b.width - 0.5
          const py = (e.clientY - b.top) / b.height - 0.5
          card.style.transform = `translateY(-5px) rotateX(${(-py * MAX).toFixed(2)}deg) rotateY(${(px * MAX).toFixed(2)}deg)`
        }
        const onLeave = () => { card.style.transform = '' }
        card.addEventListener('pointermove', onMove)
        card.addEventListener('pointerleave', onLeave)
        tiltCleanups.push(() => {
          card.removeEventListener('pointermove', onMove)
          card.removeEventListener('pointerleave', onLeave)
        })
      })
    }

    // Scroll-driven: progress bar + nav state + hero parallax
    const heroInner = document.querySelector('.hero-inner')
    const hero = document.querySelector('.hero')
    let scrollY = window.scrollY
    let ticking = false

    function onScrollFrame() {
      ticking = false
      const h = docEl.scrollHeight - window.innerHeight
      const prog = h > 0 ? scrollY / h : 0
      bar.style.transform = `scaleX(${prog})`

      if (nav) nav.classList.toggle('scrolled', scrollY > 24)

      if (heroInner && hero && !reduce) {
        const hh = hero.offsetHeight || window.innerHeight
        const p = Math.min(scrollY / hh, 1)
        heroInner.style.transform = `translateY(${(p * 70).toFixed(1)}px) scale(${(1 - p * 0.04).toFixed(3)})`
        heroInner.style.opacity = (1 - p * 0.9).toFixed(3)
      }
    }

    function requestFrame() {
      scrollY = window.scrollY
      if (!ticking) {
        ticking = true
        requestAnimationFrame(onScrollFrame)
      }
    }
    requestFrame()
    window.addEventListener('scroll', requestFrame, { passive: true })
    window.addEventListener('resize', requestFrame)

    return () => {
      window.removeEventListener('scroll', requestFrame)
      window.removeEventListener('resize', requestFrame)
      tiltCleanups.forEach((fn) => fn())
      if (io) io.disconnect()
      if (bar.parentNode) bar.parentNode.removeChild(bar)
    }
  }, [])
}
