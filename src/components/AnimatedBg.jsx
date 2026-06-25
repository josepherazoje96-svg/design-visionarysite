import { useEffect, useRef } from 'react'

export function AnimatedBg() {
  const cvRef = useRef(null)

  useEffect(() => {
    const cv = cvRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const docEl = document.documentElement

    const cols = [
      [34, 211, 238],
      [59, 130, 246],
      [139, 92, 246],
      [45, 212, 191],
    ]

    let W, H, dpr

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.4)
      W = cv.width = Math.round(window.innerWidth * dpr)
      H = cv.height = Math.round(window.innerHeight * dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const N = 6
    const orbs = Array.from({ length: N }, (_, i) => ({
      x: 0.2 + Math.random() * 0.6,
      y: 0.2 + Math.random() * 0.6,
      r: 0.34 + Math.random() * 0.22,
      c: cols[i % cols.length],
      ax: 0.10 + Math.random() * 0.10,
      ay: 0.10 + Math.random() * 0.10,
      sx: 0.00005 + Math.random() * 0.00006,
      sy: 0.00005 + Math.random() * 0.00006,
      px: Math.random() * 6.28,
      py: Math.random() * 6.28,
    }))

    let bgScroll = 0

    function paint(t) {
      const h = docEl.scrollHeight - window.innerHeight
      const target = h > 0 ? window.scrollY / h : 0
      bgScroll += (target - bgScroll) * 0.06

      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, W, H)
      ctx.globalCompositeOperation = 'lighter'
      const maxR = Math.max(W, H)

      for (let k = 0; k < orbs.length; k++) {
        const o = orbs[k]
        const drift = (k % 2 === 0 ? -1 : 1) * bgScroll * 0.5
        const cx = (o.x + Math.sin(t * o.sx + o.px) * o.ax + drift * 0.15) * W
        const cy = (o.y + Math.cos(t * o.sy + o.py) * o.ay - bgScroll * 0.6 + k * 0.13) * H
        const rad = o.r * maxR
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad)
        const [r, gn, b] = o.c
        g.addColorStop(0, `rgba(${r},${gn},${b},0.52)`)
        g.addColorStop(0.45, `rgba(${r},${gn},${b},0.15)`)
        g.addColorStop(1, `rgba(${r},${gn},${b},0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(cx, cy, rad, 0, 6.2832)
        ctx.fill()
      }
    }

    let raf
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else raf = requestAnimationFrame(loop)
    }

    function loop(t) {
      paint(t)
      raf = requestAnimationFrame(loop)
    }

    if (reduce) {
      paint(8000)
    } else {
      raf = requestAnimationFrame(loop)
      document.addEventListener('visibilitychange', onVis)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <>
      <canvas ref={cvRef} id="bg" />
      <div className="bg-overlay" />
      <div className="bg-grain" />
    </>
  )
}
