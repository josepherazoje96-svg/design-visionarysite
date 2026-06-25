const STEPS = [
  {
    num: '01',
    eyebrow: 'Le origini',
    title: 'Bartender a 18 anni: la prima lezione di sistema',
    body: "Gestire 80 clienti contemporaneamente, con ordini che si sovrappongono, tempi stretti e zero margine di errore. Dietro un bancone impari che senza un sistema preciso, il caos vince sempre. Joseph impara presto che la vera abilità non è lavorare di più — è costruire un metodo che funzioni anche quando sei sotto pressione.",
  },
  {
    num: '02',
    eyebrow: 'La svolta operativa',
    title: 'Amazon: logistica millimetrica su scala',
    body: "Lavorare nell'ecosistema Amazon significa vedere da vicino cosa vuol dire ottimizzare ogni singolo secondo di un processo. Ogni movimento è tracciato, ogni inefficienza è quantificata, ogni costo è visibile. Joseph vede per la prima volta cosa può fare un sistema ben costruito — e decide che questa mentalità deve arrivare alle PMI italiane.",
  },
  {
    num: '03',
    eyebrow: 'Il primo laboratorio',
    title: "Il brand streetwear: l'automazione per necessità",
    body: "Lanciare un brand richiede di gestire ordini, clienti, fornitori, social e logistica allo stesso tempo — spesso da soli. Joseph non può permettersi un team, quindi costruisce sistemi che lavorano al suo posto. Non per scelta filosofica: per sopravvivenza. Funziona. E realizza che quello che ha costruito per sé stesso è esattamente quello di cui hanno bisogno migliaia di imprenditori italiani.",
  },
]

export function Founder() {
  return (
    <section className="section-pad founder" id="fondatore">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="section-label">Il fondatore</span>
          <h2>
            Dalla logistica di Amazon alla <span className="grad-text">libertà di Visionary</span>.
          </h2>
          <p className="founder-sub">
            Visionary non nasce da un corso online o da un'idea teorica. Nasce dall'esigenza reale
            di un imprenditore che ha vissuto il caos operativo sulla propria pelle — e ha trovato
            il modo di uscirne.
          </p>
        </div>

        <div className="founder-layout">
          <div className="founder-timeline founder-timeline--compact">
            {STEPS.map((step) => (
              <div className="founder-step reveal" key={step.num}>
                <div className="founder-marker">
                  <span className="founder-dot">{step.num}</span>
                  <span className="founder-line" />
                </div>
                <div className="founder-card">
                  <span className="founder-eyebrow">{step.eyebrow}</span>
                  <h3 className="founder-title">{step.title}</h3>
                  <p className="founder-body">{step.body}</p>
                </div>
              </div>
            ))}

            <div className="founder-step reveal">
              <div className="founder-marker">
                <span className="founder-dot">04</span>
              </div>
              <div className="founder-card founder-card--now">
                <span className="founder-eyebrow">Oggi</span>
                <h3 className="founder-title">Visionary: infrastrutture intelligenti per imprenditori ambiziosi</h3>
                <p className="founder-body">
                  Visionary nasce per portare la stessa mentalità operativa di Amazon alle PMI
                  italiane. Non vendiamo tool no-code o prompt di ChatGPT. Costruiamo infrastrutture
                  intelligenti — sistemi che pensano, reagiscono e scalano — così tu puoi tornare a
                  fare l'imprenditore invece del data-entry manager della tua stessa azienda.
                </p>
                <a href="#prezzi" className="btn btn-white founder-cta">
                  Parla con Joseph →
                </a>
              </div>
            </div>
          </div>

          <div className="founder-photo-col reveal">
            <img
              src="/assets/ricrea_l'immagine_in_verticale_2K_202605271418.jpeg"
              alt="Joseph, fondatore di Visionary"
              className="founder-photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
