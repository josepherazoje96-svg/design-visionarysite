import { useMemo, useState } from 'react'

const ASSUNZIONI = {
  tassoChiusura: 0.20,
  settimanePerMese: 4.33,
}

const VALORI_INIZIALI = {
  leadAlMese: 80,
  percPersi: 20,
  valoreCliente: 800,
  oreManuali: 12,
  costoOrario: 25,
}

const CAMPI = [
  { key: 'leadAlMese', label: 'Quanti contatti / lead ricevi in media al mese?', type: 'number', min: 0, max: 2000, step: 5, suffix: '' },
  { key: 'percPersi', label: 'Che percentuale stimi di perdere per risposte lente o mancate?', type: 'range', min: 0, max: 80, step: 1, suffix: '%' },
  { key: 'valoreCliente', label: 'Qual è il valore medio di un cliente per la tua azienda?', type: 'number', min: 0, max: 50000, step: 50, suffix: '€' },
  { key: 'oreManuali', label: 'Quante ore a settimana il team perde su lavoro manuale e ripetitivo?', type: 'number', min: 0, max: 80, step: 1, suffix: 'h/sett.' },
  { key: 'costoOrario', label: "Quanto costa un'ora di lavoro del tuo team (stipendio + costi)?", type: 'number', min: 0, max: 200, step: 1, suffix: '€/h' },
]

const formatEuro = (n) =>
  new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

export function ROICalculator() {
  const [valori, setValori] = useState(VALORI_INIZIALI)
  const [email, setEmail] = useState('')
  const [inviato, setInviato] = useState(false)

  const aggiorna = (key) => (e) => {
    const n = Number(e.target.value)
    setValori((v) => ({ ...v, [key]: Number.isNaN(n) ? 0 : n }))
  }

  const stima = useMemo(() => {
    const leadPersi = valori.leadAlMese * (valori.percPersi / 100)
    const fatturatoPerso = leadPersi * valori.valoreCliente * ASSUNZIONI.tassoChiusura
    const costoLavoro = valori.oreManuali * ASSUNZIONI.settimanePerMese * valori.costoOrario
    const totaleMensile = fatturatoPerso + costoLavoro
    return {
      leadPersi: Math.round(leadPersi),
      fatturatoPerso: Math.round(fatturatoPerso),
      costoLavoro: Math.round(costoLavoro),
      totaleMensile: Math.round(totaleMensile),
      totaleAnnuale: Math.round(totaleMensile * 12),
    }
  }, [valori])

  const invia = (e) => {
    e.preventDefault()
    if (!email) return
    setInviato(true)
  }

  return (
    <section className="section-pad calc-section" id="calcolatrice">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker"><span className="dot" />Strumento gratuito</span>
          <h2 style={{ marginTop: '18px' }}>
            Quanto <span className="grad-text">denaro perdi</span> ogni mese?
          </h2>
          <p className="sec-sub">
            Lead che aspettano una risposta. Ore che il team passa a fare a mano cose che potrebbero girare da sole.
            Inserisci pochi numeri sulla tua azienda e guarda, in tempo reale, quanto ti costa ogni mese non avere ancora un sistema automatico.
          </p>
        </div>

        <div className="calc-grid reveal">
          <div className="calc-inputs glass-strong">
            {CAMPI.map((campo) => (
              <label key={campo.key} className="calc-field">
                <span className="calc-field-label">{campo.label}</span>
                <div className="calc-field-control">
                  <input
                    type={campo.type}
                    min={campo.min}
                    max={campo.max}
                    step={campo.step}
                    value={valori[campo.key]}
                    onChange={aggiorna(campo.key)}
                  />
                  <output>{valori[campo.key]}{campo.suffix}</output>
                </div>
              </label>
            ))}
          </div>

          <div className="calc-result glass-strong">
            <span className="cr-label">Stima della perdita mensile</span>
            <div className="cr-total grad-text">{formatEuro(stima.totaleMensile)}</div>
            <p className="cr-sub">Circa {formatEuro(stima.totaleAnnuale)} all'anno, se nulla cambia.</p>

            <div className="cr-breakdown">
              <div className="cr-row">
                <span>Fatturato perso da lead non gestiti in tempo ({stima.leadPersi} lead/mese)</span>
                <b>{formatEuro(stima.fatturatoPerso)}</b>
              </div>
              <div className="cr-row">
                <span>Costo del lavoro manuale e ripetitivo</span>
                <b>{formatEuro(stima.costoLavoro)}</b>
              </div>
            </div>

            {!inviato ? (
              <form className="calc-email" onSubmit={invia}>
                <p>Ricevi via email il report con il dettaglio del calcolo e le azioni per recuperare questa cifra.</p>
                <div className="calc-email-row">
                  <input
                    type="email"
                    required
                    placeholder="la-tua-email@azienda.it"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Indirizzo email"
                  />
                  <button type="submit" className="btn btn-grad">Inviami il report</button>
                </div>
              </form>
            ) : (
              <div className="calc-email-sent">
                <p>✓ Fatto — il report sta per arrivare nella tua casella.</p>
                <a href="#prezzi" className="arrow-link">Oppure prenota subito una call <span className="ar">→</span></a>
              </div>
            )}
          </div>
        </div>

        <p className="calc-note reveal">
          Stima calcolata su un tasso di chiusura medio del 20% sui lead recuperati e {ASSUNZIONI.settimanePerMese} settimane lavorative al mese —
          gli stessi parametri prudenziali che usiamo nelle prime analisi con i clienti. È un punto di partenza per ragionare sui numeri,
          non un audit completo: quelli reali li costruiamo insieme nella prima chiamata.
        </p>
      </div>
    </section>
  )
}
