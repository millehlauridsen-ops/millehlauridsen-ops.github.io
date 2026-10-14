// Placering: src/data/semesterCases.js
// Billedstier er relative til public/. Sæt src til et filnavn, når du har billedet.
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
    category: "React · Supabase · Produktoptimering",
    intro:
      "Fra en eksisterende prototype til et sammenhængende tilmeldingsflow.",
    services: "Frontend, datamodel, tilmeldingsflow",
    tools: "React · Supabase REST API · GitHub",
    collaboration: "Individuelt projekt · 3. semester",
    description:
      "En kultur- og eventplatform, hvor jeg arbejdede med sammenhængen mellem kode, database og brugeroplevelse.",
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
          "Mellemrum var et individuelt projekt på 3. semester, hvor jeg overtog en eksisterende React-prototype. Platformen skulle gøre det nemt at finde og tilmelde sig kulturoplevelser i Aarhus, men flere dele af løsningen var kun påbegyndt.",
          "Min opgave var at videreudvikle prototypen og arbejde med sammenhængen mellem kode, database og brugeroplevelse. Jeg havde særligt fokus på, hvordan en tilmelding kunne gemmes korrekt og efterfølgende vises i arrangørens overblik.",
        ],
        media: {
          layout: "single",
          items: [
            picture(
              "Eventoversigten",
              "Et samlet overblik over kommende events med søgning og kategorier.",
            ),
          ],
        },
      },
      {
        heading: "Fra tilmelding til overblik",
        paragraphs: [
          "Jeg arbejdede med at forbinde events, lokationer og tilmeldinger gennem relationer i Supabase. En tilmelding blev knyttet til det valgte events id frem for at gemme eventets titel som en separat oplysning. Det gjorde relationen tydeligere og betød, at titlen kunne ændres uden at skulle opdateres i hver tilmelding.",
          "På den interne side samlede jeg tilmeldingerne i et overblik, hvor de nyeste vises først. Her kan arrangøren filtrere efter event og bekræfte eller slette en tilmelding. For mig var det vigtigt, at oplysningerne ikke bare blev gemt i databasen, men også kunne bruges i den anden ende af løsningen.",
        ],
        media: {
          layout: "comparison",
          items: [
            picture(
              "Tilmelding til et event",
              "Brugerens side af tilmeldingsflowet.",
            ),
            picture(
              "Arrangørens overblik",
              "Tilmeldinger vises sammen med det event, de hører til.",
            ),
          ],
        },
      },
      {
        heading: "Når data ikke kommer som forventet",
        paragraphs: [
          "Jeg arbejdede også med de situationer, hvor siden venter på data, en søgning ikke giver resultater, eller et API-kald fejler. Brugeren skal kunne forstå, hvad der sker, i stedet for at møde en tom side.",
          "Kommunikationen med Supabase blev samlet i en service-fil, så databasekald kunne genbruges på tværs af siderne. Derudover arbejdede jeg med fokus på sidens overskrift ved navigation og visning af resterende pladser på det enkelte event.",
        ],
        media: {
          layout: "carousel",
          items: [
            picture("Loading", "Feedback mens events hentes."),
            picture(
              "Ingen resultater",
              "Et relevant næste skridt, når søgningen ikke giver resultater.",
            ),
            picture(
              "Fejlbesked",
              "En forståelig besked, hvis data ikke kan hentes.",
            ),
          ],
        },
      },
      {
        heading: "Min rolle",
        paragraphs: [
          "Jeg stod selv for videreudviklingen af den udleverede prototype. Mit arbejde omfattede React, relationer i Supabase, tilmeldingsformularen og det interne overblik. Det gav mig mulighed for at arbejde med både det, brugeren møder, og den struktur, der får løsningen til at hænge sammen.",
        ],
      },
      {
        heading: "Kontrol af løsningen",
        paragraphs: [
          "[Udfyld før aflevering: Beskriv én konkret kontrol af din løsning. Hvad afprøvede du, hvad forventede du, og hvad viste resultatet? Brug fx en tilmelding, som blev gemt og vist på den deployede version.]",
        ],
      },
    ],
    reflection: [
      "I dette projekt oplevede jeg igen tilfredsstillelsen i at forbedre en eksisterende løsning. En ændring i databasen kan virke lille, men den får betydning flere steder i produktet.",
      "Jeg fik en bedre forståelse for, hvordan frontend og data hænger sammen, og hvor vigtigt det er at tænke hele flowet igennem. Det er ikke nok, at en formular ser færdig ud — oplysningerne skal gemmes korrekt, forbindes med det rigtige event og kunne vises igen.",
    ],
  },
  {
    slug: "vuuh",
    number: "09",
    year: "2026",
    title: "Vuuh",
    category: "UX/UI · Onboarding · Produktoptimering",
    intro:
      "En mere overskuelig vej fra opsætning til oplevelsen af produktets værdi.",
    services: "UX-analyse, interaktionsdesign, prototype",
    tools: "Figma",
    collaboration: "Gruppeprojekt · 3. semester",
    description:
      "Et redesign af en eksisterende onboarding med fokus på tydelige handlinger, mindre kompleksitet og forståelig feedback.",
    isSemesterCase: true,
    // Eksempel: cover: asset("cases/vuuh/cover.webp"),
    coverAlt: "Den redesignede onboarding i Vuuh",
    // Tilføj dine egne links: { label: "Se Figma-prototypen", url: "https://..." }
    links: [],
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Vuuh var et gruppeprojekt på 3. semester, hvor vi arbejdede med onboarding i en eksisterende fashion tech-løsning. Produktet hjælper webshopejere med at hente produktdata fra brands, men opsætningen skulle være lettere at forstå, før brugeren kunne få glæde af løsningen.",
          "Vi ville undersøge, hvor processen blev unødvendigt kompliceret, og hvordan vi kunne forbedre den inden for rammerne af det eksisterende produkt.",
        ],
      },
      {
        heading: "Hvor bliver brugeren i tvivl?",
        paragraphs: [
          "Vi tog udgangspunkt i den eksisterende onboarding og undersøgte de steder, hvor brugeren kunne miste overblikket: Hvad skal jeg gøre nu? Hvad betyder det her? Og hvordan ved jeg, om det er lykkedes?",
          "[Udfyld før aflevering: Beskriv ét konkret fund fra jeres UX-audit, hvor det opstod, og hvorfor det var vigtigt at prioritere.]",
          "Det fund blev et af vores afsæt for redesignet. Jeg synes, det var interessant at arbejde med en løsning, der allerede eksisterede, fordi vi skulle kunne begrunde vores ændringer ud fra de problemer, vi fandt.",
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
              "Fundet og den evidens, der lå bag vores prioritering.",
            ),
          ],
        },
      },
      {
        heading: "Mindre kompleksitet, tydeligere retning",
        paragraphs: [
          "Vi arbejdede med at forsimple indholdet, prioritere informationen og gøre handlingerne tydeligere. Målet var, at brugeren lettere kunne forstå næste skridt og komme videre på egen hånd.",
          "Motion design blev brugt til at understøtte forståelsen af processen. Bevægelsen skulle have et formål og hjælpe med at vise, hvad der skete, når brugeren handlede.",
          "[Udfyld før aflevering: Beskriv ændringen, der adresserede fundet ovenfor, og hvordan den blev vist i prototypen.]",
        ],
        media: {
          layout: "comparison",
          items: [
            picture("Før redesign", "Det oprindelige trin."),
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
          "Den interaktive prototype samlede vores ændringer i et flow. Her kunne vi arbejde med sammenhængen mellem brugerens handlinger og den feedback, løsningen giver.",
          "[Udfyld før aflevering: Hvis I gennemførte et Accessibility Design Check, beskriv én barriere, jeres ændring og hvordan I vurderede den igen.]",
        ],
        media: {
          layout: "carousel",
          items: [
            picture("Første trin", "Indsæt første skærm fra det nye flow."),
            picture("Næste handling", "Vis hvordan brugeren kommer videre."),
            picture("Feedback", "Vis systemets reaktion på handlingen."),
          ],
        },
      },
      {
        heading: "Min rolle",
        paragraphs: [
          "[Udfyld før aflevering: Hvilke fund, skærme, interaktioner eller animationer arbejdede du selv med? Hvad udviklede I sammen?]",
        ],
      },
    ],
    reflection: [
      "Vuuh gav mig mulighed for at arbejde mere detaljeret med interaktioner i et eksisterende produkt. Små ændringer i tekst, placering og feedback kan have stor betydning for, hvor overskuelig en proces føles.",
      "For mig var det lærerigt at holde fast i problemet bag designvalget. En løsning kan godt se mere enkel ud, uden at den nødvendigvis er lettere at forstå. Et næste skridt ville være at afprøve prototypen med relevante brugere og undersøge, om de faktisk kan gennemføre onboardingen mere selvstændigt.",
    ],
  },
  {
    slug: "go-rogue",
    number: "10",
    year: "2026",
    title: "Go Rogue",
    category: "Brandidentitet · Konceptudvikling · Re-commerce",
    intro:
      "Et subbrand med sin egen stemme og et genkendeligt afsæt i LA RŌUGE.",
    services: "Målgruppe, brandidentitet, digitalt koncept",
    tools: "Figma",
    collaboration: "Gruppeprojekt · 3. semester",
    description:
      "LA RŌUGE vil gerne udvide sin re-commerce-indsats med et subbrand, der sælger deres tøj brugt.",
    isSemesterCase: true,
    cover: asset("cases/go-rogue/cover.png"),
    coverAlt: "Forsiden af Go Rogue-prototypen",
    links: [
      {
        label: "Se Figma-prototypen",
        url: "https://www.figma.com/proto/xJ147c7hA2Vpd1IKHds3Sg/La-Rouge---Go-Rogue?node-id=177-2576&viewport=-576%2C96%2C0.44&t=lCVsL0hAYPjcn1C5-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=139%3A1495&page-id=139%3A1494",
      },
    ],
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "I dette gruppeprojekt arbejdede vi med at give LA ROUGEs re-commerce-initiativ sin egen identitet og digitale oplevelse. Subbrandet skulle kunne stå på egne ben og samtidig bevare forbindelsen til moderbrandets fokus på kvalitet, tidløshed og selvkærlighed.",
          "Udfordringen handlede ikke kun om at få det brugte tøj solgt. Der var også behov for at få flere kunder til at sende det tøj ind, de ikke længere brugte.",
          "Vi skulle finde ud af, hvordan vi skulle definere målgruppen og kommunikere til dem uden at gå på kompromis med moderbrandets identitet.",
        ],
      },
      {
        heading: "Hvem skulle vi tale til?",
        paragraphs: [
          "Vi undersøgte moderbrandets målgruppe og mulighederne for at nå en yngre gruppe gennem re-commerce. I den fælles konceptretning valgte vi primært at arbejde med kvinder i 30’erne, der finder styrke og fællesskab i det at være en selvstændig og moderne kvinde.",
          "Vi gennemførte ikke vores egne brugerundersøgelser, så vi var opmærksomme på, at vores ideer om målgruppen indeholdt antagelser. En af dem var, at indsendelsen af tøjet kunne opleves som besværlig og uoverskuelig.",
          "Vi satte derfor fokus på kommunikation og brugerrejse. En ny identitet skulle skabe opmærksomhed og resonere hos brugerne, og processen skulle på samme tid gøres mere simpel.",
          "Vi lænede os ind i brandets historie om en mor-datter forbindelse for at skabe en følelsesmæssig forbindelse til brugerne - og for at give subbrandet plads til at have sit eget udtryk.",
        ],
      },
      {
        heading: "En helt ny retning med et genkendeligt afsæt",
        layout: "text-above",
        paragraphs: [
          "Vi udviklede Go Rogue med inspiration fra LA ROUGEs fortælling om selvkærlighed og retten til at være sig selv og tage plads. Men vi ville give den fortælling et mere direkte og modigt udtryk, der læner sig op ad, hvad det vil sige at være en 'feminist' for den unge, moderne kvinde.",
          "Undervejs undersøgte vi forskellige visuelle retninger. Én lå tættere på moderbrandets eksisterende univers med rolige, dæmpede farver og klassisk stil, mens en anden havde mere kontrast og kant. Vi arbejdede videre med den mere markante retning, da den stil læner sig mere i en ungdommelig og dristig retning - som vi vurderede ville resonere med den yngre målgruppe.",
          "Det var interessant at eksperimentere med, hvor langt vi kunne skubbe udtrykket og stadig bevare forbindelsen til LA RŌUGE.",
          "Vi tog udgangspunkt i skelettet fra LA RŌUGE for at have et originalt og klassisk touch at læne sig op af - og det gav os mere plads til at eksperimentere med det visuelle udtryk i de små detaljer.",
        ],
        media: {
          layout: "comparison",
          items: [
            picture(
              "Undersøgt retning",
              "Re Rouge: en undersøgt retning med dæmpede farver og et mere klassisk udtryk.",
              "cases/go-rogue/undersoegt-retning.png",
            ),
            picture(
              "Valgt retning",
              "Go Rogue: den valgte retning med tydeligere kontraster og et mere modigt udtryk.",
              "cases/go-rogue/valgt-retning.png",
            ),
          ],
        },
      },
      {
        heading: "Designvalg",
        paragraphs: [
          "De røde farver er samplet fra rødstrømpeplakater og inspireret af rød læbestift. Vi ville koble referencen til rødstrømpebevægelsen med et mere moderne udtryk, der understøtter Go Rogues modige og direkte personlighed.",
          "Navnet Go Rogue er en bogstavleg med LA RŌUGEs navn. Ved at bytte plads på U og G bliver Rouge til Rogue.",
          "Logoets grafiske stil er et udkast, der efterligner en hilsen skrevet med læbestift på et spejl. Udtrykket kunne videreudvikles ved at skrive med rigtig læbestift og digitalisere resultatet for at få en mere autentisk tekstur.",
        ],
        media: {
          layout: "carousel",
          items: [
            picture(
              "Logo",
              "Go Rogue-logoet med et udtryk inspireret af læbestift på et spejl.",
              "cases/go-rogue/logo.png",
            ),
            picture(
              "Typografi",
              "Go Rogues typografi.",
              "cases/go-rogue/typografi.png",
            ),
            picture(
              "Billedstil",
              "Eksempler på Go Rogues billedstil.",
              "cases/go-rogue/billedstil.png",
            ),
          ],
        },
      },
      {
        heading: "Konceptet uden for skærmen",
        paragraphs: [
          "Vi udviklede også hangtags, klistermærker og en note til de kasser, der sendes til kunderne. Her kunne vi folde Go Rogues identitet ud og tænke konceptet ind i den oplevelse, kunden får, når hun modtager tøjet.",
          "Et hangtag med en QR-kode skulle gøre det muligt at registrere tøjet på sin profil ved køb, så det senere bliver nemmere at sende ind igen. Det hjerteformede hangtag understøtter samme idé med beskeden: 'Send me back, when you’re done'.",
          "Klistermærkerne kombinerer LA RŌUGEs og Go Rogues logoer med læbestiftreferencer og korte budskaber. På den måde viser de både subbrandets eget udtryk og forbindelsen til moderbrandet.",
        ],
        media: {
          layout: "carousel",
          items: [
            picture(
              "Indgangen til konceptet",
              "Hvordan brugeren møder Go Rogue.",
            ),
            picture(
              "Sælg dit tøj",
              "Et centralt trin i sælgerens brugerrejse.",
            ),
            picture("Køb brugt", "Et centralt trin i køberens brugerrejse."),
          ],
        },
      },
      {
        heading: "Min rolle",
        paragraphs: [
          "[Udfyld før aflevering: Beskriv dit konkrete bidrag til research, navn, logo, visuel retning, tekster eller prototype. Hvilke beslutninger traf I sammen?]",
        ],
      },
    ],
    reflection: [
      "Go Rogue gav mig mulighed for at arbejde med et eksisterende brand og samtidig udfordre dets udtryk. Det krævede, at vi både forstod udgangspunktet og turde undersøge en anden retning.",
      "Jeg tager især med mig, at en stærk identitet og en overskuelig brugerrejse skal understøtte hinanden. Vores koncept er et bud på, hvordan re-commerce kan få mere opmærksomhed, men det kræver afprøvning med målgruppen at vurdere, om løsningen også får flere til at sende deres tøj ind.",
    ],
  },
];
