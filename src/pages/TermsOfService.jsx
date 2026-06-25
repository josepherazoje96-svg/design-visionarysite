import { Link } from 'react-router-dom'
import { LegalLayout } from '../components/LegalLayout'

export default function TermsOfService() {
  return (
    <LegalLayout eyebrow="Note legali" title="Termini e Condizioni" updated="21/06/2026">
      <section className="legal-section">
        <h2>1. Introduzione</h2>
        <p>
          Le presenti Condizioni Generali di Servizio ("Condizioni Generali" o "Contratto")
          disciplinano i termini e le condizioni per l'uso del software e dei servizi Visionary AI
          offerti in modalità SaaS ("Servizi") da Visionary AI, accessibili attraverso la
          piattaforma concordata via contratto con il cliente.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Definizioni</h2>
        <ul>
          <li><b>"Cliente":</b> La persona fisica o giuridica che utilizza i Servizi di Visionary AI.</li>
          <li><b>"Software":</b> Il software basato su AI fornito da Visionary AI, incluso chatbot, automazioni e strumenti di analisi.</li>
          <li><b>"Servizi":</b> L'insieme delle funzionalità offerte, inclusi chatbot, automazioni e consulenze AI.</li>
          <li><b>"Dati del Cliente":</b> Qualsiasi informazione o contenuto caricato dal Cliente sulla Piattaforma.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Oggetto del Contratto</h2>
        <p>
          Visionary AI concede al Cliente una licenza d'uso non esclusiva, non trasferibile e non
          sub-licenziabile per accedere e utilizzare i Servizi.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Registrazione e Accesso alla Piattaforma</h2>
        <p>
          Gli utenti non creano un account su Visionary AI. Per accedere ai Servizi, il Cliente
          può contattarci via email o prenotare un appuntamento tramite form disponibile sul
          sito.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Abbonamenti, Pagamenti e Disdetta</h2>

        <h3>5.1 Modalità di pagamento</h3>
        <p>Visionary AI offre soluzioni software con:</p>
        <ul>
          <li>Pagamenti one-shot (una tantum)</li>
          <li>Collaborazioni con rinnovo mensile o annuale</li>
        </ul>

        <h3>5.2 Disdetta e rimborsi</h3>
        <p>
          Le condizioni di disdetta e rimborsi sono stabilite individualmente nel contratto
          fornito al Cliente.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Proprietà Intellettuale</h2>
        <p>
          Visionary AI detiene tutti i diritti sul Software, inclusi codice sorgente e algoritmi.
          Il Cliente non può copiare, modificare o distribuire il Software senza autorizzazione.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Limitazione di Responsabilità</h2>
        <p>
          I Servizi sono forniti senza garanzie di commerciabilità, idoneità per scopi specifici o
          risultati garantiti.
        </p>
        <p>
          Il Cliente è l'unico responsabile dei contenuti generati tramite il Software basato su
          intelligenza artificiale, inclusi accuratezza, completezza e conformità normativa.
          Visionary non garantisce che i contenuti generati siano privi di errori o idonei per
          specifiche finalità.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Trattamento dei Dati e Privacy</h2>
        <p>
          L'informativa privacy è disponibile su{' '}
          <Link to="/privacy-policy" className="legal-inline-link">
            visionaryntelligence.com/privacy-policy
          </Link>.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Modifiche ai Termini di Servizio</h2>
        <p>
          Visionary AI si riserva il diritto di modificare le presenti Condizioni Generali con un
          preavviso di 30 giorni. Se il Cliente non accetta le modifiche, può recedere dal
          contratto senza penalità.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Forza Maggiore</h2>
        <p>
          Visionary AI non sarà responsabile per ritardi o interruzioni dei Servizi causati da
          eventi di forza maggiore, inclusi disastri naturali o guasti tecnologici.
        </p>
      </section>

      <section className="legal-section">
        <h2>11. Legge Applicabile e Foro Competente</h2>
        <p>
          Le presenti Condizioni Generali sono regolate dalla legge italiana. Per eventuali
          controversie, il foro competente è Torino.
        </p>
      </section>

      <section className="legal-section">
        <h2>12. Contatti</h2>
        <p>
          Per qualsiasi domanda, richiesta o chiarimento in merito a questa Policy o, più in
          generale, al trattamento dei Suoi dati personali, può contattare in qualsiasi momento il
          Titolare del trattamento, Rodriguez Joseph Erazo (P. IVA 13114770012), tramite i
          seguenti canali:
        </p>
        <ul>
          <li><b>Email:</b> visionary.iasolution@gmail.com</li>
          <li><b>Telefono:</b> 3489015733 / 3793104418</li>
          <li>
            <b>Modulo di contatto:</b> può eventualmente contattarci anche compilando il form di
            contatto disponibile sul nostro sito web visionaryntelligence.com (se presente).
          </li>
        </ul>
        <p>
          Saremo lieti di rispondere alle Sue comunicazioni e di fornirLe assistenza. In generale,
          il Titolare si impegna a rispondere alle richieste degli interessati nel più breve tempo
          possibile e comunque entro i termini di legge.
        </p>
      </section>
    </LegalLayout>
  )
}
