// Placering: src/data/semesterCases.js
// Billedstier er relative til public/. SÃ¦t src til et filnavn, nÃ¥r du har billedet.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
const picture = (title, caption, file = null) => ({
  title,
  caption,
  alt: title,
  src: file ? asset(file) : null,
});

export const semesterCases = [
  {
    slug: "mellemrum",
    number: "08",
    year: "2026",
    title: "Mellemrum",
    category: "React Â· Supabase Â· Produktoptimering",
    intro:
      "Fra en eksisterende prototype til et sammenhÃ¦ngende tilmeldingsflow.",
    services: "Frontend, datamodel, tilmeldingsflow",
    tools: "React Â· Supabase REST API Â· GitHub",
    collaboration: "Individuelt projekt Â· 3. semester",
    description:
      "En kultur- og eventplatform, hvor jeg arbejdede med sammenhÃ¦ngen mellem kode, database og brugeroplevelse.",
    isSemesterCase: true,
    // Eksempel: cover: asset("cases/mellemrum/forside.webp"),
    coverAlt: "Eventoversigten i Mellemrum",
    links: [
      {
        label: "Se hjemmesiden",
        url: "https://millehlauridsen-ops.github.io/mellemrum/",
      },
      {
        label: "Se GitHub-koden",
        url: "https://github.com/millehlauridsen-ops/mellemrum",
      },
    ],
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Mellemrum var et individuelt projekt pÃ¥ 3. semester, hvor jeg overtog en eksisterende React-prototype. Platformen skulle gÃ¸re det nemt at finde og tilmelde sig kulturoplevelser i Aarhus, men flere dele af lÃ¸sningen var kun pÃ¥begyndt.",
          "Min opgave var at videreudvikle prototypen og arbejde med sammenhÃ¦ngen mellem kode, database og brugeroplevelse. Jeg havde sÃ¦rligt fokus pÃ¥, hvordan en tilmelding kunne gemmes korrekt og efterfÃ¸lgende vises i arrangÃ¸rens overblik.",
        ],
        media: {
          layout: "single",
          items: [
            picture(
              "Eventoversigten",
              "Et samlet overblik over kommende events med sÃ¸gning og kategorier.",
            ),
          ],
        },
      },
      {
        heading: "Fra tilmelding til overblik",
        paragraphs: [
          "Jeg arbejdede med at forbinde events, lokationer og tilmeldinger gennem relationer i Supabase. En tilmelding blev knyttet til det valgte events id frem for at gemme eventets titel som en separat oplysning. Det gjorde relationen tydeligere og betÃ¸d, at titlen kunne Ã¦ndres uden at skulle opdateres i hver tilmelding.",
          "PÃ¥ den interne side samlede jeg tilmeldingerne i et overblik, hvor de nyeste vises fÃ¸rst. Her kan arrangÃ¸ren filtrere efter event og bekrÃ¦fte eller slette en tilmelding. For mig var det vigtigt, at oplysningerne ikke bare blev gemt i databasen, men ogsÃ¥ kunne bruges i den anden ende af lÃ¸sningen.",
        ],
        media: {
          layout: "comparison",
          items: [
            picture(
              "Tilmelding til et event",
              "Brugerens side af tilmeldingsflowet.",
            ),
            picture(
              "ArrangÃ¸rens overblik",
              "Tilmeldinger vises sammen med det event, de hÃ¸rer til.",
            ),
          ],
        },
      },
      {
        heading: "NÃ¥r data ikke kommer som forventet",
        paragraphs: [
          "Jeg arbejdede ogsÃ¥ med de situationer, hvor siden venter pÃ¥ data, en sÃ¸gning ikke giver resultater, eller et API-kald fejler. Brugeren skal kunne forstÃ¥, hvad der sker, i stedet for at mÃ¸de en tom side.",
          "Kommunikationen med Supabase blev samlet i en service-fil, sÃ¥ databasekald kunne genbruges pÃ¥ tvÃ¦rs af siderne. Derudover arbejdede jeg med fokus pÃ¥ sidens overskrift ved navigation og visning af resterende pladser pÃ¥ det enkelte event.",
        ],
        media: {
          layout: "carousel",
          items: [
            picture("Loading", "Feedback mens events hentes."),
            picture(
              "Ingen resultater",
              "Et relevant nÃ¦ste skridt, nÃ¥r sÃ¸gningen ikke giver resultater.",
            ),
            picture(
              "Fejlbesked",
              "En forstÃ¥elig besked, hvis data ikke kan hentes.",
            ),
          ],
        },
      },
      {
        heading: "Min rolle",
        paragraphs: [
          "Jeg stod selv for videreudviklingen af den udleverede prototype. Mit arbejde omfattede React, relationer i Supabase, tilmeldingsformularen og det interne overblik. Det gav mig mulighed for at arbejde med bÃ¥de det, brugeren mÃ¸der, og den struktur, der fÃ¥r lÃ¸sningen til at hÃ¦nge sammen.",
        ],
      },
      {
        heading: "Kontrol af lÃ¸sningen",
        paragraphs: [
          "[Udfyld fÃ¸r aflevering: Beskriv Ã©n konkret kontrol af din lÃ¸sning. Hvad afprÃ¸vede du, hvad forventede du, og hvad viste resultatet? Brug fx en tilmelding, som blev gemt og vist pÃ¥ den deployede version.]",
        ],
      },
    ],
    reflection: [
      "I dette projekt oplevede jeg igen tilfredsstillelsen i at forbedre en eksisterende lÃ¸sning. En Ã¦ndring i databasen kan virke lille, men den fÃ¥r betydning flere steder i produktet.",
      "Jeg fik en bedre forstÃ¥else for, hvordan frontend og data hÃ¦nger sammen, og hvor vigtigt det er at tÃ¦nke hele flowet igennem. Det er ikke nok, at en formular ser fÃ¦rdig ud â€” oplysningerne skal gemmes korrekt, forbindes med det rigtige event og kunne vises igen.",
    ],
  },
  {
    slug: "vuuh",
    number: "09",
    year: "2026",
    title: "Vuuh",
    category: "UX/UI Â· Onboarding Â· Produktoptimering",
    intro:
      "En mere overskuelig vej fra opsÃ¦tning til oplevelsen af produktets vÃ¦rdi.",
    services: "UX-analyse, interaktionsdesign, prototype",
    tools: "Figma",
    collaboration: "Gruppeprojekt Â· 3. semester",
    description:
      "Et redesign af en eksisterende onboarding med fokus pÃ¥ tydelige handlinger, mindre kompleksitet og forstÃ¥elig feedback.",
    isSemesterCase: true,
    // Eksempel: cover: asset("cases/vuuh/cover.webp"),
    coverAlt: "Den redesignede onboarding i Vuuh",
    // TilfÃ¸j dine egne links: { label: "Se Figma-prototypen", url: "https://..." }
    links: [],
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Vuuh var et gruppeprojekt pÃ¥ 3. semester, hvor vi arbejdede med onboarding i en eksisterende fashion tech-lÃ¸sning. Produktet hjÃ¦lper webshopejere med at hente produktdata fra brands, men opsÃ¦tningen skulle vÃ¦re lettere at forstÃ¥, fÃ¸r brugeren kunne fÃ¥ glÃ¦de af lÃ¸sningen.",
          "Vi ville undersÃ¸ge, hvor processen blev unÃ¸dvendigt kompliceret, og hvordan vi kunne forbedre den inden for rammerne af det eksisterende produkt.",
        ],
      },
      {
        heading: "Hvor bliver brugeren i tvivl?",
        paragraphs: [
          "Vi tog udgangspunkt i den eksisterende onboarding og undersÃ¸gte de steder, hvor brugeren kunne miste overblikket: Hvad skal jeg gÃ¸re nu? Hvad betyder det her? Og hvordan ved jeg, om det er lykkedes?",
          "[Udfyld fÃ¸r aflevering: Beskriv Ã©t konkret fund fra jeres UX-audit, hvor det opstod, og hvorfor det var vigtigt at prioritere.]",
          "Det fund blev et af vores afsÃ¦t for redesignet. Jeg synes, det var interessant at arbejde med en lÃ¸sning, der allerede eksisterede, fordi vi skulle kunne begrunde vores Ã¦ndringer ud fra de problemer, vi fandt.",
        ],
        media: {
          layout: "comparison",
          items: [
            picture(
              "Den oprindelige onboarding",
              "Det trin, hvor problemet opstod.",
            ),
            picture(
              "Et udvalgt Finding Card",
              "Fundet og den evidens, der lÃ¥ bag vores prioritering.",
            ),
          ],
        },
      },
      {
        heading: "Mindre kompleksitet, tydeligere retning",
        paragraphs: [
          "Vi arbejdede med at forsimple indholdet, prioritere informationen og gÃ¸re handlingerne tydeligere. MÃ¥let var, at brugeren lettere kunne forstÃ¥ nÃ¦ste skridt og komme videre pÃ¥ egen hÃ¥nd.",
          "Motion design blev brugt til at understÃ¸tte forstÃ¥elsen af processen. BevÃ¦gelsen skulle have et formÃ¥l og hjÃ¦lpe med at vise, hvad der skete, nÃ¥r brugeren handlede.",
          "[Udfyld fÃ¸r aflevering: Beskriv Ã¦ndringen, der adresserede fundet ovenfor, og hvordan den blev vist i prototypen.]",
        ],
        media: {
          layout: "comparison",
          items: [
            picture("FÃ¸r redesign", "Det oprindelige trin."),
            picture(
              "Efter redesign",
              "Samme trin med jeres konkrete forbedring.",
            ),
          ],
        },
      },
      {
        heading: "Den samlede oplevelse",
        paragraphs: [
          "Den interaktive prototype samlede vores Ã¦ndringer i et flow. Her kunne vi arbejde med sammenhÃ¦ngen mellem brugerens handlinger og den feedback, lÃ¸sningen giver.",
          "[Udfyld fÃ¸r aflevering: Hvis I gennemfÃ¸rte et Accessibility Design Check, beskriv Ã©n barriere, jeres Ã¦ndring og hvordan I vurderede den igen.]",
        ],
        media: {
          layout: "carousel",
          items: [
            picture("FÃ¸rste trin", "IndsÃ¦t fÃ¸rste skÃ¦rm fra det nye flow."),
            picture("NÃ¦ste handling", "Vis hvordan brugeren kommer videre."),
            picture("Feedback", "Vis systemets reaktion pÃ¥ handlingen."),
          ],
        },
      },
      {
        heading: "Min rolle",
        paragraphs: [
          "[Udfyld fÃ¸r aflevering: Hvilke fund, skÃ¦rme, interaktioner eller animationer arbejdede du selv med? Hvad udviklede I sammen?]",
        ],
      },
    ],
    reflection: [
      "Vuuh gav mig mulighed for at arbejde mere detaljeret med interaktioner i et eksisterende produkt. SmÃ¥ Ã¦ndringer i tekst, placering og feedback kan have stor betydning for, hvor overskuelig en proces fÃ¸les.",
      "For mig var det lÃ¦rerigt at holde fast i problemet bag designvalget. En lÃ¸sning kan godt se mere enkel ud, uden at den nÃ¸dvendigvis er lettere at forstÃ¥. Et nÃ¦ste skridt ville vÃ¦re at afprÃ¸ve prototypen med relevante brugere og undersÃ¸ge, om de faktisk kan gennemfÃ¸re onboardingen mere selvstÃ¦ndigt.",
    ],
  },
  {
    slug: "go-rogue",
    number: "10",
    year: "2026",
    title: "Go Rogue",
    category: "Brandidentitet Â· Konceptudvikling Â· Re-commerce",
    intro:
      "Et subbrand med sin egen stemme og et genkendeligt afsÃ¦t i LA RÅŒUGE.",
    services: "MÃ¥lgruppe, brandidentitet, digitalt koncept",
    tools: "Figma",
    collaboration: "Gruppeprojekt Â· 3. semester",
    description:
      "Et re-commerce-koncept, hvor vi undersÃ¸gte balancen mellem moderbrandets identitet og et mere modigt visuelt udtryk.",
    isSemesterCase: true,
    // Eksempel: cover: asset("cases/go-rogue/cover.webp"),
    coverAlt: "Go Rogues visuelle identitet",
    links: [],
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "I dette gruppeprojekt arbejdede vi med at give LA RÅŒUGEs re-commerce-initiativ sin egen identitet og digitale oplevelse. Subbrandet skulle kunne stÃ¥ pÃ¥ egne ben og samtidig bevare forbindelsen til moderbrandets fokus pÃ¥ kvalitet, tidlÃ¸shed og selvkÃ¦rlighed.",
          "Udfordringen handlede ikke kun om at fÃ¥ det brugte tÃ¸j solgt. Der var ogsÃ¥ behov for at fÃ¥ flere kunder til at sende det tÃ¸j ind, de ikke lÃ¦ngere brugte.",
        ],
      },
      {
        heading: "Hvem skulle vi tale til?",
        paragraphs: [
          "Vi undersÃ¸gte moderbrandets mÃ¥lgruppe og mulighederne for at nÃ¥ en yngre gruppe gennem re-commerce. I den fÃ¦lles konceptretning valgte vi primÃ¦rt at arbejde med kvinder i 30â€™erne.",
          "Vores research var baseret pÃ¥ eksisterende viden og data. Vi gennemfÃ¸rte ikke brugerundersÃ¸gelser, sÃ¥ vi var opmÃ¦rksomme pÃ¥, at vores forstÃ¥else af mÃ¥lgruppen stadig indeholdt antagelser. En af dem var, at indsendelsen af tÃ¸jet kunne opleves som besvÃ¦rlig og uoverskuelig.",
          "Det gjorde det relevant at tÃ¦nke bÃ¥de kommunikation og brugerrejse ind i konceptet. En ny identitet skulle skabe opmÃ¦rksomhed, men brugeren skulle ogsÃ¥ forstÃ¥, hvordan hun kunne deltage.",
        ],
      },
      {
        heading: "En ny retning med et genkendeligt afsÃ¦t",
        paragraphs: [
          "Vi udviklede Go Rogue med inspiration fra LA RÅŒUGEs fortÃ¦lling om selvkÃ¦rlighed og retten til at vÃ¦re sig selv. Vi ville give den fortÃ¦lling et mere direkte og modigt udtryk.",
          "Undervejs undersÃ¸gte vi forskellige visuelle retninger. Ã‰n lÃ¥ tÃ¦ttere pÃ¥ moderbrandets eksisterende univers, mens en anden havde mere kontrast og kant. Vi valgte at arbejde videre med den mere markante retning for at give re-commerce-konceptet sin egen plads.",
          "Det var interessant at eksperimentere med, hvor langt vi kunne skubbe udtrykket og stadig bevare forbindelsen til LA RÅŒUGE.",
        ],
        media: {
          layout: "comparison",
          items: [
            picture(
              "UndersÃ¸gt retning",
              "En retning med tÃ¦ttere forbindelse til moderbrandets eksisterende udtryk.",
            ),
            picture(
              "Valgt retning",
              "Den mere markante retning, vi arbejdede videre med.",
            ),
          ],
        },
      },
      {
        heading: "Identiteten i detaljer",
        paragraphs: [
          "Her er de vigtigste dele af den visuelle identitet samlet. De viser, hvordan logo, typografi, farver og billedstil fungerer som Ã©t univers.",
        ],
        media: {
          layout: "carousel",
          items: [
            picture("Logo", "Go Rogues logo."),
            picture(
              "Farver og typografi",
              "Identitetens farver og typografiske hierarki.",
            ),
            picture("Billedstil", "Eksempler pÃ¥ identitetens billedbrug."),
          ],
        },
      },
      {
        heading: "Fra identitet til digital oplevelse",
        paragraphs: [
          "Identiteten blev omsat til en Figma-prototype, hvor brandets udtryk og brugerens handlinger skulle fungere sammen.",
          "[Udfyld fÃ¸r aflevering: Beskriv et konkret eksempel fra jeres kÃ¸bs- eller salgsflow. Hvad Ã¦ndrede I, og hvordan adresserede det brugerens usikkerhed eller besvÃ¦r?]",
        ],
        media: {
          layout: "carousel",
          items: [
            picture(
              "Indgangen til konceptet",
              "Hvordan brugeren mÃ¸der Go Rogue.",
            ),
            picture(
              "SÃ¦lg dit tÃ¸j",
              "Et centralt trin i sÃ¦lgerens brugerrejse.",
            ),
            picture("KÃ¸b brugt", "Et centralt trin i kÃ¸berens brugerrejse."),
          ],
        },
      },
      {
        heading: "Min rolle",
        paragraphs: [
          "[Udfyld fÃ¸r aflevering: Beskriv dit konkrete bidrag til research, navn, logo, visuel retning, tekster eller prototype. Hvilke beslutninger traf I sammen?]",
        ],
      },
    ],
    reflection: [
      "Go Rogue gav mig mulighed for at arbejde med et eksisterende brand og samtidig udfordre dets udtryk. Det krÃ¦vede, at vi bÃ¥de forstod udgangspunktet og turde undersÃ¸ge en anden retning.",
      "Jeg tager isÃ¦r med mig, at en stÃ¦rk identitet og en overskuelig brugerrejse skal understÃ¸tte hinanden. Vores koncept er et bud pÃ¥, hvordan re-commerce kan fÃ¥ mere opmÃ¦rksomhed, men det krÃ¦ver afprÃ¸vning med mÃ¥lgruppen at vurdere, om lÃ¸sningen ogsÃ¥ fÃ¥r flere til at sende deres tÃ¸j ind.",
    ],
  },
];
