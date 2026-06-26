import { useEffect, useRef, useState } from 'react'

// Gas-pump style counter: digits count up in strict order (0,1,2,3…),
// looping a couple of times fast, then slowing down and stopping exactly
// on the target number — triggered once the element scrolls into view.
export function Odometer({ value, duration = 1800, loops = 2 }) {
  const elRef = useRef(null)
  const [display, setDisplay] = useState(value)
  const started = useRef(false)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }

    const run = () => {
      if (started.current) return
      started.current = true

      const span = Math.max(20, Math.round(Math.abs(value)) + 15)
      const totalSteps = loops * (span + 1) + value
      let raf
      let i = 0
      let stepStart = null

      function tick(t) {
        if (stepStart === null) stepStart = t
        const progress = i / totalSteps
        const delay = 14 + Math.pow(progress, 2.6) * 170

        if (t - stepStart >= delay) {
          stepStart = t
          i++
          if (i >= totalSteps) {
            setDisplay(value)
            return
          }
          setDisplay(i % (span + 1))
        }
        raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(raf)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run()
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration, loops])

  return <span ref={elRef}>{display}</span>
}
