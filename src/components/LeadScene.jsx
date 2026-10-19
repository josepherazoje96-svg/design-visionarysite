import { useEffect, useRef, useState } from 'react'

const START = 22 * 60 + 47 // 22:47
const SPAN = 180 // minuti simulati durante lo scroll

const fmt = (m) => {
  const t = ((m % 1440) + 1440) % 1440
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`
}

const AUTO_STEPS = [
  { at: 0.05, label: 'Risposta inviata in meno di 2 minuti' },
  { at: 0.2, label: 'Richiesta qualificata' },
  { at: 0.36, label: 'Appuntamento fissato in agenda' },
  { at: 0.52, label: 'Follow-up giusto già programmato' },
]

export function LeadScene() {
  const ref = useRef(null)
  const [p, setP] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setP(1)
      return
    }
    let raf = 0
    let ticking = false
    const calc = () => {
      ticking = false
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const v = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0
      setP(Math.round(v * 50) / 50)
    }
    const on = () => {
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(calc)
      }
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [])

  const elapsed = Math.round(Math.min(1, p / 0.7) * SPAN)
  const lost = p >= 0.7
  const ore = Math.floor(elapsed / 60)
  const min = elapsed % 60

  return (
    <section className="lead-scene" ref={ref} aria-labelledby="problema-titolo">
      <div className="lead-stage">
        <div className="lead-top">
          <div>
            <span className="section-label">01 · Il problema</span>
            <h2 id="problema-titolo">
              Stai perdendo <span className="cy">ore e clienti</span>. Entrambi hanno un costo.
            </h2>
          </div>
          <div className="lead-clock" aria-hidden="true">
            <small>Orario</small>
            <strong>{fmt(START + Math.round(Math.min(1, p / 0.7) * SPAN))}</strong>
          </div>
        </div>

        <div className="lead-track" aria-hidden="true">
          <i style={{ transform: `scaleX(${p})` }} />
        </div>

        <div className="lead-lanes">
          <div className={`lane lane--off${lost ? ' is-lost' : ''}`}>
            <span className="lane-tag">Senza sistema</span>
            <div className="msg">
              <b>Nuova richiesta · WhatsApp · 22:47</b>
              <span>«Buonasera, vorrei un preventivo.»</span>
            </div>
            <div className="lane-status">
              {lost ? (
                <>
                  Il lead ha già scelto qualcun altro.
                  <small>Nessuno ha risposto in tempo.</small>
                </>
              ) : p < 0.06 ? (
                <>
                  Nessuno risponde.
                  <small>Il team è offline.</small>
                </>
              ) : (
                <>
                  {ore}h {String(min).padStart(2, '0')}m senza risposta
                  <small>Il lead si raffredda.</small>
                </>
              )}
            </div>
          </div>

          <div className="lane lane--on">
            <span className="lane-tag">Con Visionary</span>
            <div className="msg">
              <b>Nuova richiesta · WhatsApp · 22:47</b>
              <span>«Buonasera, vorrei un preventivo.»</span>
            </div>
            <ul className="steps-live">
              {AUTO_STEPS.map((s) => (
                <li key={s.label} className={p >= s.at ? 'done' : ''}>
                  <i>✓</i>
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="lead-verdict" style={{ opacity: p > 0.8 ? 1 : 0, transform: p > 0.8 ? 'none' : 'translateY(10px)' }}>
          Stessa richiesta. Stessa ora. <span className="cy">Due esiti diversi.</span>
        </p>
        <p className="lead-note">Scena di esempio</p>
      </div>
    </section>
  )
}
