import { Link, Route, Routes } from 'react-router-dom'
import { AnimatedBg } from './components/AnimatedBg'
import { AuditForm } from './components/AuditForm'
import { FAQ } from './components/FAQ'
import { Founder } from './components/Founder'
import { Odometer } from './components/Odometer'
import { ROICalculator } from './components/ROICalculator'
import { SplineHero } from './components/SplineHero'
import { useAnimations } from './hooks/useAnimations'
import CookiePolicy from './pages/CookiePolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/termini-e-condizioni" element={<TermsOfService />} />
    </Routes>
  )
}

function Landing() {
  useAnimations()

  return (
    <>
      <AnimatedBg />

      {/* NAV */}
      <nav className="nav" id="nav">
        <div className="nav-pill glass-strong">
          <div className="nav-left">
            <a href="#top" className="nav-mark" aria-label="Visionary">
              <img src="/assets/visionary-logo.png" alt="Visionary" />
            </a>
            <div className="nav-links">
              <a href="#automazioni">Servizi</a>
              <a href="#processo">Processo</a>
              <a href="#casi">Casi studio</a>
              <a href="#fondatore">Chi sono</a>
            </div>
          </div>
          <a href="#prezzi" className="btn btn-ghost nav-cta">Prenota Call</a>
        </div>
      </nav>

      {/* HERO — Spline 3D split layout */}
      <SplineHero />

      {/* STATS */}
      <section className="stats" aria-label="Risultati">
        <div className="stats-grid">
          <div className="stat reveal">
            <div className="num grad-text">
              <Odometer value={10} />–<Odometer value={30} /><span style={{ fontSize: '0.5em' }}>h</span>
            </div>
            <div className="lab">di lavoro manuale eliminato ogni settimana</div>
          </div>
          <div className="stat reveal">
            <div className="num grad-text">&lt; <Odometer value={2} /> min</div>
            <div className="lab">tempo medio di risposta ai clienti</div>
          </div>
          <div className="stat reveal">
            <div className="num grad-text">
              <Odometer value={2} />–<Odometer value={4} /> sett.
            </div>
            <div className="lab">dal primo incontro al sistema online</div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-pad problema">
        <div className="wrap">
          <span className="section-label reveal">01 · Il problema</span>
          <h2 className="reveal" style={{ marginTop: '22px' }}>
            Stai perdendo <span className="grad-text">ore e clienti</span>. Entrambi hanno un costo.
          </h2>
          <div className="body reveal">
            <p>
              Ogni azienda funziona esattamente allo stesso modo:
              Marketing → Vendita → Chiusura → Onboarding → Delivery → Post-vendita
            </p>
            <p style={{ marginTop: '22px' }}>
              Se perdi clienti nel marketing, non importa avere un ottimo prodotto.
              Se non gestisci bene il post-vendita, perdi ricavi anche con molte vendite.
              Potresti ampliare il team, ma il problema non è quante persone hai, è su cosa stanno investendo il loro tempo.
              Non serve più personale: serve che il lavoro ripetitivo smetta di assorbire risorse preziose.
            </p>
          </div>
          <a href="#automazioni" className="arrow-link reveal">
            Vedi cosa si può automatizzare nella tua azienda <span className="ar">→</span>
          </a>
        </div>
      </section>

      {/* CALCOLATRICE — strumento gratuito */}
      <ROICalculator />

      {/* SERVIZI */}
      <section className="section-pad" id="automazioni">
        <div className="wrap">
          <div className="svc-head reveal">
            <span className="section-label">02 · Servizi</span>
            <h2>Quello che possiamo fare per <span className="grad-text">te</span>.</h2>
            <p className="svc-subtitle">Qualcosa ti ruba ore o stai perdendo lead? Lo automatizziamo o lo costruiamo su misura. Ci dici cosa serve, ti proponiamo la soluzione.</p>
            <p className="svc-niche">Ideale per studi professionali, cliniche estetiche, agenzie immobiliari e imprenditori a Torino e in tutta Italia: dove un appuntamento perso vale centinaia di euro.</p>
          </div>

          <div className="svc-grid">
            <article className="svc-card reveal">
              <div className="svc-icon svc-icon--violet">⚙️</div>
              <h3>Automatizzazioni su misura</h3>
              <p>Se si fa a mano e si ripete, si può automatizzare. Lead generation, preventivi automatici, qualificatori di lead, risposte, prenotazione appuntamenti e connessione dei tuoi strumenti.</p>
              <div className="svc-tags">
                <span className="svc-tag">Lead generation</span>
                <span className="svc-tag">Preventivi automatici</span>
                <span className="svc-tag">Qualificatore lead</span>
              </div>
            </article>

            <article className="svc-card reveal">
              <div className="svc-icon svc-icon--cyan">🤖</div>
              <h3>Chatbot e Agente AI</h3>
              <p>Un assistente che risponde e vende per te 24/7. Addestrato con il tuo business, il tuo brand e i tuoi processi, connesso al tuo WhatsApp o al tuo sito.</p>
              <div className="svc-tags">
                <span className="svc-tag">Bot WhatsApp</span>
                <span className="svc-tag">Assistenza 24/7</span>
                <span className="svc-tag">CRM connesso</span>
              </div>
            </article>

            <article className="svc-card reveal">
              <div className="svc-icon svc-icon--blue">🖥️</div>
              <h3>Siti web e applicazioni</h3>
              <p>Siti web, landing page e funnel che vendono, e app su misura per il tuo business. Design curato, veloci e pronti a convertire le visite in clienti.</p>
              <div className="svc-tags">
                <span className="svc-tag">Siti & landing</span>
                <span className="svc-tag">Funnel di vendita</span>
                <span className="svc-tag">App su misura</span>
              </div>
            </article>

            <article className="svc-card reveal">
              <div className="svc-icon svc-icon--teal">🔧</div>
              <h3>Software su misura</h3>
              <p>Sviluppo il sistema che il tuo business necessita: il tuo CRM proprietario, pannelli di controllo, strumenti interni e piattaforme costruite al tuo modo di lavorare.</p>
              <div className="svc-tags">
                <span className="svc-tag">CRM proprietario</span>
                <span className="svc-tag">Pannelli & dashboard</span>
                <span className="svc-tag">Strumenti interni</span>
              </div>
            </article>

            <article className="svc-card reveal">
              <div className="svc-icon svc-icon--blue">✦</div>
              <h3>Presenza online, senza il tuo tempo</h3>
              <p>Il tuo avatar AI che comunica con il tuo volto, la tua voce e il tuo stile. Strategia, piano editoriale e contenuti: pubblicati senza bloccare la tua agenda.</p>
              <div className="svc-tags">
                <span className="svc-tag">Avatar AI</span>
                <span className="svc-tag">Piano editoriale</span>
                <span className="svc-tag">Produzione contenuti</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section-pad processo" id="processo">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="section-label">03 · Processo</span>
            <h2>Dal primo incontro al sistema operativo: <span className="grad-text">4 passaggi</span>.</h2>
          </div>

          <div className="steps">
            <div className="step reveal">
              <div className="s-num s-grad">01</div>
              <h3>Analisi</h3>
              <div className="s-time">1 incontro · 30 minuti</div>
              <p>Capiamo quali processi consumano più ore e dove stai perdendo lead.</p>
            </div>
            <div className="step reveal">
              <div className="s-num">02</div>
              <h3>Progettazione</h3>
              <div className="s-time">3–5 giorni</div>
              <p>Stabiliamo cosa automatizzare, in quale ordine, con gli strumenti che hai già.</p>
            </div>
            <div className="step reveal">
              <div className="s-num">03</div>
              <h3>Costruzione</h3>
              <div className="s-time">2–3 settimane</div>
              <p>Costruiamo e testiamo il sistema. Nessun codice da parte tua. Nessuna configurazione.</p>
            </div>
            <div className="step reveal">
              <div className="s-num">04</div>
              <h3>Avvio</h3>
              <div className="s-time">Online + monitoraggio</div>
              <p>Il sistema va online. Monitoriamo i primi giorni e aggiustiamo ciò che non funziona.</p>
            </div>
          </div>

          <a href="#prezzi" className="arrow-link reveal">
            Prenota la prima analisi gratuita <span className="ar">→</span>
          </a>
        </div>
      </section>

      {/* CASI STUDIO */}
      <section className="section-pad" id="casi">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="section-label">04 · Casi studio</span>
            <h2>4 casi. <span className="grad-text">Risultati misurabili</span>. Niente stime.</h2>
          </div>

          <div className="cases">
            <article className="case reveal">
              <span className="c-co">Studio Dentistico</span>
              <div className="metric grad-text">
                −80%
                <span className="metric-sub">no-show dopo l'automazione</span>
              </div>
              <div className="case-div" />
              <div className="row">
                <span className="rl">Problema</span>
                <span className="rv">Il 30–40% degli appuntamenti saltava senza preavviso. La segreteria passava ore a richiamare i pazienti.</span>
              </div>
              <div className="row">
                <span className="rl">Soluzione</span>
                <span className="rv">Sequenza automatica di conferma e reminder via WhatsApp: nessun intervento manuale, zero dimenticanze.</span>
              </div>
            </article>

            <article className="case reveal">
              <span className="c-co">Clinica Estetica</span>
              <div className="metric grad-text">
                14h
                <span className="metric-sub">risparmiate a settimana su burocrazia e follow-up</span>
              </div>
              <div className="case-div" />
              <div className="row">
                <span className="rl">Problema</span>
                <span className="rv">Ogni paziente richiedeva inserimento manuale: cartella, modulo di consenso, reminder pre-procedura e follow-up post-trattamento. La segreteria gestiva tutto a mano.</span>
              </div>
              <div className="row">
                <span className="rl">Soluzione</span>
                <span className="rv">Flusso automatizzato dalla prenotazione: modulo anamnestico inviato in anticipo via WhatsApp, reminder 48h e 2h prima della procedura, follow-up post-trattamento per raccogliere feedback e proporre il prossimo appuntamento.</span>
              </div>
            </article>

            <article className="case reveal">
              <span className="c-co">Agenzia Immobiliare</span>
              <div className="metric grad-text">
                3×
                <span className="metric-sub">lead lavorati con lo stesso team</span>
              </div>
              <div className="case-div" />
              <div className="row">
                <span className="rl">Problema</span>
                <span className="rv">I lead arrivavano da più canali e venivano persi o seguiti in ritardo. Nessuna sequenza definita di follow-up.</span>
              </div>
              <div className="row">
                <span className="rl">Soluzione</span>
                <span className="rv">Assistente AI che qualifica ogni richiesta, risponde entro 2 minuti e attiva il follow-up giusto in base al profilo del lead.</span>
              </div>
            </article>

            <article className="case reveal">
              <span className="c-co">Imprenditore / Personal Brand</span>
              <div className="metric grad-text">
                0h
                <span className="metric-sub">passate davanti alla telecamera ogni settimana</span>
              </div>
              <div className="case-div" />
              <div className="row">
                <span className="rl">Problema</span>
                <span className="rv">Costruire autorevolezza online richiede tempo: idee da trovare, video da registrare, contenuti da pianificare. Per molti imprenditori la creazione di contenuti diventa l'ultima priorità.</span>
              </div>
              <div className="row">
                <span className="rl">Soluzione</span>
                <span className="rv">Creiamo una versione digitale di te, capace di comunicare con il tuo volto, la tua voce e il tuo stile. Ci occupiamo di strategia, calendario editoriale e idee contenuto, così pubblichi con continuità senza bloccare la tua agenda.</span>
              </div>
            </article>
          </div>

          <div className="cases-cta reveal">
            <p className="cases-cta-eyebrow">Appuntamenti persi. Ore sprecate sul gestionale. Lead che non rispondono. Contenuti che non escono mai.</p>
            <a href="#prezzi" className="btn btn-white btn-lg">
              Sì, lo voglio anche per la mia azienda →
            </a>
            <p className="cases-cta-sub">Diagnosi gratuita · Risposta entro 24h · Zero impegno</p>
          </div>
        </div>
      </section>

      {/* IL FONDATORE */}
      <Founder />

      {/* AUDIT FORM — Diagnosi Operativa Gratuita */}
      <AuditForm />

      {/* FAQ */}
      <FAQ />

      {/* CTA FINALE */}
      <section className="section-pad cta-final" id="contatto">
        <div className="wrap">
          <div className="cta-card glass-strong reveal">
            <span className="kicker"><span className="dot" />Analisi gratuita</span>
            <h2>
              30 minuti. Sai <span className="grad-text">esattamente quante ore</span> stai perdendo ogni settimana.
            </h2>
            <p className="sub">Nessun impegno. Nessuna demo. Solo un'analisi reale del tuo caso.</p>
            <a href="#prezzi" className="btn btn-white btn-lg">
              Prenota la chiamata gratuita
            </a>
            <p className="urgency">
              Prendiamo al massimo <b>4 nuovi clienti</b> al mese. Questo mese restano <b>2 posti</b>.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <a href="#top" className="footer-logo" aria-label="Visionary">
                <img src="/assets/visionary-logo.png" alt="Visionary" />
              </a>
              <p className="f-tag">
                L'intelligenza artificiale non è più un'opzione, è una necessità competitiva.
              </p>
            </div>
            <div className="f-links">
              <div className="f-col">
                <span className="h">Sito</span>
                <a href="#automazioni">Automazioni</a>
                <a href="#processo">Processo</a>
                <a href="#casi">Casi studio</a>
                <a href="#fondatore">Chi sono</a>
              </div>
              <div className="f-col">
                <span className="h">Contatti</span>
                <a href="#prezzi">Prenota una call</a>
                <a href="mailto:visionary.iasolution@gmail.com">visionary.iasolution@gmail.com</a>
              </div>
              <div className="f-col">
                <span className="h">Note legali</span>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/cookie-policy">Cookie Policy</Link>
                <Link to="/termini-e-condizioni">Termini e Condizioni</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="privacy">
              I tuoi dati restano nei tuoi strumenti: non li trasferiamo, non li archiviamo su server di terze parti.
            </span>
            <span>© 2026 Visionary. Tutti i diritti riservati.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
