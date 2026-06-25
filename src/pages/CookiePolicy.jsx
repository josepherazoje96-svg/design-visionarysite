import { Link } from 'react-router-dom'
import { LegalLayout } from '../components/LegalLayout'

export default function CookiePolicy() {
  return (
    <LegalLayout eyebrow="Note legali" title="Cookie Policy" updated="21-06-2026">
      <section className="legal-section">
        <p>
          La presente Cookie Policy descrive le diverse tipologie di cookie e tecnologie simili
          (di seguito, "cookie") utilizzate sul sito visionaryntelligence.com (il "Sito"),
          gestito da Rodriguez Joseph Erazo ("Visionary", il "Titolare"), con sede in Torino (TO),
          Italia, P.IVA 13114770012.
        </p>
        <p>
          Per qualsiasi informazione sul trattamento dei dati personali effettuato dal Titolare,
          può consultare la nostra{' '}
          <Link to="/privacy-policy" className="legal-inline-link">Privacy Policy</Link>. Per
          contattarci: visionary.iasolution@gmail.com – 3489015733 / 3793104418.
        </p>
      </section>

      <section className="legal-section">
        <h2>1. Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo
          dell'utente (computer, smartphone, tablet) dove vengono memorizzati per essere poi
          ritrasmessi agli stessi siti alla visita successiva. Le tecnologie "simili"
          comprendono pixel tag, SDK, local/session storage, web beacon e fingerprinting. Questi
          strumenti consentono al Sito di funzionare correttamente, ricordare le preferenze
          dell'utente, effettuare misurazioni statistiche e offrire contenuti e annunci
          personalizzati, previo consenso ove necessario.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Titolare e contatti</h2>
        <ul>
          <li><b>Titolare del trattamento:</b> Rodriguez Joseph Erazo</li>
          <li><b>Email:</b> visionary.iasolution@gmail.com</li>
          <li><b>Telefono:</b> 3489015733 / 3793104418</li>
          <li><b>Dominio:</b> visionaryntelligence.com</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Tipologie di cookie utilizzati</h2>
        <p>Sul nostro Sito utilizziamo le seguenti categorie di cookie:</p>

        <h3>Cookie tecnici (necessari)</h3>
        <p>
          Essenziali per il corretto funzionamento del Sito (ad es. gestione sessione, sicurezza,
          salvataggio del consenso). Non richiedono il Suo consenso.
        </p>

        <h3>Cookie di preferenza / funzionali</h3>
        <p>
          Consentono di ricordare alcune scelte dell'utente (es. lingua, layout). Richiedono il
          consenso solo quando non strettamente necessari.
        </p>

        <h3>Cookie statistici / analitici</h3>
        <p>
          Utilizzati per misurare il traffico e le performance del Sito in forma aggregata.
          <br />
          <b>Google Analytics 4 (GA4)</b> – fornitore: Google Ireland Limited. Configurato con
          misure di tutela (es. IP masking; attivazione di Consent Mode v2; opzioni EU Data
          Boundary ove applicabili). Installati solo previo consenso. È sempre possibile
          revocare/negare il consenso (vedi §7).
        </p>

        <h3>Cookie di marketing e profilazione</h3>
        <p>
          Utilizzati per mostrare contenuti/pubblicità personalizzati su questo Sito o su
          piattaforme terze, misurare l'efficacia delle campagne e creare pubblici.
          <br />
          <b>Meta Pixel</b> – fornitore: Meta Platforms Ireland Limited (Facebook/Instagram).
          Installato solo previo consenso. È sempre possibile revocare/negare il consenso (vedi
          §7).
        </p>

        <p className="legal-note">
          Nota: alcuni strumenti di terze parti potrebbero trattare dati (es. IP, identificatori
          online, eventi di navigazione) anche al di fuori del nostro Sito. Trova maggiori
          dettagli nelle rispettive informative dei fornitori.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Base giuridica</h2>
        <ul>
          <li>
            <b>Cookie tecnici:</b> esecuzione di misure tecniche necessarie all'erogazione del
            servizio (art. 6.1.b GDPR) e nostro legittimo interesse al funzionamento/sicurezza
            del Sito (art. 6.1.f GDPR).
          </li>
          <li>
            <b>Cookie preferenze / analitici / marketing:</b> consenso dell'utente (art. 6.1.a
            GDPR), espresso tramite il banner iniziale o il Centro Preferenze Cookie.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>5. Chi installa i cookie (prima/terza parte)</h2>
        <ul>
          <li>
            <b>Cookie di prima parte:</b> installati direttamente dal nostro dominio
            visionaryntelligence.com.
          </li>
          <li>
            <b>Cookie di terza parte:</b> installati da domini/fornitori diversi (es. Google,
            Meta). Questi soggetti operano come autonomi titolari del trattamento dei dati (o
            talvolta come responsabili), secondo le loro privacy/cookie policy.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>6. Elenco indicativo dei cookie</h2>
        <p>
          L'elenco che segue è indicativo e può variare nel tempo (versioni, nomi e durate
          dipendono dai fornitori e dalla configurazione). Il Centro Preferenze Cookie mostra
          sempre lo stato aggiornato.
        </p>

        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Fornitore</th>
                <th>Finalità</th>
                <th>Tipologia</th>
                <th>Durata</th>
                <th>Parte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent, cookie_preference</td>
                <td>Visionary</td>
                <td>Memorizza scelta consenso categorie cookie</td>
                <td>Tecnico</td>
                <td>6–12 mesi</td>
                <td>Prima</td>
              </tr>
              <tr>
                <td>PHPSESSID *</td>
                <td>Visionary / Piattaforma Sito</td>
                <td>Gestione sessione utente</td>
                <td>Tecnico</td>
                <td>Sessione</td>
                <td>Prima</td>
              </tr>
              <tr>
                <td>__cf_bm *</td>
                <td>CDN/Firewall (es. Cloudflare)</td>
                <td>Protezione bot/traffico malevolo</td>
                <td>Tecnico</td>
                <td>30 min</td>
                <td>Terza</td>
              </tr>
              <tr>
                <td>wp-settings-*, wordpress_logged_in_* *</td>
                <td>WordPress (se usato)</td>
                <td>Preferenze utente/log-in</td>
                <td>Tecnico/Funzionale</td>
                <td>12 mesi / Sessione</td>
                <td>Prima</td>
              </tr>
              <tr>
                <td>_ga</td>
                <td>Google Analytics 4</td>
                <td>Statistiche aggregate sulle visite</td>
                <td>Analitico</td>
                <td>2 anni</td>
                <td>Terza</td>
              </tr>
              <tr>
                <td>ga&lt;container-id&gt;</td>
                <td>Google Analytics 4</td>
                <td>Persistenza sessione/visite</td>
                <td>Analitico</td>
                <td>2 anni</td>
                <td>Terza</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Google Analytics</td>
                <td>Distinzione utenti</td>
                <td>Analitico</td>
                <td>24 ore</td>
                <td>Terza</td>
              </tr>
              <tr>
                <td>_gat / _ga_throttle</td>
                <td>Google Analytics</td>
                <td>Limitazione richieste</td>
                <td>Analitico</td>
                <td>1 minuto</td>
                <td>Terza</td>
              </tr>
              <tr>
                <td>_gcl_au</td>
                <td>Google (Ads/Conversioni)</td>
                <td>Sperimentazione pubblicitaria</td>
                <td>Marketing</td>
                <td>3 mesi</td>
                <td>Terza</td>
              </tr>
              <tr>
                <td>_fbp</td>
                <td>Meta (Facebook/Instagram)</td>
                <td>Pubblicità personalizzata/remarketing</td>
                <td>Marketing</td>
                <td>3 mesi</td>
                <td>Terza</td>
              </tr>
              <tr>
                <td>fr</td>
                <td>Meta (facebook.com)</td>
                <td>Deliver, measure, retarget</td>
                <td>Marketing</td>
                <td>3 mesi</td>
                <td>Terza</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="legal-note">
          Nota: GA4 tende a utilizzare soprattutto _ga e ga&lt;container-id&gt;; altri cookie
          possono variare. Meta può usare ulteriori identificatori lato dominio facebook.com.
          Confermiamo che l'effettivo set/durata dei cookie è consultabile e gestibile dal Centro
          Preferenze Cookie.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Gestione del consenso e modifica delle preferenze</h2>
        <p>Al primo accesso, un banner Le permette di:</p>
        <ul>
          <li>accettare tutte le categorie non necessarie;</li>
          <li>rifiutare tutte;</li>
          <li>personalizzare le scelte per categoria/fornitore.</li>
        </ul>
        <p>
          Le Sue preferenze sono sempre modificabili in seguito — vedi capitolo 9 "Come gestire i
          cookie dal browser".
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Servizi di terze parti utilizzati sul Sito</h2>

        <h3>8.1 Google Analytics 4 (GA4) — Google Ireland Limited</h3>
        <p>
          Utilizziamo GA4, previa accettazione dei cookie analitici, per raccogliere dati in forma
          aggregata (statistiche di navigazione, interazioni con le pagine). Tutele configurate:
        </p>
        <ul>
          <li>IP masking/anonymization;</li>
          <li>Consent Mode v2;</li>
          <li>opzioni EU Data Boundary ove disponibili;</li>
          <li>disattivazione delle funzioni di User-ID/demografia se non necessario.</li>
        </ul>
        <p>
          <b>Opt-out:</b> può negare/ritirare il consenso dal nostro Centro Preferenze; in
          alternativa, può usare l'add-on di opt-out del browser fornito da Google.
        </p>

        <h3>8.2 Meta Pixel — Meta Platforms Ireland Limited</h3>
        <p>
          Utilizzato solo previo consenso per misurare conversioni e attivare campagne/remarketing
          su Facebook e Instagram. Raccoglie eventi (es. pageview, lead) che possono contribuire
          alla creazione di "pubblici".
          <br />
          <b>Gestione:</b> può negare/ritirare il consenso dal Centro Preferenze; sui social Meta
          può inoltre gestire le preferenze annunci nel proprio account.
        </p>

        <p className="legal-note">
          Trasferimenti: per i servizi di Google/Meta la titolarità in UE è irlandese; possono
          avvenire trasferimenti internazionali secondo garanzie del GDPR (es. EU–US Data Privacy
          Framework, Clausole Contrattuali Standard). Applichiamo settaggi orientati alla
          localizzazione in UE quando disponibili.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Come gestire i cookie dal browser</h2>
        <p>
          Può impostare o cancellare i cookie anche tramite le preferenze del Suo browser. Le
          ricordiamo che la disabilitazione dei cookie tecnici può compromettere il funzionamento
          del Sito.
        </p>
        <ul>
          <li>
            <b>Chrome:</b> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti →
            selezioni l'opzione preferita; per cancellare: Privacy e sicurezza → Cancella dati di
            navigazione.
          </li>
          <li>
            <b>Firefox:</b> Opzioni/Preferenze → Privacy e sicurezza → Cookie e dati dei siti;
            gestisca blocchi e cancellazioni.
          </li>
          <li>
            <b>Safari (macOS/iOS):</b> Preferenze/Impostazioni → Privacy → Gestisci dati siti
            web; per blocco cookie segua le opzioni disponibili.
          </li>
          <li>
            <b>Edge:</b> Impostazioni → Cookie e autorizzazioni sito → Gestione e cancellazione
            cookie e dati dei siti.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>10. Conservazione</h2>
        <ul>
          <li>
            I cookie tecnici hanno durate limitate al tempo necessario al funzionamento del Sito
            (sessione o pochi mesi).
          </li>
          <li>
            I cookie analitici/marketing rispettano le durate indicate dal fornitore (es. 24 ore,
            1 minuto, 3 mesi, 2 anni).
          </li>
          <li>
            Le scelte di consenso vengono conservate per documentazione e prova del consenso
            secondo la normativa (di norma 6–12 mesi).
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>11. Trasferimenti di dati</h2>
        <p>
          Non effettuiamo direttamente trasferimenti extra-UE tramite cookie proprietari. Per i
          cookie di terza parte, alcuni fornitori (es. Google, Meta) potrebbero effettuare
          trattamenti/repliche su server situati fuori dallo SEE. In tali casi, il trasferimento
          avviene nel rispetto del Capo V GDPR (es. EU–US Data Privacy Framework, SCC, misure
          supplementari).
        </p>
      </section>

      <section className="legal-section">
        <h2>12. Aggiornamenti di questa Cookie Policy</h2>
        <p>
          Potremmo aggiornare la presente Cookie Policy per riflettere cambiamenti normativi,
          tecnologici o dei servizi offerti (es. aggiunta/rimozione di fornitori). Pubblicheremo
          la versione aggiornata su questa pagina indicando la data di ultimo aggiornamento. La
          invitiamo a consultarla periodicamente. In caso di modifiche sostanziali, potremmo
          mostrare un nuovo banner di consenso.
        </p>
      </section>

      <section className="legal-section">
        <h2>13. Contatti</h2>
        <p>
          Per domande sulla presente Cookie Policy o per esercitare i diritti privacy (accesso,
          opposizione, revoca del consenso, ecc.), può contattarci:
        </p>
        <ul>
          <li><b>Email:</b> visionary.iasolution@gmail.com</li>
          <li><b>Telefono:</b> 3489015733 / 3793104418</li>
        </ul>
      </section>
    </LegalLayout>
  )
}
