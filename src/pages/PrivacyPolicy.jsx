import { Link } from 'react-router-dom'
import { LegalLayout } from '../components/LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout eyebrow="Note legali" title="Privacy Policy" updated="21-06-2026">
      <section className="legal-section">
        <p>
          La presente Privacy Policy descrive le politiche e le procedure di Visionary relative
          alla raccolta, all'uso e alla divulgazione delle informazioni personali quando Lei
          utilizza il nostro sito web e i servizi ad esso correlati (collettivamente, il
          "Servizio"). Inoltre, Le illustra i Suoi diritti in materia di privacy e come la legge
          La protegge. Utilizzando il Servizio, Lei acconsente alla raccolta e all'uso delle
          informazioni come descritto nella presente informativa.
        </p>
      </section>

      <section className="legal-section">
        <h2>1. Raccolta e uso delle informazioni personali</h2>

        <h3>1.1 Tipi di dati raccolti</h3>
        <p>
          Durante l'utilizzo del nostro Servizio, potremmo richiederLe di fornirci alcune
          informazioni di identificazione personale che possono essere utilizzate per contattarLa
          o identificarLa. I tipi di dati personali che raccogliamo includono, ma non si limitano
          a:
        </p>
        <ul>
          <li>
            <b>Dati forniti volontariamente dall'utente:</b> ad esempio nome, cognome, indirizzo
            email, numero di telefono, indirizzo postale, nome dell'azienda o attività
            professionale e qualsiasi altra informazione che Lei sceglie di fornirci (ad esempio
            compilando moduli di contatto o iscrivendosi alla newsletter).
          </li>
          <li>
            <b>Dati di utilizzo:</b> informazioni raccolte automaticamente durante la navigazione
            del Sito, quali indirizzo IP del dispositivo, tipo e versione del browser, pagine
            visitate, data e ora delle visite, tempo trascorso su ciascuna pagina, identificatori
            univoci di dispositivo e altri dati diagnostici. Questi dati di utilizzo vengono
            raccolti principalmente tramite cookie e tecnologie di tracciamento (vedi sezione
            1.3).
          </li>
        </ul>

        <h3>1.2 Finalità del trattamento</h3>
        <p>Utilizziamo i dati personali raccolti per le seguenti finalità:</p>
        <ul>
          <li>
            <b>Fornire e migliorare il Servizio:</b> per erogare il sito e i servizi richiesti,
            mantenere il suo funzionamento sicuro ed efficiente, e apportare miglioramenti sulla
            base dell'analisi dell'utilizzo.
          </li>
          <li>
            <b>Comunicare con Lei:</b> per poterLa contattare in risposta alle Sue richieste
            inviate tramite il modulo di contatto o via email, e fornire assistenza o
            informazioni da Lei richieste.
          </li>
          <li>
            <b>Gestione di iscrizioni ai servizi:</b> per gestire la Sua eventuale iscrizione ai
            servizi offerti, ad esempio la sottoscrizione alla nostra newsletter (quando
            applicabile) o ad altri servizi a cui ha aderito.
          </li>
          <li>
            <b>Invio di comunicazioni marketing e newsletter:</b> per fornirLe aggiornamenti,
            newsletter, offerte speciali e informazioni su prodotti o servizi analoghi a quelli da
            Lei richiesti, previo Suo consenso esplicito a ricevere tali comunicazioni. Potrà
            scegliere in qualsiasi momento di non ricevere più queste comunicazioni seguendo le
            istruzioni di cancellazione fornite in fondo alle email o contattandoci.
          </li>
          <li>
            <b>Marketing e remarketing mirato:</b> con il Suo consenso, potremmo utilizzare
            strumenti di tracciamento per mostrarLe contenuti pubblicitari personalizzati su siti
            e piattaforme di terze parti (ad esempio annunci sui social network tramite il Meta
            Pixel, vedi sezione 1.3).
          </li>
          <li>
            <b>Adempimenti legali o contrattuali:</b> per adempiere a obblighi previsti dalla
            legge (ad es. obblighi contabili e fiscali) o derivanti da accordi contrattuali,
            nonché per tutelare i nostri diritti in caso di contestazioni.
          </li>
        </ul>

        <h3>1.3 Cookie e strumenti di tracciamento</h3>
        <p>
          Il nostro Sito utilizza cookie e tecnologie di tracciamento di terze parti per
          migliorare l'esperienza utente, analizzare il traffico e supportare le attività di
          marketing. In particolare:
        </p>
        <ul>
          <li>
            <b>Cookie tecnici e funzionali:</b> sono cookie necessari al corretto funzionamento
            del Sito e all'erogazione del Servizio (ad esempio per memorizzare le preferenze sulla
            privacy o mantenere la sessione utente). Questi cookie non richiedono il Suo consenso
            poiché sono essenziali.
          </li>
          <li>
            <b>Cookie analitici:</b> con il Suo consenso, utilizziamo Google Analytics (servizio
            di analisi web fornito da Google Ireland Limited) per raccogliere dati statistici
            aggregati sull'utilizzo del Sito. Google Analytics utilizza cookie che raccolgono, ad
            esempio, informazioni sul Suo comportamento di navigazione e sul dispositivo (come
            l'indirizzo IP – reso anonimo – il tipo di browser, le pagine visitate e il tempo di
            permanenza) allo scopo di comprendere come gli utenti utilizzano il nostro Sito e
            migliorarlo di conseguenza. Queste informazioni sono raccolte in forma anonima e
            aggregata, senza identificare personalmente gli utenti. Lei può rifiutare
            l'installazione di questi cookie o revocare in qualsiasi momento il consenso prestato,
            tramite le impostazioni dei cookie disponibili sul nostro Sito.
          </li>
          <li>
            <b>Cookie di marketing (profilazione):</b> con il Suo consenso, utilizziamo strumenti
            di tracciamento come il Meta Pixel (fornito da Meta Platforms Ireland Limited – la
            società che gestisce Facebook e Instagram) per monitorare le interazioni degli utenti
            con il nostro Sito a fini di marketing. Il Meta Pixel ci aiuta a valutare l'efficacia
            delle campagne pubblicitarie e a raggiungere gli utenti con annunci mirati sui social
            network. Questi strumenti raccolgono dati tramite cookie e tecnologie simili; l'uso
            avviene soltanto se Lei acconsente attraverso il banner di consenso cookie. Può in
            ogni momento gestire le Sue preferenze sui cookie di marketing e, se lo desidera,
            disabilitarli.
          </li>
        </ul>
        <p>
          Per maggiori dettagli sull'uso dei cookie da parte nostra e dei nostri partner di terze
          parti, può consultare la nostra{' '}
          <Link to="/cookie-policy" className="legal-inline-link">Cookie Policy</Link> dedicata
          disponibile sul Sito.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Base giuridica del trattamento</h2>
        <p>
          Trattiamo i Suoi dati personali solo se disponiamo di una base giuridica valida, in
          conformità al GDPR e alla normativa applicabile. A seconda delle finalità sopra
          descritte, le basi giuridiche possono essere:
        </p>
        <ul>
          <li>
            <b>Consenso:</b> Lei ha espresso uno o più consensi specifici al trattamento (ad
            esempio per ricevere comunicazioni di marketing o per l'attivazione di cookie non
            tecnici).
          </li>
          <li>
            <b>Esecuzione di un contratto o di misure precontrattuali:</b> il trattamento è
            necessario per fornirLe un Servizio richiesto, per concludere, eseguire o gestire un
            contratto di cui Lei è parte, oppure per adempiere a Sue richieste precontrattuali (ad
            esempio una richiesta di offerta o di contatto commerciale).
          </li>
          <li>
            <b>Obbligo legale:</b> il trattamento è necessario per adempiere un obbligo di legge a
            cui siamo soggetti (ad esempio obblighi contabili, fiscali, o disposizioni
            dell'Autorità giudiziaria).
          </li>
          <li>
            <b>Interesse legittimo:</b> il trattamento è necessario per perseguire un nostro
            legittimo interesse, a condizione che su di esso non prevalgano i Suoi diritti e le
            Sue libertà fondamentali. Ad esempio, la sicurezza informatica del Sito e la
            prevenzione di abusi/frodi costituiscono nostri interessi legittimi. In ogni caso, non
            effettuiamo trattamenti basati su interesse legittimo se prevalgono i Suoi interessi o
            se la legge ci impone di chiedere il Suo consenso.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Conservazione dei dati</h2>
        <p>
          Conserviamo i Suoi dati personali solo per il tempo necessario a conseguire le finalità
          per cui sono stati raccolti o per adempiere ad obblighi di legge. In particolare:
        </p>
        <ul>
          <li>
            I dati raccolti tramite il modulo di contatto (come nome, email, numero di telefono e
            messaggio) vengono conservati per il tempo necessario a gestire e dare riscontro alla
            Sua richiesta, e successivamente per un periodo ulteriore limitato, allo scopo di
            poter rispondere a eventuali follow-up o verificare precedenti comunicazioni.
          </li>
          <li>
            I dati trattati per finalità di marketing (es. l'indirizzo email per l'invio di
            newsletter) sono conservati fino a che Lei decida di revocare il consenso o di
            cancellare la sua iscrizione. Una volta ricevuta la revoca, i dati non saranno più
            utilizzati per tali finalità, anche se potremmo conservarli ulteriormente se
            necessario per dimostrare di aver dato seguito alla Sua richiesta.
          </li>
          <li>
            I dati di navigazione raccolti a fini analitici vengono conservati per il tempo
            necessario a elaborare statistiche aggregate e anonime sull'uso del Sito, dopodiché
            vengono eliminati o resi anonimi (in conformità alle policy di conservazione del
            fornitore di analisi come Google).
          </li>
        </ul>
        <p>
          In generale, tutti i Suoi dati personali saranno conservati per il tempo strettamente
          necessario a perseguire le finalità previste e, successivamente, per il tempo in cui
          siamo soggetti a obblighi legali di conservazione o vi sia un legittimo interesse (ad
          esempio, difesa in caso di eventuali contenziosi). Allo scadere di tali termini, i dati
          saranno cancellati o resi anonimi in modo irreversibile.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Trasferimento dei dati</h2>
        <p>
          I Suoi dati personali sono trattati principalmente all'interno dell'Unione Europea. Non
          trasferiamo intenzionalmente i Suoi dati verso Paesi al di fuori dell'UE o dello Spazio
          Economico Europeo (SEE). In particolare, l'infrastruttura tecnica che utilizziamo per
          l'hosting del Sito è situata nell'UE: il sito visionaryntelligence.com è ospitato su
          server forniti dal servizio di hosting SiteGround, localizzati in data center europei.
          Questo assicura che i dati raccolti attraverso il Sito risiedano su server posti sotto
          la giurisdizione UE.
        </p>
        <p>
          Qualora in futuro si rendesse necessario trasferire alcuni dati personali verso Paesi
          terzi (cioè al di fuori di UE/SEE), ci impegniamo a garantire che il trasferimento
          avvenga in conformità al Capo V del GDPR. Ciò potrà includere, ad esempio, l'adozione di
          Clausole Contrattuali Standard approvate dalla Commissione Europea, l'eventuale
          adesione dei destinatari a programmi di certificazione internazionale (es. EU-US Data
          Privacy Framework) o altre garanzie appropriate. In ogni caso, La informeremo di tale
          trasferimento e, se richiesto, Le chiederemo il consenso.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Divulgazione e condivisione dei dati</h2>
        <p>
          Trattiamo i Suoi dati personali con riservatezza e non li diffondiamo
          indiscriminatamente. Tuttavia, potremmo condividere o divulgare alcuni dati a terzi
          fidati nelle seguenti circostanze:
        </p>
        <ul>
          <li>
            <b>Obbligo di legge:</b> se siamo tenuti a divulgare i Suoi dati per ottemperare a un
            obbligo legale, una richiesta governativa o un procedimento legale (ad esempio, in
            risposta a un ordine dell'Autorità Giudiziaria).
          </li>
          <li>
            <b>Tutela di diritti e sicurezza:</b> quando la divulgazione è necessaria per
            proteggere i nostri diritti, la proprietà o la sicurezza nostra, dei nostri clienti o
            del pubblico. Ciò include la comunicazione di dati ad autorità competenti, consulenti
            legali o forze dell'ordine per investigare, prevenire o agire riguardo attività
            illegali, sospette frodi, problemi di sicurezza o violazioni dei nostri Termini di
            Servizio.
          </li>
          <li>
            <b>Operazioni societarie:</b> nel caso in cui la nostra attività aziendale venga
            coinvolta in operazioni straordinarie come fusioni, acquisizioni, riorganizzazioni,
            vendite di asset o altre transazioni societarie, i dati personali degli utenti
            potrebbero essere trasferiti ai soggetti terzi coinvolti in tali operazioni. In tali
            situazioni, ci assicureremo che la controparte tratti i dati in modo conforme a questa
            Privacy Policy e alla normativa applicabile.
          </li>
          <li>
            <b>Consenso dell'interessato:</b> con il Suo consenso specifico, potremmo condividere
            i Suoi dati personali con terzi non coperti dagli scenari precedenti. Ad esempio, se
            ci richiede espressamente di inoltrare i Suoi dati a un partner commerciale per
            usufruire di uno specifico servizio, lo faremo solo previo Suo consenso informato.
          </li>
        </ul>
        <p>
          In tutti i casi di condivisione sopra menzionati, comunicheremo solo i dati strettamente
          necessari al raggiungimento delle relative finalità e richiederemo ai terzi destinatari
          di trattare i dati in modo sicuro e conforme alla normativa sulla protezione dei dati
          personali.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Sicurezza dei dati</h2>
        <p>
          La sicurezza dei Suoi dati personali è per noi una priorità. Adottiamo misure di
          sicurezza tecniche (come protocolli di crittografia TLS per le trasmissioni, sistemi di
          protezione dei server, backup regolari) e organizzative (come la formazione del
          personale autorizzato al trattamento) adeguate per proteggere i dati da accessi non
          autorizzati, divulgazione indebita, alterazione o distruzione.
        </p>
        <p>
          Tuttavia, La informiamo che nessun sistema informatico è completamente sicuro.
          Nonostante i nostri sforzi per proteggere le informazioni personali, non possiamo
          garantire la sicurezza assoluta dei dati trasmessi attraverso Internet o conservati sui
          nostri sistemi. Invitiamo pertanto gli utenti ad adottare precauzioni appropriate anche
          dalla loro parte (ad esempio, evitare di inviare informazioni sensibili non necessarie
          tramite email). In caso di violazioni dei dati personali (data breach) che comportino un
          rischio per i diritti e le libertà delle persone, seguiranno le dovute comunicazioni
          agli interessati e alle autorità competenti secondo quanto previsto dalla normativa.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Diritti dell'interessato</h2>
        <p>
          In base al Regolamento (UE) 2016/679 (GDPR), Lei, in qualità di interessato, gode di una
          serie di diritti relativi ai Suoi dati personali. In particolare, ha il diritto di:
        </p>
        <ul>
          <li>
            <b>Accesso:</b> ottenere la conferma se sia in corso un trattamento di dati personali
            che La riguardano e, in tal caso, di accedere a tali dati e ricevere informazioni
            circa le finalità, le categorie di dati trattati, i destinatari a cui i dati sono
            stati o saranno comunicati, il periodo di conservazione previsto e l'esistenza degli
            altri diritti qui elencati.
          </li>
          <li>
            <b>Rettifica:</b> chiedere la rettifica dei dati personali inesatti o l'aggiornamento
            di quelli incompleti che La riguardano.
          </li>
          <li>
            <b>Cancellazione:</b> ottenere la cancellazione dei Suoi dati personali (diritto
            all'oblio) se sussiste uno dei motivi previsti dall'art. 17 GDPR – ad esempio, se i
            dati non sono più necessari rispetto alle finalità originarie, se revoca il consenso e
            non vi sono altre basi giuridiche per il trattamento, oppure se ritiene che i dati
            siano trattati illecitamente.
          </li>
          <li>
            <b>Limitazione del trattamento:</b> ottenere la limitazione del trattamento nei casi
            previsti dall'art. 18 GDPR, ad esempio se contesta l'esattezza dei dati (per il periodo
            necessario a verificarne l'esattezza) o se il trattamento è illecito ma si oppone alla
            cancellazione dei dati chiedendone invece la limitazione. In tal caso, i dati saranno
            trattati – salvo che per la conservazione – solo con il Suo consenso o per determinate
            finalità (es. tutela di un diritto in sede giudiziaria).
          </li>
          <li>
            <b>Opposizione:</b> opporsi in qualsiasi momento, per motivi connessi alla Sua
            situazione particolare, al trattamento dei dati personali che La riguardano basato sul
            nostro legittimo interesse. Ha inoltre il diritto di opporsi in qualsiasi momento al
            trattamento dei Suoi dati per finalità di marketing diretto, compresa la profilazione
            nella misura in cui sia correlata a tale marketing (ad esempio opposizione all'invio
            di newsletter o a pubblicità mirata).
          </li>
          <li>
            <b>Portabilità:</b> ricevere in un formato strutturato, di uso comune e leggibile da
            dispositivo automatico i dati personali che ci ha fornito, e trasmettere tali dati a un
            altro titolare del trattamento senza impedimenti da parte nostra, ove tecnicamente
            fattibile. Questo diritto si applica solo ai dati trattati con mezzi automatizzati,
            sulla base del Suo consenso o in esecuzione di un contratto.
          </li>
          <li>
            <b>Revoca del consenso:</b> qualora il trattamento sia basato sul Suo consenso, Lei ha
            il diritto di revocare in qualsiasi momento il consenso precedentemente prestato. La
            revoca del consenso non pregiudica la liceità del trattamento basata sul consenso
            prima della revoca.
          </li>
        </ul>
        <p>
          Per esercitare i Suoi diritti, può contattarci in qualsiasi momento ai recapiti indicati
          nella sezione Contatti di questa informativa. Le risponderemo senza ingiustificato
          ritardo, e comunque entro i termini massimi stabiliti dall'art. 12 GDPR (di norma entro
          1 mese, estendibili a 3 mesi in casi di particolare complessità). L'esercizio dei diritti
          è gratuito per Lei; tuttavia, in caso di richieste manifestamente infondate o eccessive
          (ad esempio ripetitive), potremmo addebitare un contributo spese o rifiutare di
          soddisfare la richiesta, come consentito dal GDPR.
        </p>
        <p>
          Infine, Le ricordiamo che ha sempre il diritto di proporre reclamo all'Autorità Garante
          per la Protezione dei Dati Personali italiana (
          <a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer" className="legal-inline-link">
            www.garanteprivacy.it
          </a>
          ) o di adire le opportune sedi giudiziarie, qualora ritenga che i Suoi diritti siano
          stati violati o che il trattamento dei Suoi dati personali non sia conforme alla
          normativa vigente.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Minori di età</h2>
        <p>
          Il Servizio di Visionary non si rivolge a minori di 16 anni e non raccogliamo
          consapevolmente informazioni riferite a tali minori. Invitiamo i genitori o i tutori a
          vigilare sull'uso di Internet da parte dei minorenni e a contribuire all'applicazione
          della presente Privacy Policy, accertandosi che il minore non fornisca dati personali
          senza la loro autorizzazione.
        </p>
        <p>
          Qualora avessimo motivo di ritenere che stiamo trattando informazioni fornite da un
          individuo di età inferiore ai 16 anni senza adeguato consenso parentale, provvederemo a
          eliminare tali dati dai nostri archivi. Se dovesse venire a conoscenza del fatto che un
          minore di 16 anni ci ha fornito i propri dati personali, La preghiamo di informarci
          tempestivamente contattandoci ai recapiti di seguito indicati, in modo da poter adottare
          le opportune azioni.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Modifiche alla presente Privacy Policy</h2>
        <p>
          La presente Privacy Policy potrebbe essere soggetta ad aggiornamenti o revisioni nel
          tempo, ad esempio in caso di modifiche ai trattamenti effettuati o alle normative di
          riferimento. Pubblicheremo qualsiasi aggiornamento su questa pagina, indicando la data
          di ultimo aggiornamento. Le consigliamo pertanto di ricontrollare periodicamente il
          contenuto dell'informativa.
        </p>
        <p>
          Qualora apportassimo modifiche sostanziali a questa Privacy Policy (ad esempio
          cambiando le finalità del trattamento o le categorie di dati raccolti), Le notificheremo
          tali cambiamenti tramite gli opportuni canali (ad esempio, tramite email o avviso sul
          Sito) e, se richiesto dalla legge, richiederemo nuovamente il Suo consenso.
        </p>
      </section>

      <section className="legal-section">
        <h2>10. Contatti</h2>
        <p>
          Per qualsiasi domanda, richiesta o chiarimento in merito a questa Privacy Policy o, più
          in generale, al trattamento dei Suoi dati personali, può contattare in qualsiasi momento
          il Titolare del trattamento, Rodriguez Joseph Erazo (P. IVA 13114770012), tramite i
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
