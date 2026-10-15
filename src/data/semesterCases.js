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
    services: "Frontend, datamodel, tilmeldingsflow",
    tools: "React · Supabase REST API · GitHub",
    collaboration: "Individuelt projekt · 3. semester",
    description:
      "I Mellemrum arbejdede jeg videre på en eksisterende eventplatform. Jeg valgte at rydde op i koden og få løsningen til at hænge bedre sammen — både for brugeren, der tilmelder sig, og arrangøren, der skal holde styr på tilmeldingerne.",
    isSemesterCase: true,
    cover: asset("cases/mellemrum/cover.png"),
    coverAlt: "Forsiden af Mellemrum med oversigt over kommende events",
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
          "Mellemrum var et individuelt projekt på 3. semester, hvor vi fik udleveret en React-prototype, vi skulle arbejde videre på. Den grundlæggende løsning var der, men tilmeldingsformularen gemte ikke oplysningerne, og der manglede feedback, når siden hentede data eller noget gik galt.",
          "Jeg valgte at fokusere på strukturen i koden og sammenhængen mellem events, lokationer og tilmeldinger. Jeg ville gerne få de centrale funktioner til at fungere sammen og gøre koden mere overskuelig at arbejde videre med.",
        ],
      },
      {
        heading: "Mere overblik i koden",
        paragraphs: [
          "Jeg samlede gentagen kode og delte nogle af sidernes funktioner op i mindre komponenter. Footeren blev til en fælles komponent, og tilmeldingsformularen fik sin egen fil, så eventsiden ikke skulle stå for det hele.",
          "Jeg samlede også kommunikationen med Supabase i en service-fil. På den måde kunne jeg genbruge funktionerne til at hente, oprette, opdatere og slette data uden at skrive de samme kald på hver side.",
        ],
      },
      {
        heading: "Tilmelding og overblik",
        layout: "text-above",
        paragraphs: [
          "I den oprindelige løsning blev oplysningerne fra formularen kun skrevet i konsollen. Jeg ændrede det, så en tilmelding bliver gemt i Supabase og knyttet til det valgte event gennem eventets id.",
          "Jeg arbejdede også med at hente lokationens oplysninger gennem en relation mellem events og venues, så de samme oplysninger ikke skulle stå på hvert event.",
          "På arrangørens side samlede jeg tilmeldingerne i en tabel med de nyeste først. Her kan man filtrere efter event, bekræfte en tilmelding eller slette den. Det gav et samlet overblik over de oplysninger, brugeren sender ind.",
        ],
        media: {
          layout: "comparison",
          variant: "registration",
          items: [
            picture(
              "Tilmeldingsformular",
              "Formularen med validering af obligatoriske felter.",
              "cases/mellemrum/tilmelding.png",
            ),
            picture(
              "Arrangørens overblik",
              "Tilmeldinger med event, status og mulighed for bekræftelse og sletning.",
              "cases/mellemrum/overblik.png",
            ),
          ],
        },
      },
      {
        heading: "Feedback til brugeren",
        paragraphs: [
          "Jeg arbejdede også med de situationer, hvor løsningen ikke bare virker som forventet. Jeg tilføjede loading- og fejlbeskeder samt besked ved tomme søgeresultater. I tilmeldingsformularen får brugeren feedback, mens tilmeldingen sendes, og besked om, hvorvidt den blev gemt.",
        ],
        media: {
          layout: "single",
          items: [
            picture(
              "Ingen events fundet",
              "Ved tomme søgeresultater får brugeren hjælp til at ændre sin søgning.",
              "cases/mellemrum/ingen-resultater.png",
            ),
          ],
        },
      },
      {
        heading: "Kontrol af løsningen",
        theme: "dark",
        layout: "text-above",
        paragraphs: [
          "Jeg kontrollerede tilmeldingsflowet ved at oprette en testtilmelding gennem formularen og bagefter tjekke, at den blev vist under det rigtige event i arrangørens overblik. Undervejs tjekkede jeg også løbende Supabase for at sikre mig, at oplysningerne blev gemt som forventet.",
          "Jeg brugte Lighthouse undervejs og fik blandt andet en advarsel om overskriftsstrukturen, som jeg efterfølgende arbejdede med. Jeg justerede også bogstavafstanden med fokus på læsbarhed.",
        ],
        media: {
          layout: "before-after",
          items: [
            picture(
              "Bogstavafstand før",
              "Før: Overskriftens bogstaver stod så tæt, at flere overlappede.",
              "cases/mellemrum/bogstavafstand-foer.png",
            ),
            picture(
              "Bogstavafstand efter",
              "Efter: Bogstavafstanden blev øget for at adskille bogstaverne tydeligere.",
              "cases/mellemrum/bogstavafstand-efter.png",
            ),
          ],
        },
      },
    ],
    reflection: [
      "Det var lærerigt at arbejde videre på kode, jeg ikke selv havde skrevet. Jeg skulle lige finde rundt i løsningen, men det gav også mening at få ryddet op og samlet nogle af de ting, der gik igen.",
      "Jeg fik især mere erfaring med Supabase og med at få formularen, databasen og tilmeldingsoversigten til at hænge sammen.",
    ],
  },
  {
    slug: "vuuh",
    number: "09",
    year: "2026",
    title: "Vuuh",
    category: "UX/UI · Onboarding · Produktoptimering",
    intro: "Onboarding - oplevelse og produktoptimering.",
    services: "UX-analyse, interaktionsdesign, prototype",
    tools: "Figma",
    collaboration: "Gruppeprojekt · 3. semester",
    description:
      "Et redesign og optimering af en eksisterende onboarding med fokus på tydelige handlinger, mindre kompleksitet og forståelig feedback.",
    isSemesterCase: true,
    cover: asset("cases/vuuh/cover.png"),
    coverAlt: "Intro til onboarding i Vuuh",
    links: [
      {
        label: "Se Figma-prototypen",
        url: "https://www.figma.com/proto/1B3oRCTfMeswoYOLLaLaVa/Case-2---Vuuh?node-id=2461-10639&viewport=428%2C314%2C0.08&t=kYJjtC7FuNPPSvmA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2461%3A10639&page-id=2195%3A3844",
      },
    ],
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Vuuh var et gruppeprojekt på 3. semester, hvor vi arbejdede med onboarding i en eksisterende fashion tech-løsning. Produktet hjælper webshopejere med at hente produktdata fra brands, men opsætningen skulle være lettere at forstå.",
          "Vi ville undersøge, hvor processen blev unødvendigt kompliceret, og hvor vi kunne sætte ind med en optimering, der hjalp brugeren til at forstå flowet - og få en hurtigere succesoplevelse.",
        ],
      },
      {
        heading: "Hvor bliver brugeren i tvivl?",
        paragraphs: [
          "Et af vores fund var den side, Vuuh selv kalder en successide, som brugeren møder efter at have downloadet appen på Shopify. Her blev brugeren ikke tydeligt guidet videre til næste trin.",
          "Siden indeholdt information, som brugeren skulle bruge inde i appen, men det var ikke tydeligt, at oplysningerne skulle bruges senere. Brugeren skulle derfor selv forstå sammenhængen mellem successiden og den videre opsætning.",
        ],
      },
      {
        heading: "Mindre kompleksitet, tydeligere retning",
        layout: "text-above",
        paragraphs: [
          "Vi ændrede successiden, så den både bekræfter brugerens fremskridt og forklarer næste skridt. Vi tydeliggjorde, at shopnavnet skal kopieres og bruges i den videre opsætning, og tilføjede et direkte link ind i Vuuh-appen.",
          "Et screenshot med en pil viser, hvor brugeren skal fortsætte inde i appen. Derudover gjorde vi de tre trin i onboardingen tydelige og arbejdede med en animeret progressbar for at give brugeren overblik over, hvor langt hun er, og hvad der mangler.",
        ],
        media: {
          layout: "before-after",
          items: [
            picture(
              "Successiden før",
              "Den oprindelige side uden tydelig vejledning til næste trin.",
              "cases/vuuh/successide-foer.png",
            ),
            picture(
              "Successiden efter",
              "Redesignet med konkrete instruktioner og et direkte link til appen.",
              "cases/vuuh/successide-efter.png",
            ),
          ],
        },
      },
      {
        heading: "Fremskridt, der motiverer",
        paragraphs: [
          "Vi ville gøre onboarding til en overskuelig proces med tre tydelige trin. Derfor udviklede vi en progressbar, hvor en lille papirflyver bevæger sig frem, mens baren fyldes med grønt.",
          "Animationen skulle fungere som en lille visuel belønning og give brugeren en følelse af at komme videre. Sammen med opmuntrende beskeder ville vi motivere brugeren til at gennemføre de sidste trin. Her tog vi afsæt i completion bias — tilbøjeligheden til at ville færdiggøre en påbegyndt opgave.",
          "Progressbaren var en af de dele, vi fik særlig ros for i feedbacken. Det var positivt at opleve, at en lille detalje i interaktionen blev bemærket. Om den faktisk får flere brugere til at gennemføre onboardingen, ville kræve en test med målgruppen.",
        ],
        media: {
          layout: "single",
          items: [
            {
              type: "video",
              src: asset("cases/vuuh/progressbar.mp4"),
              title: "Vuuhs animerede progressbar",
              caption:
                "Papirflyveren og den grønne bar viser fremskridtet gennem onboardingens tre trin.",
            },
          ],
        },
      },
      {
        heading: "Min rolle",
        paragraphs: [
          "Vi var begge tæt inde over analysen og designarbejdet, mens jeg havde særligt fokus på motion design. Vi arbejdede med, hvordan feedback og små visuelle belønninger kunne give brugeren en følelse af fremdrift. Det var vigtigt for os at forsimple og tydeliggøre den eksisterende proces frem for at lave den om.",
        ],
      },
    ],
    reflection: [
      "Det var fedt at samarbejde med virksomheden og få feedback undervejs. Det gav os mulighed for at justere vores fokus og lægge energien dér, hvor de oplevede et særligt behov for vores hjælp.",
      "For mig var det lærerigt at arbejde med konkrete forbedringer inden for rammerne af et eksisterende produkt. Vi kunne bruge vores idéer og motion design til at tydeliggøre processen og give brugeren en følelse af fremdrift.",
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
              "Hangtags med QR-kode",
              "Et koncept til at registrere tøjet på sin profil og gøre senere indsendelse nemmere.",
              "cases/go-rogue/hangtags.png",
            ),
            picture(
              "Hjerteformet hangtag",
              "Go Rogues logo på det hjerteformede hangtag.",
              "cases/go-rogue/hearttag.svg",
            ),
            picture(
              "Klistermærker",
              "Logoer og grafiske elementer fra LA RŌUGE og Go Rogue.",
              "cases/go-rogue/stickers.png",
            ),
            picture(
              "Noten i pakken",
              "En personlig hilsen med fokus på at forlænge tøjets levetid.",
              "cases/go-rogue/note.png",
            ),
          ],
        },
      },
      {
        heading: "Min rolle",
        paragraphs: [
          "For mig var det vigtigt, at vi gav plads til at lege med idéen og prøve skøre og skæve retninger af. Jeg tog initiativ til, at vi bevægede os væk fra Re Rouge-idéen og undersøgte en mere modig og skæv brandpersona. Jeg ville gerne udfordre vores første retning og se, hvad konceptet kunne blive til, hvis vi tænkte lidt mere ud af boksen.",
          "Dog er jeg også bevidst om, at skæve, skøre retninger kan være svære at forene med et eksisterende brand. Det kræver en delikat balancegang at bevare essensen af brandet, samtidig med at man udforsker nye kreative muligheder.",
          "Derfor brugte vi LA ROUGEs eksisterende skelet og fundament som udgangspunkt og byggede videre på det med nye idéer og koncepter.",
        ],
      },
    ],
    reflection: [
      "Da projektet var færdigt, pitchede vi det for Pernille, som repræsenterede LA ROUGE. Da vi så de andres løsninger, blev det tydeligt, at vi skilte os markant ud med vores udtryk. De fleste var gået med en stil, der lænede sig mere op af LA ROUGEs eksisterende identitet.",
      "Jeg tager især med mig, at mine idéer faktisk er ret originale - selvom jeg nogengange tror, at de er ret generiske. Mit mål er altid at efterlade en form for indtryk, og det lykkedes. ",
      "Det er en balancegang at finde det rette udtryk, der både er tro mod brandet og samtidig nytænkende. Vores koncept er et bud på, hvordan re-commerce kan få mere opmærksomhed, men det kræver afprøvning med målgruppen at vurdere, om løsningen har den ønskede virkning.",
    ],
  },
];
