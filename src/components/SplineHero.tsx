import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

const gradText: React.CSSProperties = {
  background: 'var(--grad)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
}

export function SplineHero() {
  return (
    <header
      id="top"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh', background: '#000' }}
    >
      {/* Aceternity spotlight beam */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Mobile animated background — replaces Spline 3D scene on small screens */}
      <div className="mobile-hero-bg md:hidden">
        <div className="mobile-orb mobile-orb--cyan" />
        <div className="mobile-orb mobile-orb--violet" />
        <div className="mobile-orb mobile-orb--teal" />
        <div className="mobile-hero-grid" />
      </div>

      <div className="flex" style={{ minHeight: '100svh' }}>

        {/* ── LEFT: brand copy ── */}
        <div
          className="relative z-10 flex flex-col justify-center flex-1"
          style={{ padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)' }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 mb-6 w-fit rounded-full px-4 py-2"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text)',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-none"
              style={{ background: 'var(--cyan)', boxShadow: '0 0 10px 1px var(--cyan)' }}
            />
            AI Automation Agency
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: 0.9,
              color: 'var(--text)',
              maxWidth: '14ch',
            }}
          >
            Sistemi <span style={gradText}>intelligenti</span> che lavorano per la tua azienda{' '}
            <span style={gradText}>giorno e notte</span>.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'var(--body)',
              fontSize: '17px',
              color: 'var(--muted)',
              lineHeight: 1.55,
              maxWidth: '44ch',
              marginTop: '24px',
            }}
          >
            Riduci i costi, aumenta la produttività e libera tempo grazie a sistemi IA su misura.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {['Assistenza clienti', 'Processi interni', 'Follow-up automatici'].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '12px',
                  letterSpacing: '0.03em',
                  color: 'rgba(255,255,255,0.82)',
                  background: 'rgba(255,255,255,0.012)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-none"
                  style={{ background: 'var(--grad)' }}
                />
                {label}
              </span>
            ))}
          </div>

          {/* CTA row — reuses existing CSS classes */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#contatto"
              className="btn btn-white btn-lg"
              style={{ fontSize: '15px' }}
            >
              Richiedi un'analisi gratuita
            </a>
            <a href="#processo" className="btn btn-glass glass-strong btn-lg">
              Guarda come funziona <span className="ic">↓</span>
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="flex flex-wrap gap-6 mt-6"
            style={{ fontFamily: 'var(--body)', fontSize: '14px', color: 'var(--muted)' }}
          >
            {['Nessun impegno', 'Analisi personalizzata', 'Risposta entro 24h'].map((text) => (
              <span key={text} className="inline-flex items-center gap-2">
                <span style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Spline 3D scene ── */}
        <div className="flex-1 relative hidden md:block" style={{ minHeight: '100svh' }}>
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      </div>
    </header>
  )
}
