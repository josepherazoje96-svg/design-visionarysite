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

const WEBHOOK_URL = 'https://newn8n.visionaryntelligence.com/webhook/c26d5d12-b9d3-43a0-a3c8-24fcef5faca7'

const formatEuro = (n) =>
  new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

export function ROICalculator() {
  const [valori, setValori] = useState(VALORI_INIZIALI)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [stato, setStato] = useState('idle') // idle | loading | done | error

  const aggiorna = (key) => (e) => {
    const n = Number(e.target.value)
    setValori((v) => ({ ...v, [key]: Number.isNaN(n) ? 0 : n }))
  }

  const stima = useMemo(() => {
    const leadPersi = valori.leadAlMese * (valori.percPersi / 100)
    const fatturatoPerso = leadPersi * valori.valoreCliente * ASSUNZIONI.tassoChiusura
    const costoLavoro = valori.oreManuali * ASSUNZIONI.settimanePerMese * valori.costoOrario
    const totaleMensile = fatturatoPerso + costoLavoro
    const totaleAnnuale = totaleMensile * 12
    const oreRecuperabili = Math.round(valori.oreManuali * ASSUNZIONI.settimanePerMese * 12 * 0.75)
    const recuperoStimato = Math.round(totaleAnnuale * 0.7)
    const paybackMesi = recuperoStimato > 0 ? Math.max(1, Math.round((2500 / (recuperoStimato / 12)))) : 0
    return {
      leadPersi: Math.round(leadPersi),
      fatturatoPerso: Math.round(fatturatoPerso),
      costoLavoro: Math.round(costoLavoro),
      totaleMensile: Math.round(totaleMensile),
      totaleAnnuale: Math.round(totaleAnnuale),
      oreRecuperabili,
      recuperoStimato,
      roi: recuperoStimato > 0 ? Math.round((recuperoStimato / 2500) * 100) : 0,
      paybackMesi,
    }
  }, [valori])

  const invia = async (e) => {
    e.preventDefault()
    if (!email || !nome) return
    setStato('loading')
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          inputs: {
            leadAlMese: valori.leadAlMese,
            percPersi: valori.percPersi,
            valoreCliente: valori.valoreCliente,
            oreManuali: valori.oreManuali,
            costoOrario: valori.costoOrario,
          },
          results: {
            leadPersi: stima.leadPersi,
            fatturatoPerso: stima.fatturatoPerso,
            costoLavoro: stima.costoLavoro,
            perditaMensile: stima.totaleMensile,
            perditaTotale: stima.totaleAnnuale,
            oreRecuperabili: stima.oreRecuperabili,
            recuperoStimato: stima.recuperoStimato,
            roi: stima.roi,
            paybackMesi: stima.paybackMesi,
          },
        }),
      })
      setStato('done')
    } catch {
      setStato('error')
    }
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
          {/* --- INPUT --- */}
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

          {/* --- RISULTATI IMMEDIATI --- */}
          <div className="calc-result glass-strong">
            <span className="cr-label">Stima della perdita mensile</span>
            <div className="cr-total grad-text">{formatEuro(stima.totaleMensile)}</div>
            <p className="cr-sub">Circa {formatEuro(stima.totaleAnnuale)} all'anno, se nulla cambia.</p>

            <div className="cr-breakdown">
              <div className="cr-row">
                <span>Fatturato perso da lead non gestiti ({stima.leadPersi} lead/mese)</span>
                <b>{formatEuro(stima.fatturatoPerso)}</b>
              </div>
              <div className="cr-row">
                <span>Costo del lavoro manuale e ripetitivo</span>
                <b>{formatEuro(stima.costoLavoro)}</b>
              </div>
            </div>

            {/* KPI aggiuntivi */}
            <div className="cr-kpis">
              <div className="cr-kpi">
                <span className="cr-kpi-value grad-text">{stima.oreRecuperabili}h</span>
                <span className="cr-kpi-label">ore recuperabili/anno</span>
              </div>
              <div className="cr-kpi">
                <span className="cr-kpi-value grad-text">{stima.roi}%</span>
                <span className="cr-kpi-label">ROI stimato</span>
              </div>
              <div className="cr-kpi">
                <span className="cr-kpi-value grad-text">{stima.paybackMesi} {stima.paybackMesi === 1 ? 'mese' : 'mesi'}</span>
                <span className="cr-kpi-label">payback stimato</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- REPORT CTA --- */}
        <div className="calc-report-cta glass-strong reveal">
          {stato !== 'done' ? (
            <>
              <div className="calc-report-header">
                <span className="calc-report-eyebrow">Il tuo report è pronto.</span>
                <h3 className="calc-report-title">
                  Quello che hai appena visto è solo un riepilogo.
                </h3>
                <p className="calc-report-sub">
                  Abbiamo preparato un report molto più dettagliato che include:
                </p>
                <ul className="calc-report-list">
                  <li>✅ Analisi completa dei costi nascosti</li>
                  <li>✅ Le 5 automazioni che implementerei nella tua azienda</li>
                  <li>✅ Priorità di implementazione</li>
                  <li>✅ Stima del ROI per ogni automazione</li>
                  <li>✅ Roadmap personalizzata</li>
                </ul>
              </div>

              <form className="calc-report-form" onSubmit={invia}>
                <p className="calc-report-form-label">Inserisci la tua email per riceverlo gratuitamente.</p>
                <div className="calc-report-fields">
                  <input
                    type="text"
                    required
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    aria-label="Nome"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Indirizzo email"
                  />
                  <button
                    type="submit"
                    className="btn btn-grad"
                    disabled={stato === 'loading'}
                  >
                    {stato === 'loading' ? 'Invio in corso…' : 'Ricevi il Report Completo'}
                  </button>
                </div>
                {stato === 'error' && (
                  <p className="calc-report-error">Qualcosa è andato storto. Riprova tra qualche secondo.</p>
                )}
              </form>
            </>
          ) : (
            <div className="calc-email-sent">
              <p>✓ Perfetto — il report personalizzato sta per arrivare nella tua casella.</p>
              <a href="#prezzi" className="arrow-link">Vuoi parlarne direttamente? Prenota una call <span className="ar">→</span></a>
            </div>
          )}
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
