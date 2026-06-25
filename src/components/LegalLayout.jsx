import { Link } from 'react-router-dom'

export function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <div className="legal-page">
      <nav className="nav" id="nav">
        <div className="nav-pill glass-strong">
          <div className="nav-left">
            <Link to="/" className="nav-mark" aria-label="Visionary">
              <img src="/assets/visionary-logo.png" alt="Visionary" />
            </Link>
          </div>
          <Link to="/" className="btn btn-ghost nav-cta">← Torna al sito</Link>
        </div>
      </nav>

      <header className="legal-header">
        <span className="section-label">{eyebrow}</span>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-updated">Ultimo aggiornamento: {updated}</p>
      </header>

      <div className="legal-body">{children}</div>

      <footer className="footer legal-footer">
        <div className="wrap">
          <div className="footer-bottom">
            <span className="privacy">
              Per domande su questo documento scrivi a{' '}
              <a href="mailto:visionary.iasolution@gmail.com">visionary.iasolution@gmail.com</a>
            </span>
            <span>© 2026 Visionary. Tutti i diritti riservati.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
