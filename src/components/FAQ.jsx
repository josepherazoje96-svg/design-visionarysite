import { useState, useRef } from 'react'

const FAQS = [
  {
    q: 'Costa troppo per la mia azienda.',
    a: 'Dipende da quante ore a settimana il tuo team spende su lavoro ripetitivo. Se spende 10 ore/settimana e un\'ora costa 25 €, sono 1.000 €/mese in lavoro che un sistema può fare. La maggior parte dei clienti recupera il costo entro il primo mese. Prima di decidere, calcoliamo insieme quanto ti stanno costando queste ore.',
  },
  {
    q: 'Quanto tempo ci vuole prima di vedere i risultati?',
    a: 'Le prime automazioni vanno online entro 2–4 settimane. Entro il primo mese i lead ricevono risposta immediata e il lavoro manuale si riduce in modo visibile.',
  },
  {
    q: 'La mia azienda è diversa — non so se funziona per me.',
    a: 'Ogni azienda ha processi diversi. La prima chiamata è un\'analisi del tuo caso, non una demo. Se non vediamo margine per aiutarti, te lo diciamo.',
  },
  {
    q: 'Chi mi supporta dopo l\'installazione?',
    a: 'Ogni progetto include un periodo di supporto. Monitoriamo il sistema, correggiamo i problemi e aggiustiamo sulla base dei dati. Non spariremo dopo la consegna.',
  },
  {
    q: 'Che risultati posso aspettarmi in concreto?',
    a: 'I clienti risparmiano tra 10 e 30 ore di lavoro manuale a settimana. Il tempo di risposta ai lead scende da ore a minuti. I numeri variano — te li stimiamo prima di iniziare.',
  },
  {
    q: 'Si collega agli strumenti che già uso?',
    a: 'Sì. Lavoriamo con CRM, piattaforme email, fogli di calcolo e strumenti di messaggistica. Se hai dubbi su uno strumento specifico, portalo nella chiamata.',
  },
  {
    q: 'Se smetto di lavorare con voi, il sistema rimane operativo?',
    a: 'Sì. Costruiamo su piattaforme standard che puoi gestire in autonomia o affidare a chiunque. Non crei dipendenza da noi — crei un sistema che appartiene alla tua azienda.',
  },
  {
    q: 'I dati dei miei clienti dove vanno a finire?',
    a: 'Lavoriamo sulle tue piattaforme. I tuoi dati restano nei tuoi strumenti — non li trasferiamo, non li archiviamo su server di terze parti.',
  },
]

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  const panelRefs = useRef([])

  const toggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx))
  }

  return (
    <section className="section-pad" id="faq">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="section-label">06 — Domande frequenti</span>
          <h2><span className="grad-text">Risposte dirette</span>.</h2>
        </div>

        <div className="faq-grid reveal">
          {FAQS.map((faq, idx) => (
            <div key={idx} className={`faq-item${openIdx === idx ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(idx)}>
                {faq.q} <span className="faq-icon" />
              </button>
              <div
                className="faq-a"
                ref={(el) => { panelRefs.current[idx] = el }}
                style={{
                  maxHeight: openIdx === idx
                    ? (panelRefs.current[idx]?.scrollHeight ?? 0) + 'px'
                    : undefined,
                }}
              >
                <div className="faq-a-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-foot reveal">
          <a href="#contatto" className="arrow-link">
            Hai un'altra domanda? Scrivici direttamente <span className="ar">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
