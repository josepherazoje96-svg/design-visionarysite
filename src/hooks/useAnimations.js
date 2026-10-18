import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const docEl = document.documentElement
    const nav = document.getElementById('nav')
    const hero = document.getElementById('top')
    const heroInner = hero && hero.querySelector('.cx-hero-inner')
    const steps = document.querySelector('.steps')

    const bar = document.createElement('div')
    bar.className = 'scroll-progress'
    document.body.appendChild(bar)

    // Indici di stagger sui gruppi
    document.querySelectorAll('.stats-grid, .cases').forEach((g) => {
      Array.from(g.children).forEach((child, i) => {
        const r = child.classList.contains('reveal') ? child : child.querySelector('.reveal')
        if (r) r.style.setProperty('--i', i)
      })
    })

    const reveals = Array.from(document.querySelectorAll('.reveal, .step'))
    const show = (el) => el.classList.add('in')

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
    }

    // Liquid glass: pannelli riconosciuti qui, luce che segue il cursore
    const GLASS = '.stat, .lane, .calc-inputs, .calc-result, .calc-report-cta, .audit-form-wrap, .faq-item, .cta-card, .founder-frame, .cr-kpi'
    document.querySelectorAll(GLASS).forEach((el) => el.classList.add('lg'))
    const onGlass = (e) => {
      const el = e.target.closest && e.target.closest('.lg')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onGlass, { passive: true })

    // Pulsanti magnetici (solo puntatore fine)
    const magnets = []
    if (!reduce && window.matchMedia('(hover: hover)').matches) {
      document.querySelectorAll('.btn-lg, .nav-cta').forEach((b) => {
        const move = (e) => {
          const r = b.getBoundingClientRect()
          const x = (e.clientX - r.left - r.width / 2) * 0.18
          const y = (e.clientY - r.top - r.height / 2) * 0.3
          b.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
        }
        const leave = () => { b.style.transform = '' }
        b.addEventListener('pointermove', move)
        b.addEventListener('pointerleave', leave)
        magnets.push(() => { b.removeEventListener('pointermove', move); b.removeEventListener('pointerleave', leave) })
      })
    }

    let ticking = false
    function frame() {
      ticking = false
      const y = window.scrollY
      const vh = window.innerHeight
      const h = docEl.scrollHeight - vh
      bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`
      if (nav) nav.classList.toggle('scrolled', y > 24)

      if (heroInner && !reduce) {
        hero.style.setProperty('--hp', Math.min(y / (hero.offsetHeight || vh), 1).toFixed(3))
      }
      if (steps) {
        const r = steps.getBoundingClientRect()
        const p = (vh * 0.6 - r.top) / r.height
        steps.style.setProperty('--pp', Math.min(1, Math.max(0, p)).toFixed(3))
      }
    }
    function request() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(frame)
      }
    }
    request()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)

    return () => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      document.removeEventListener('pointermove', onGlass)
      magnets.forEach((fn) => fn())
      if (io) io.disconnect()
      if (bar.parentNode) bar.parentNode.removeChild(bar)
    }
  }, [])
}
