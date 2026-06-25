import { useState, useRef } from 'react'

export function AuditForm() {
  const [step, setStep] = useState(1)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [azienda, setAzienda] = useState('')
  const [ruolo, setRuolo] = useState('')
  const [sito, setSito] = useState('')

  const [fatturato, setFatturato] = useState('')
  const [software, setSoftware] = useState('')
  const [bottleneck, setBottleneck] = useState('')
  const [note, setNote] = useState('')

  const submitBtnRef = useRef(null)

  function auditNext() {
    setError('')
    if (!nome.trim() || !email.trim() || !azienda.trim()) {
      setError('Compila nome, email e azienda per continuare.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Inserisci un indirizzo email valido.')
      return
    }
    setStep(2)
  }

  function auditBack() {
    setError('')
    setStep(1)
  }

  async function submitAudit() {
    setError('')
    if (!fatturato || !bottleneck) {
      setError('Seleziona fatturato e collo di bottiglia per continuare.')
      return
    }
    setSubmitting(true)
    const messaggio = `Ruolo: ${ruolo || '—'} | Sito: ${sito || '—'} | Fatturato: ${fatturato} | Software: ${software || '—'} | Collo di bottiglia: ${bottleneck} | Note: ${note || '—'}`
    try {
      localStorage.setItem('converted', '1')
      await fetch('https://newn8n.visionaryntelligence.com/webhook/c497cc91-2714-4635-aa2b-afa9689d2abe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          azienda,
          sito: sito || '',
          ruolo: ruolo || '',
          fatturato,
          software: software || '',
          bottleneck,
          note: note || '',
        }),
      })
    } catch (_) {}
    setStep(3)
    setSubmitting(false)
  }

  const dot1Done = step > 1
  const dot1Active = step === 1
  const dot2Done = step > 2
  const dot2Active = step === 2 || step === 3
  const dot3Active = step === 3
  const conn1Active = step > 1
  const conn2Active = step >= 3

  return (
    <section className="section-pad audit-section" id="prezzi">
      <div className="audit-blob audit-blob--cyan" />
      <div className="audit-blob audit-blob--violet" />
      <div className="wrap">
        <div className="audit-layout">

          {/* ── Left column ── */}
          <div className="audit-info reveal">
            <span className="section-label">Inizia adesso</span>
            <h2 className="audit-title">
              Richiedi la tua <span className="grad-text">Diagnosi Operativa</span> Gratuita.
            </h2>
            <p className="audit-sub">
              Non è una newsletter. Non è un lead magnet.<br />
              È una call conoscitiva di selezione per capire se possiamo
              costruire qualcosa di concreto insieme. Gratis. Senza impegno.
            </p>

            <div className="asi-steps">
              <div className="asi-item">
                <span className="asi-num">01</span>
                <div>
                  <strong>Compila il form di qualificazione</strong>
                  <p>2 minuti. Ci serve capire la tua situazione attuale prima della call.</p>
                </div>
              </div>
              <div className="asi-item">
                <span className="asi-num">02</span>
                <div>
                  <strong>Ti contattiamo entro 24 ore</strong>
                  <p>Se il tuo profilo è compatibile, fissiamo una call di 30 minuti nel momento che preferisci.</p>
                </div>
              </div>
              <div className="asi-item">
                <span className="asi-num">03</span>
                <div>
                  <strong>Audit gratuito, proposta concreta</strong>
                  <p>Analizziamo i tuoi processi, identifichiamo i 2–3 colli di bottiglia ad alto impatto e ti diciamo esattamente cosa automatizzare, quanto ci vuole e quanto ci guadagni.</p>
                </div>
              </div>
            </div>

            <div className="audit-proof">
              <span>Risposta entro 24h</span>
              <span className="audit-proof-dot">•</span>
              <span>Call di 30 min</span>
              <span className="audit-proof-dot">•</span>
              <span>Zero impegno</span>
            </div>
          </div>

          {/* ── Right column: card + buttons outside ── */}
          <div className="audit-right-col reveal">

            {/* Card — fields only, no buttons */}
            <div className="audit-form-wrap">
              <div className="form-glow-top" />
              <div className="form-glow-bottom" />

              {/* Step indicator */}
              <div className="asi-indicator">
                <div className={`asi-dot ${dot1Done ? 'asi-dot--done' : ''} ${dot1Active ? 'asi-dot--active' : ''}`}>1</div>
                <div className={`asi-connector ${conn1Active ? 'asi-connector--active' : ''}`} />
                <div className={`asi-dot ${dot2Done ? 'asi-dot--done' : ''} ${dot2Active ? 'asi-dot--active' : ''}`}>2</div>
                <div className={`asi-connector ${conn2Active ? 'asi-connector--active' : ''}`} />
                <div className={`asi-dot ${dot3Active ? 'asi-dot--active' : ''}`}>3</div>
              </div>

              {/* ── STEP 1 fields ── */}
              {step === 1 && (
                <div id="auditStep1">
                  <div className="form-step-head">
                    <h3 className="form-step-title">Chi sei</h3>
                    <p className="form-step-sub">Passo 1 di 2 — informazioni di base</p>
                  </div>
                  <div className="form-fields">
                    <div className="form-group">
                      <label className="form-label" htmlFor="audit-nome">Nome e cognome</label>
                      <input id="audit-nome" className="form-input" type="text" required
                        placeholder="Il tuo nome" autoComplete="name"
                        value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="audit-email">Email aziendale</label>
                      <input id="audit-email" className="form-input" type="email" required
                        placeholder="nome@azienda.com" autoComplete="email"
                        value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="audit-azienda">Azienda</label>
                      <input id="audit-azienda" className="form-input" type="text" required
                        placeholder="Nome della tua azienda" autoComplete="organization"
                        value={azienda} onChange={e => setAzienda(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="audit-sito">Sito web</label>
                      <input id="audit-sito" className="form-input" type="url"
                        placeholder="https://www.tuaazienda.it" autoComplete="url"
                        value={sito} onChange={e => setSito(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="audit-ruolo">Ruolo</label>
                      <div className="select-wrap">
                        <select id="audit-ruolo" className="form-input"
                          value={ruolo} onChange={e => setRuolo(e.target.value)}>
                          <option value="">Seleziona il tuo ruolo...</option>
                          <option>CEO / Founder</option>
                          <option>Co-Founder</option>
                          <option>Direttore Operativo</option>
                          <option>Direttore Commerciale</option>
                          <option>Responsabile Marketing</option>
                          <option>Altro</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 2 fields ── */}
              {step === 2 && (
                <div id="auditStep2">
                  <div className="form-step-head">
                    <h3 className="form-step-title">La tua azienda</h3>
                    <p className="form-step-sub">Passo 2 di 2 — aiutaci a capire il contesto</p>
                  </div>
                  <div className="form-fields">
                    <div className="form-group">
                      <label className="form-label" htmlFor="audit-fatturato">Fatturato annuo approssimativo</label>
                      <div className="select-wrap">
                        <select id="audit-fatturato" className="form-input" required
                          value={fatturato} onChange={e => setFatturato(e.target.value)}>
                          <option value="">Seleziona una fascia...</option>
                          <option>Meno di €100.000</option>
                          <option>€100.000 – €500.000</option>
                          <option>€500.000 – €1.000.000</option>
                          <option>€1M – €5M</option>
                          <option>Oltre €5M</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="audit-software">Software e tool principali che usi</label>
                      <input id="audit-software" className="form-input" type="text"
                        placeholder="es. HubSpot, Google Sheets, WhatsApp, Notion..."
                        value={software} onChange={e => setSoftware(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="audit-bottleneck">Principale collo di bottiglia operativo</label>
                      <div className="select-wrap">
                        <select id="audit-bottleneck" className="form-input" required
                          value={bottleneck} onChange={e => setBottleneck(e.target.value)}>
                          <option value="">Seleziona l'area critica...</option>
                          <option>Gestione lead e follow-up manuali</option>
                          <option>Report e analisi dati</option>
                          <option>Processi ripetitivi del team</option>
                          <option>Customer service e supporto clienti</option>
                          <option>Fatturazione e amministrazione</option>
                          <option>Più aree contemporaneamente</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="audit-note">
                        Descrivici brevemente la tua situazione{' '}
                        <span className="optional">(facoltativo)</span>
                      </label>
                      <textarea id="audit-note" className="form-input form-textarea" rows={3}
                        placeholder="Cosa ti blocca di più in questo momento? Cosa vorresti automatizzare prima?"
                        value={note} onChange={e => setNote(e.target.value)} />
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 3 — SUCCESS ── */}
              {step === 3 && (
                <div id="auditSuccess" className="audit-success">
                  <div className="audit-success-icon">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                      <path d="M7 19l8 8 14-16" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="audit-success-title">Richiesta ricevuta.</h3>
                  <p className="audit-success-text">
                    Ti risponderemo entro 24 ore per fissare la tua Diagnosi Operativa.
                    Controlla la posta elettronica — anche la cartella spam.
                  </p>
                  <p className="audit-success-sub">
                    Nel frattempo, puoi usare il calcolatore ROI per avere un'idea del valore che l'automazione può generare insieme.
                  </p>
                </div>
              )}
            </div>

            {/* ── Buttons OUTSIDE the card ── */}
            <div className="audit-actions">
              {step === 1 && (
                <>
                  {error && <p className="form-error">{error}</p>}
                  <button className="audit-btn audit-btn--white audit-btn--full" onClick={auditNext}>
                    Continua: la tua azienda →
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  {error && <p className="form-error">{error}</p>}
                  <div className="audit-btn-row">
                    <button className="audit-btn audit-btn--dark" onClick={auditBack}>← Indietro</button>
                    <button id="auditSubmitBtn" ref={submitBtnRef}
                      className="audit-btn audit-btn--white"
                      onClick={submitAudit} disabled={submitting}>
                      {submitting ? 'Invio in corso...' : 'Invia la mia richiesta'}
                    </button>
                  </div>
                  <p className="form-privacy">
                    I tuoi dati sono al sicuro.{' '}
                    <a href="/privacy" className="form-privacy-link">Privacy Policy</a>
                  </p>
                </>
              )}

              {step === 3 && (
                <a href="#calcolatore" className="audit-btn audit-btn--outlined audit-btn--full">
                  Calcola la mia perdita annua →
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
