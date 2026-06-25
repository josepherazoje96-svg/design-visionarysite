# Visionary — Copy & Contesto Strategico per Claude Design

---

## PARTE A — CONTESTO STRATEGICO

### Azienda
**Visionary** è un'agenzia di intelligenza artificiale che installa automazioni nelle aziende. Non vendiamo software: costruiamo sistemi che fanno al posto del tuo team tutto ciò che è ripetitivo, prevedibile e manuale.

### ICP (Profilo cliente ideale)
Aziende con:
- Processi interni ripetitivi (gestione email, qualificazione lead, inserimento clienti, reportistica)
- Assistenza clienti gestita a mano da persone
- Team da 5 a 100 persone che vogliono crescere senza assumere proporzionalmente

Settori tipici: servizi professionali, e-commerce B2B, agenzie, SaaS, immobiliare, consulenza.

### Problema principale
Perdono denaro e ore ogni settimana su attività che un sistema potrebbe fare in automatico. Il team risponde a mano alle richieste dei clienti. Nel frattempo i lead si raffreddano, i ticket si accumulano, le persone migliori fanno lavoro da junior.

### Problemi secondari
- Non riescono a crescere senza assumere più personale (costo fisso che sale prima del fatturato)
- I lead entrano, non ricevono risposta rapida, e comprano dalla concorrenza
- C'è la sensazione costante di essere sempre in ritardo: sulle richieste, sui processi, sulle priorità
- Le persone migliori del team sprecano ore su lavoro meccanico invece di fare ciò che vale

### Promessa principale
Recuperare ore di lavoro ogni settimana e smettere di perdere lead perché nessuno ha risposto in tempo.

### Tono di voce
- Diretto, sicuro, vicino
- Seconda persona singolare ("tu", "il tuo team", "la tua azienda")
- Frasi brevi. Nessuna frase inutilmente lunga
- Zero anglicismi evitabili (no "boost", no "workflow", no "leverage")
- Zero iperboli (no "incredibile", no "rivoluzionario", no "trasforma il tuo business")
- Linguaggio di chi ha già installato questi sistemi decine di volte e sa di cosa parla

### Direzione visiva (brief per il design)
- Stile: Swiss / Brutalist
- Tipografia XXL dominante — i titoli occupano lo spazio
- Palette ridotta: bianco + nero + un colore accent (da definire: opzioni suggerite — giallo #F5C400, rosso #E63329, o verde acido #A8FF3E)
- Moltissimo spazio vuoto tra le sezioni
- Nessuna immagine generata da IA, nessuna stock photo, nessun mockup
- Il copy deve funzionare con caratteri enormi: titoli brevi e incisivi, mai a capo forzato
- Griglia rigida, allineamenti precisi, nessun elemento decorativo

---

## PARTE B — COPY DELLA LANDING PAGE

---

### 1. HERO

**Headline**
> 10 ore liberate ogni settimana. Senza assumere nessuno.

**Subheadline**
Installiamo sistemi che gestiscono il lavoro ripetitivo al posto tuo.
I tuoi lead ricevono risposta in minuti, non in ore.

**CTA principale**
Prenota una chiamata gratuita

**Microcopy sotto la CTA**
Nessun impegno. 30 minuti. Ti diciamo cosa si può automatizzare nel tuo caso.

**Nota visuale**
Headline in tipografia XXL, occupa il 60–70% del viewport in due righe. Subheadline in corpo piccolo, max 2 righe sotto. CTA come pulsante pieno, testo in nero su accent color. Microcopy in grigio chiaro, corpo ridotto.

---

### 2. PROBLEMA

**Headline**
Ogni settimana perdi ore e lead. Entrambi hanno un costo.

**Body**
Il tuo team risponde alle stesse domande, copia gli stessi dati, manda le stesse email.
Nel frattempo, un lead che ti ha scritto tre ore fa ha già scelto qualcun altro.
Potresti assumere altra gente. Ma il problema non è quante persone hai — è cosa stanno facendo.
Non serve più personale. Serve che il lavoro meccanico smetta di passare per le loro mani.

**Micro-CTA**
Vedi cosa si può automatizzare nella tua azienda →

**Nota visuale**
Headline in tipografia grande, allineata a sinistra. Testo in corpo medio sotto, senza lista. Micro-CTA testuale con freccia, distanziata dal corpo. Spazio bianco generoso sopra e sotto.

---

### Calcolatrice gratuita "Quanto denaro perdi ogni mese?" — Strategia e implementazione

> Stato: **implementata** come sezione interattiva nella home, tra "Il problema" e "Automazioni" (`id="calcolatrice"`, componente [`ROICalculator.jsx`](../src/components/ROICalculator.jsx)).

#### Logica di calcolo

**Input raccolti dall'utente (5 campi, compilabili in meno di 60 secondi):**

| Campo | Cosa chiede | Default |
|---|---|---|
| `leadAlMese` | Quanti contatti/lead riceve in media al mese | 80 |
| `percPersi` | Che percentuale stima di perdere per risposte lente o mancate (slider 0–80%) | 20% |
| `valoreCliente` | Valore medio di un cliente per la sua azienda (€) | 800 € |
| `oreManuali` | Ore a settimana che il team perde su lavoro manuale e ripetitivo | 12 h |
| `costoOrario` | Costo orario del team — stipendio + costi (€/h) | 25 €/h |

**Dati aziendali / assunzioni usate per stimare la perdita mensile:**

* **Tasso di chiusura medio sui lead recuperati: 20%** — non tutti i lead "salvati" da una risposta tempestiva diventano clienti; il 20% è il parametro prudenziale che usiamo nelle prime analisi con i clienti reali.
* **Settimane lavorative al mese: 4,33** (52 settimane / 12 mesi) — per convertire un costo settimanale in un costo mensile.

**Formula di stima:**

```
lead persi al mese     = lead al mese × (% persi / 100)
fatturato perso        = lead persi al mese × valore medio cliente × 20%
costo lavoro manuale   = ore manuali a settimana × 4,33 × costo orario
PERDITA MENSILE TOTALE = fatturato perso + costo lavoro manuale
proiezione annuale     = perdita mensile totale × 12
```

Il risultato si aggiorna in tempo reale a ogni modifica e mostra sia il totale sia la scomposizione nelle due voci (lead persi vs. lavoro manuale): questo collega direttamente la cifra alle due famiglie di automazione che vendiamo (assistente clienti / qualificazione lead, e automazione dei processi interni), rendendo naturale il passaggio alla sezione "Automazioni" subito sotto.

#### Copy della landing page (sezione implementata)

**Eyebrow:** Strumento gratuito

**Headline principale**
Quanto **denaro perdi** ogni mese?

**Sottotitolo**
Lead che aspettano una risposta. Ore che il team passa a fare a mano cose che potrebbero girare da sole. Inserisci pochi numeri sulla tua azienda e guarda, in tempo reale, quanto ti costa ogni mese non avere ancora un sistema automatico.

**Benefici (impliciti nel risultato, rinforzati nel disclaimer):**
* Risposta immediata — nessuna registrazione richiesta per vedere la cifra
* Calcolo basato sui numeri reali della propria azienda, non su medie generiche di settore
* Mostra *dove* si perde (lead non gestiti vs. ore di lavoro manuale), non solo *quanto*

**Come funziona**
1. Inserisci 5 numeri sulla tua azienda — meno di un minuto.
2. Vedi subito, in tempo reale, la stima della tua perdita mensile e annuale, divisa per causa.
3. Lascia la tua email per ricevere il report completo con il dettaglio del calcolo e le azioni concrete per recuperare quella cifra.

**Call to Action**
* Primaria (dopo il risultato): "Inviami il report" → cattura l'email
* Secondaria (dopo l'invio / per chi vuole saltare il report): "Oppure prenota subito una call →" verso `#contatto`

**Nota di trasparenza (sotto lo strumento, in piccolo)**
Spiega apertamente le due assunzioni (tasso di chiusura 20%, 4,33 settimane/mese) e chiarisce che è "un punto di partenza per ragionare sui numeri, non un audit completo — quelli reali li costruiamo insieme nella prima chiamata". Questo previene l'obiezione "i numeri sono inventati" e crea un gancio naturale verso la call.

**FAQ correlate allo strumento** (da aggiungere alla FAQ generale o come micro-FAQ dedicata se diventa pagina standalone)
* *"Questi numeri sono affidabili?"* → Sono una stima trasparente basata su parametri prudenziali dichiarati apertamente (20% di chiusura, 4,33 settimane/mese): un punto di partenza per ragionare, non un audit. I numeri reali della tua azienda li costruiamo insieme nella prima chiamata.
* *"Cosa ricevo dopo aver lasciato la mia email?"* → Un report con il dettaglio del calcolo e 2-3 azioni concrete, basate sui numeri che hai inserito, per iniziare a recuperare quella cifra.
* *"I miei dati sono al sicuro?"* → I numeri restano nel tuo browser finché non scegli di lasciare l'email; non condividiamo i tuoi dati con terzi e li usiamo solo per inviarti il report.

#### Acquisizione email

* **Incentivo:** non un ebook generico, ma il *prolungamento naturale* del numero appena visto — "il dettaglio di come è stata calcolata la tua cifra + cosa fare per recuperarla". L'utente ha già investito 60 secondi e visto un numero che lo riguarda: l'email sblocca l'approfondimento personalizzato, non un contenuto slegato.
* **Risorsa gratuita:** *Report "Dove stai perdendo soldi ogni mese"* — riepilogo dei dati inseriti, scomposizione della perdita (lead vs. lavoro manuale), proiezione annuale, e 2-3 azioni prioritarie suggerite in base a quale delle due voci pesa di più nel suo caso (es. se la perdita è soprattutto da lead → punta sull'assistente clienti; se è da ore manuali → punta sull'automazione dei processi).
* **Strategia di acquisizione e conversione:**
  1. *Zero attrito sul valore*: il numero si vede subito, senza email — l'email è il prezzo per l'approfondimento, non per il risultato base. Questo massimizza il completamento del calcolo (l'azione che genera awareness) e qualifica meglio chi lascia il contatto (interessato all'approfondimento, non solo curioso).
  2. *Implementazione attuale*: form email integrato nel pannello del risultato (componente `ROICalculator.jsx`), con conferma immediata e CTA di fallback verso "prenota una call" per chi è già pronto a saltare il report.
  3. *Passo successivo per la produzione*: collegare l'invio a un servizio reale — instradare il lead (email + i 5 valori inseriti) verso GoHighLevel via webhook/API in modo da: creare/aggiornare il contatto, taggarlo (`calcolatrice-roi`, e in base alla voce dominante: `lead-persi` o `lavoro-manuale`), e attivare una sequenza email automatica che invia il report e propone la call. Questo permette anche di segmentare e fare retargeting in base al *tipo* di perdita identificata.
  4. *Nurture*: 2-3 follow-up automatici nei giorni successivi (es. "Hai visto il tuo report? Ecco cosa fanno aziende con numeri simili", caso studio pertinente, invito a prenotare la call) per chi non converte subito.

#### Piano SEO — keyword target "calcolatrice ROI"

* **Intento di ricerca:** prevalentemente *transazionale/strumentale* — chi cerca "calcolatrice ROI" vuole uno strumento utilizzabile subito, non un articolo che ne parla. Le SERP per query di questo tipo premiano pagine con il tool sopra la piega e una spiegazione del metodo sotto, non contenuti puramente editoriali.
* **Struttura della pagina:** nel sito attuale (single page, senza routing) lo strumento vive come sezione della home; per posizionarsi sulla keyword conviene in un secondo momento creare una **pagina standalone dedicata** (es. `/calcolatrice-roi`) con:
  * H1 che contiene la keyword esatta ("Calcolatrice ROI: quanto denaro perdi ogni mese?")
  * Tool subito sopra la piega (stesso componente, riusabile)
  * Sezione "Come funziona il calcolo" che spiega la formula e le assunzioni in modo trasparente (rafforza E-E-A-T e riduce il bounce)
  * FAQ in fondo con markup `FAQPage` (rich snippet)
  * Link interni da/verso la sezione "Automazioni" e gli articoli di supporto
* **Keyword principali:** calcolatrice ROI, calcolatrice ROI marketing, calcolatrice ROI automazione
* **Keyword secondarie / a coda lunga:** "quanto perdo se non rispondo subito ai lead", "costo del lavoro manuale in azienda", "calcolatrice risparmio automazione", "ROI automazione aziendale", "quanto vale automatizzare la mia azienda"
* **Contenuti di supporto (cluster attorno al tool):**
  * "Come si calcola il ROI di un'automazione (con esempio pratico)"
  * "Quanto costa davvero rispondere in ritardo a un lead"
  * "Lavoro manuale in azienda: come misurarne il costo reale"
  * Ognuno linka alla calcolatrice come "prova tu stesso con i tuoi numeri"
* **Opportunità di backlink:**
  * Guest post su blog/magazine di marketing e business italiani, con link allo strumento come risorsa gratuita
  * Inserimento in roundup e directory di "strumenti gratuiti per PMI / consulenti / agenzie"
  * Partnership con consulenti, commercialisti e software complementari (CRM, fatturazione) disposti a linkare lo strumento ai propri clienti in cambio di co-marketing
  * Citazioni in community e forum di settore dove si discute di produttività e automazione

#### Distribuzione

* **Social media:** post e caroselli su LinkedIn/Instagram che mostrano lo strumento in azione ("Inserisci 5 numeri, scopri quanto perdi"), screenshot del risultato (sfumando i dati sensibili), serie "numeri reali" basati su medie aggregate emerse dall'uso pubblico
* **Community online:** condivisione mirata in gruppi Facebook/LinkedIn/Slack/forum di imprenditori, PMI e operatori del settore in cui rientra il cliente tipo, con framing da "strumento utile" più che da "pubblicità"
* **Newsletter:** invio agli iscritti esistenti come contenuto di valore autonomo; aggiunta di un link allo strumento nelle firme email del team e nelle sequenze di follow-up commerciali già attive
* **Partnership:** co-promozione con consulenti, agenzie complementari e software CRM/gestionali — lo strumento come "regalo" che possono offrire ai propri contatti, con attribuzione e cross-link
* **Contenuti organici:** video/reel brevi che mostrano l'uso dal vivo dello strumento e il momento in cui appare il numero ("effetto wow"); case study reali del tipo "Un cliente perdeva X €/mese — ecco le due automazioni che abbiamo costruito per recuperarli"

---

### 3. SERVIZI

**Headline sezione**
3 sistemi che eliminano il lavoro ripetitivo e recuperano i lead persi.

---

**Blocco 1**

**Nome**
Assistente per i clienti

**Una frase**
Ogni richiesta viene gestita, qualificata e instradata in automatico — anche mentre il tuo team dorme.

**Cosa include**
- Risposta alle domande frequenti via email, chat e WhatsApp
- Qualificazione dei lead prima che arrivino al tuo commerciale
- Passaggio all'operatore umano quando serve

**Micro-CTA**
Vedi come risponde in meno di 2 minuti →

---

**Blocco 2**

**Nome**
Automazione dei processi interni

**Una frase**
Il tuo team smette di aggiornare il CRM, copiare dati e mandare notifiche a mano. Lo fa il sistema.

**Cosa include**
- Analisi dei processi che consumano più ore a settimana
- Collegamento con gli strumenti che già usi (CRM, email, fogli di calcolo)
- Aggiornamenti automatici senza intervento manuale

**Micro-CTA**
Calcola le ore che stai perdendo ogni settimana →

---

**Blocco 3**

**Nome**
Ricontatto automatico

**Una frase**
Ogni lead che entra riceve risposta immediata e un percorso definito — senza che tu debba ricordartelo.

**Cosa include**
- Sequenze di ricontatto per tipo di lead
- Attivatori basati sul comportamento (ha aperto, ha risposto, ha ignorato)
- Report settimanale su tassi di risposta e conversione

**Micro-CTA**
Guarda un esempio di sequenza →

**Nota visuale**
Tre colonne su desktop, una colonna su mobile. Ogni blocco: nome in bold grande, frase descrittiva, bullet list leggera, micro-CTA testuale con freccia. Separazione netta — bordi sottili o spazio bianco abbondante.

---

### 4. CASI STUDIO

**Intestazione sezione**
3 casi. Risultati misurabili. Niente stime.

---

**Caso 1**

**Azienda:** [Nome azienda, settore]
**Problema:** Il team commerciale perdeva [PLACEHOLDER: X ore/settimana] a rispondere a mano alle richieste di preventivo.
**Soluzione:** Abbiamo installato un assistente che qualifica ogni lead in entrata e prepara la risposta iniziale.
**Risultato:** Tempo di risposta da [PLACEHOLDER: X ore] a [PLACEHOLDER: X minuti]. Tasso di conversione aumentato del [PLACEHOLDER: X%] in [PLACEHOLDER: X settimane].

---

**Caso 2**

**Azienda:** [Nome azienda, settore]
**Problema:** L'inserimento dei nuovi clienti richiedeva [PLACEHOLDER: X ore] di lavoro manuale per ogni contratto firmato.
**Soluzione:** Processo di inserimento clienti completamente automatizzato — dalla firma del contratto all'accesso agli strumenti.
**Risultato:** [PLACEHOLDER: X ore] risparmiate per cliente. Il team ha smesso di fare inserimento manuale dopo [PLACEHOLDER: X giorni] dall'avvio.

---

**Caso 3**

**Azienda:** [Nome azienda, settore]
**Problema:** Il CRM veniva aggiornato in ritardo o male — i dati erano inaffidabili.
**Soluzione:** Ogni interazione aggiorna il CRM in automatico. Nessuno ci mette più mano.
**Risultato:** [PLACEHOLDER: X%] di riduzione degli errori. Il team commerciale ora lavora su dati aggiornati in tempo reale.

**Micro-CTA**
Leggi il caso completo →

**Nota visuale**
Ogni caso in un riquadro — bordo sottile, sfondo leggermente diverso. Metrica principale in tipografia XXL come elemento visivo dominante nel blocco.

---

### 5. PROCESSO

**Intestazione sezione**
Dal primo incontro al sistema operativo: 4 passaggi.

**Passaggi**

**1. Analisi**
In 30 minuti capiamo quali processi consumano più ore e dove stai perdendo lead.

**2. Progettazione**
Stabiliamo cosa automatizzare, in quale ordine, con gli strumenti che hai già in azienda.

**3. Costruzione**
Costruiamo e testiamo il sistema. Nessun codice da parte tua. Nessuna configurazione.

**4. Avvio**
Il sistema va online. Monitoriamo i primi giorni e aggiustiamo ciò che non funziona.

**Micro-CTA**
Prenota la prima analisi gratuita →

**Nota visuale**
Numerazione XXL (1, 2, 3, 4) come elemento grafico dominante. Testo piccolo a fianco o sotto ogni numero. Orizzontale su desktop, verticale su mobile. Nessuna icona.

---

### 6. PRICING

**Intestazione sezione**
3 piani. Prezzi fissi. Nessuna sorpresa.

---

**Piano 1**

**Nome:** Starter
**Prezzo:** Da [PLACEHOLDER] €/mese
**Per chi è:** Chi ha un processo che fa perdere almeno 5 ore a settimana al team.
**Caratteristiche:**
- 1 automazione installata
- Collegamento con fino a 2 strumenti già in uso
- Supporto via email per 60 giorni
- Report mensile

**CTA:** Inizia con 1 automazione →

---

**Piano 2**

**Nome:** Growth
**Prezzo:** Da [PLACEHOLDER] €/mese
**Per chi è:** Chi vuole automatizzare più aree e crescere senza aumentare il team.
**Caratteristiche:**
- Fino a 3 automazioni installate
- Collegamento con tutti gli strumenti in uso
- Assistente per i clienti incluso
- Supporto prioritario per 90 giorni
- Report settimanale con dati sulle prestazioni

**CTA:** Parlaci del tuo caso →

---

**Piano 3**

**Nome:** Full
**Prezzo:** Preventivo su misura
**Per chi è:** Aziende con processi complessi o che vogliono un partner continuativo.
**Caratteristiche:**
- Automazioni senza limite
- Analisi dei processi interni
- Tempi di risposta garantiti sul supporto
- Aggiornamenti continui
- Referente dedicato

**CTA:** Parliamone →

**Micro-CTA sezione**
Non sei sicuro del piano giusto? Lo definiamo insieme nella chiamata →

**Nota visuale**
Tre colonne. Piano centrale (Growth) in evidenza — sfondo accent color o bordo più spesso. Prezzo in tipografia grande. Feature list minimale, solo testo.

---

### 7. FAQ

**Intestazione sezione**
6 domande. Risposte dirette.

---

**D: Costa troppo per la mia azienda.**
R: Dipende da quante ore a settimana il tuo team spende su lavoro ripetitivo. La maggior parte dei clienti recupera il costo entro il primo mese. Prima di decidere, calcoliamo insieme quanto ti stanno costando queste ore.

---

**D: Quanto tempo ci vuole prima di vedere i risultati?**
R: Le prime automazioni vanno online entro 2–4 settimane. Entro il primo mese i lead ricevono risposta immediata e il lavoro manuale si riduce in modo visibile.

---

**D: La mia azienda è diversa — non so se funziona per me.**
R: Ogni azienda ha processi diversi. La prima chiamata è un'analisi del tuo caso, non una demo. Se non vediamo margine per aiutarti, te lo diciamo.

---

**D: Chi mi supporta dopo l'installazione?**
R: Ogni progetto include un periodo di supporto. Monitoriamo il sistema, correggiamo i problemi e aggiustiamo sulla base dei dati. Non spariremo dopo la consegna.

---

**D: Che risultati posso aspettarmi in concreto?**
R: I clienti risparmiano tra 10 e 30 ore di lavoro manuale a settimana. Il tempo di risposta ai lead scende da ore a minuti. I numeri variano — te li stimiamo prima di iniziare.

---

**D: Si collega agli strumenti che già uso?**
R: Sì. Lavoriamo con CRM, piattaforme email, fogli di calcolo e strumenti di messaggistica. Se hai dubbi su uno strumento specifico, portalo nella chiamata.

**Micro-CTA**
Hai un'altra domanda? Scrivici direttamente →

**Nota visuale**
Accordion o lista verticale. Domanda in bold, risposta sotto. Separatori orizzontali sottili. Nessun elemento decorativo.

---

### 8. CTA FINALE

**Headline**
30 minuti. Sai esattamente quante ore stai perdendo ogni settimana.

**Sottotitolo**
Nessun impegno. Nessuna demo. Solo un'analisi reale del tuo caso.

**Pulsante**
Prenota la chiamata gratuita

**Nota visuale**
Sezione a piena larghezza. Sfondo accent color o nero. Testo bianco. Headline in tipografia XXL — domina lo schermo. Pulsante grande, centrato, ben separato dal testo.

---

*Fine documento — pronto per Claude Design.*

---

## NOTE DI CONVERSIONE

---

### 1. Gerarchia e ordine

**Flusso attuale:**
Hero → Problema → Servizi → Casi Studio → Processo → Pricing → FAQ → CTA Finale

Questo percorso segue correttamente la logica **problema → soluzione → prova → come funziona → prezzo → obiezioni → azione.**

**Suggerimenti di spostamento:**

**Spostare "Processo" prima di "Casi Studio" — consigliato.**
Il visitatore che non conosce Visionary non sa ancora *come* lavori. Se vede i casi studio prima di capire il processo, tende a trattarli come affermazioni non verificabili. Spiegare prima i 4 passaggi costruisce un frame di credibilità che rende i risultati più believable. Nuovo ordine proposto: Hero → Problema → Servizi → Processo → Casi Studio → Pricing → FAQ → CTA.

**Aggiungere un elemento di prova sociale minimo subito dopo l'Hero — opzionale ma ad alto impatto.**
Un logo strip, un singolo numero credibile ("X richieste gestite automaticamente") o una riga di testimonianza riduce lo scetticismo prima ancora di entrare nel problema. Non serve una sezione intera: bastano 2–3 elementi visivi in una striscia sottile.

**La posizione delle FAQ è corretta.**
Collocarle subito prima della CTA finale intercetta le ultime obiezioni nel momento di massima prossimità alla decisione. Non va spostata.

**Il Pricing è correttamente posizionato dopo la prova.**
Il visitatore che arriva ai prezzi ha già visto i risultati: il confronto costo/beneficio avviene con il contesto giusto.

---

### 2. Prova sociale concreta

Tre tipologie credibili per un'agenzia giovane, in ordine di facilità di acquisizione:

**Tipologia 1 — Testimonianze qualificate (alta credibilità, acquisizione media)**
Non bastano frasi generiche. La struttura minima è: *nome + ruolo + azienda + risultato misurabile + contesto temporale.*
Esempio accettabile: *"Nel primo mese abbiamo smesso di rispondere manualmente a 40 richieste a settimana. Ora il sistema le gestisce lui." — Marco R., Responsabile commerciale, [Azienda, settore]*
Da evitare: frasi come "finalmente una soluzione che funziona" senza dati.

**Tipologia 2 — Dati aggregati onesti (media credibilità, alta facilità)**
Metriche reali raccolte dall'attività svolta, presentate in modo diretto e aggiornato periodicamente. Esempi:
- "Questo trimestre: [X] richieste clienti gestite automaticamente"
- "[X] ore di lavoro manuale eliminate nei progetti attivi"
- "Tempo medio di risposta ai lead nei sistemi installati: [X] minuti"
Funzionano perché sono precise, aggiornabili e non richiedono il consenso del cliente.

**Tipologia 3 — Documentazione visiva del lavoro (credibilità alta, acquisizione lenta)**
Screenshot anonimizzati di dashboard, flussi di automazione attivi, o report di performance (con dati del cliente oscurati). Mostrano che il lavoro esiste e che ha una struttura reale. Non sono testimonianze: sono prove dell'artigianato. Adatte nella sezione Casi Studio o nel Processo.

---

### 3. Attriti e obiezioni

**Obiezione 1 — Prezzo**
*"Quanto costa? Non posso permettermelo."*

- **Dove viene affrontata:** FAQ prima domanda; Pricing con piano Starter come punto di ingresso.
- **Come viene neutralizzata:** La FAQ aggancia il costo al valore delle ore perse, non al prezzo in sé. Il Pricing presenta una soglia bassa con il piano Starter.
- **Miglioramento consigliato:** Aggiungere nella FAQ o nel Pricing un esempio di calcolo concreto — anche approssimativo. Es.: *"Se il tuo team spende 10 ore/settimana su lavoro ripetitivo e un'ora costa 25 €, stai spendendo 1.000 €/mese in lavoro che un sistema può fare."* Questo sposta il confronto da *"quanto costa Visionary"* a *"quanto mi costa non farlo".*

**Obiezione 2 — "Funzionerà davvero nella mia azienda?"**
*"Il mio caso è troppo specifico."*

- **Dove viene affrontata:** FAQ terza domanda ("La mia azienda è diversa").
- **Come viene neutralizzata:** La risposta promette un'analisi reale, non una demo generica, e introduce la trasparenza ("se non vediamo margine, te lo diciamo").
- **Miglioramento consigliato:** I Casi Studio attuali usano solo settore placeholder. Appena disponibili, differenziarli per verticale (es. agenzia, studio professionale, e-commerce) riduce il dubbio "il mio settore è diverso" prima ancora che arrivi alla FAQ.

**Obiezione 3 — Tempistiche**
*"Quanto tempo ci vorrà prima che funzioni?"*

- **Dove viene affrontata:** FAQ seconda domanda (2–4 settimane); Processo passo 4.
- **Come viene neutralizzata:** La promessa di un sistema online entro 2–4 settimane è concreta e verificabile.
- **Miglioramento consigliato:** Nel Processo, aggiungere un riferimento temporale stimato per ogni passaggio (es. "Analisi: 1 incontro da 30 minuti", "Costruzione: 1–2 settimane"). Rende la timeline più tangibile e riduce l'ansia da incertezza.

**Obiezione 4 — Dipendenza tecnica**
*"E se non funziona più? Sono nelle vostre mani?"*

- **Dove viene affrontata:** Non viene affrontata esplicitamente nel copy attuale.
- **Come viene neutralizzata:** Non viene neutralizzata — è un vuoto.
- **Miglioramento consigliato:** Aggiungere una settima FAQ dedicata. Testo proposto: *"D: Se smetto di lavorare con voi, il sistema rimane operativo? R: Sì. Costruiamo su piattaforme standard che puoi gestire in autonomia o affidare a chiunque. Non crei dipendenza da noi — crei un sistema che appartiene alla tua azienda."*

**Obiezione 5 — Privacy e gestione dei dati**
*"I dati dei miei clienti dove vanno a finire?"*

- **Dove viene affrontata:** Non viene affrontata nel copy attuale.
- **Come viene neutralizzata:** Non viene neutralizzata — secondo vuoto.
- **Miglioramento consigliato:** Una nota breve nel footer o una FAQ aggiuntiva è sufficiente. Non serve un paragrafo legale — basta una frase chiara: *"Lavoriamo sulle tue piattaforme. I tuoi dati restano nei tuoi strumenti — non li trasferiamo, non li archiviamo su server di terze parti."* Questo è particolarmente importante per settori come legale, medico o immobiliare.

---

### 4. CTA principale — 3 varianti per test A/B

**CTA attuale (approccio consulenziale)**
> Prenota una chiamata gratuita

*Chi converte meglio:* visitatori già convinti del problema ma incerti sulla soluzione. Hanno letto la pagina, capiscono il valore, cercano conferma prima di comprare. Funziona bene per chi viene da referral o conosce già il brand.

---

**Variante A — Approccio diretto/transazionale**
> Calcola le ore che stai perdendo ogni settimana

*Angolazione:* mette al centro il costo del non fare nulla, non il servizio. Il visitatore clicca per scoprire un dato su sé stesso — non per parlare con qualcuno.
*Chi converte meglio:* visitatori freddi che non si fidano ancora e preferiscono un'azione a basso impegno percepito. Adatta se collegata a un tool di calcolo o a un form di qualificazione automatica.
*Nota:* richiede che dietro la CTA ci sia effettivamente qualcosa (un form con 3–4 domande che restituisce una stima) — non può portare direttamente a una pagina di prenotazione.

---

**Variante B — Approccio basato sulla curiosità**
> Scopri cosa si automatizza nella tua azienda

*Angolazione:* formula una promessa di scoperta personalizzata. Non chiede nulla — promette di dare qualcosa.
*Chi converte meglio:* visitatori in fase di valutazione che non sanno ancora se il problema li riguarda davvero. Funziona meglio nella Hero o nella sezione Problema, dove il visitatore è ancora in fase esplorativa.
*Nota:* la pagina di destinazione deve mantenere la promessa — un breve quiz o una lista di scenari ("Se nella tua azienda succede X, possiamo automatizzarlo") altrimenti la curiosità si trasforma in delusione.

---

### 5. Urgenza autentica

**Punto 1 — Numero limitato di nuovi clienti per mese (posizione: sezione Pricing o CTA finale)**
Testo suggerito: *"Prendiamo al massimo [X] nuovi clienti al mese. In questo momento ci sono [X] posti disponibili."*

*Perché è credibile:* un'agenzia che costruisce sistemi personalizzati non può scalare all'infinito — ogni nuovo cliente richiede ore di analisi e costruzione. Il limite non è marketing: è strutturale al modello. Se il numero è reale e aggiornato, il visitatore lo percepisce come tale.
*Dove inserirlo:* nella CTA finale, come elemento di contesto sotto il pulsante. Non nella Hero — arriverebbe troppo presto, prima che il visitatore abbia capito il valore.

**Punto 2 — Numero limitato di analisi gratuite mensili (posizione: sezione Processo o Hero)**
Testo suggerito: *"Offriamo [X] analisi gratuite al mese. Questo mese ne restano [X]."*

*Perché è credibile:* la chiamata di analisi richiede tempo reale del team. Non è un automatismo — è un impegno. Il limite è quindi giustificato e comprensibile anche per chi non conosce il settore.
*Dove inserirlo:* nel Processo (passo 1, dove si descrive l'analisi) o nel microcopy sotto la CTA principale. Funziona meglio di "prenota ora" perché aggiunge contesto senza pressione.

*Cosa evitare in entrambi i casi:* countdown fittizi, "offerta valida solo oggi", numero di posti che non cambia mai. Se l'urgenza è reale, il visitatore attento lo verificherà. Se è falsa, erode la credibilità dell'intero sito.

---

*Fine sezione Note di conversione.*
