import { useEffect, useRef, useState } from 'react'

// Cifre a rullo: ogni cifra scorre in verticale fino al valore, veloce e sfocata
// durante il movimento. L'animazione è solo CSS (vedi liquid.css, .odo).
// Nel DOM resta soltanto il numero vero, leggibile da chi non vede l'animazione.
export function Odometer({ value }) {
  const ref = useRef(null)
  const [state, setState] = useState('idle') // idle | go | static

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setState('static')
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState('go')
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const digits = String(value).split('')
  return (
    <span ref={ref} className={`odo odo--${state}`}>
      <span className="sr-only">{value}</span>
      {digits.map((d, i) => (
        <span className="odo-d" key={i} aria-hidden="true" style={{ '--t': Number(d), '--i': i }} />
      ))}
    </span>
  )
}
