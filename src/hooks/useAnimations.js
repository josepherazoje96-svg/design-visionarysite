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
    let glassRaf = 0
    let glassEv = null
    const onGlass = (e) => {
      glassEv = e
      if (glassRaf) return
      glassRaf = requestAnimationFrame(() => {
        glassRaf = 0
        const ev = glassEv
        const el = ev.target.closest && ev.target.closest('.lg')
        if (!el) return
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${ev.clientX - r.left}px`)
        el.style.setProperty('--my', `${ev.clientY - r.top}px`)
      })
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

    // il video della hero si ferma quando esce dallo schermo
    let videoIo = null
    const heroVideo = hero && hero.querySelector('video')
    if (heroVideo && 'IntersectionObserver' in window) {
      videoIo = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !reduce) heroVideo.play().catch(() => {})
        else heroVideo.pause()
      }, { threshold: 0.05 })
      videoIo.observe(hero)
    }

    let ticking = false
    let maxScroll = 1
    let heroH = window.innerHeight
    let stepsTop = 0
    let stepsH = 1
    let lastHp = -1
    let wasScrolled = false
    function measure() {
      const vh = window.innerHeight
      maxScroll = Math.max(1, docEl.scrollHeight - vh)
      heroH = (hero && hero.offsetHeight) || vh
      if (steps) {
        const r = steps.getBoundingClientRect()
        stepsTop = r.top + window.scrollY
        stepsH = r.height || 1
      }
    }
    function frame() {
      ticking = false
      const y = window.scrollY
      const vh = window.innerHeight
      bar.style.transform = `scaleX(${Math.min(1, y / maxScroll).toFixed(4)})`
      const scrolled = y > 24
      if (scrolled !== wasScrolled) {
        wasScrolled = scrolled
        if (nav) nav.classList.toggle('scrolled', scrolled)
      }
      if (heroInner && !reduce) {
        const hp = y > heroH ? 1 : Math.round((y / heroH) * 100) / 100
        if (hp !== lastHp) {
          lastHp = hp
          hero.style.setProperty('--hp', hp)
        }
      }
      if (steps && y + vh > stepsTop - 200 && y < stepsTop + stepsH + 200) {
        const p = (vh * 0.6 - (stepsTop - y)) / stepsH
        steps.style.setProperty('--pp', Math.min(1, Math.max(0, p)).toFixed(3))
      }
    }
    measure()
    window.addEventListener('load', measure)
    function request() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(frame)
      }
    }
    request()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', measure)
    window.addEventListener('resize', request)

    return () => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      window.removeEventListener('resize', measure)
      window.removeEventListener('load', measure)
      cancelAnimationFrame(glassRaf)
      if (videoIo) videoIo.disconnect()
      document.removeEventListener('pointermove', onGlass)
      magnets.forEach((fn) => fn())
      if (io) io.disconnect()
      if (bar.parentNode) bar.parentNode.removeChild(bar)
    }
  }, [])
}
