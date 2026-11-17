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
          "Vi udviklede en progressbar med tre tydelige trin, hvor en lille papirflyver bevæger sig frem, mens baren fyldes med grønt.",
          "Animationen og de opmuntrende beskeder skulle belønne brugerens fremskridt og motivere til at fortsætte. Vi tog afsæt i completion bias — tilbøjeligheden til at ville færdiggøre en påbegyndt opgave.",
          "Progressbaren fik særlig ros i feedbacken. Om den får flere brugere til at gennemføre onboardingen, ville kræve en test med målgruppen.",
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
          "Vi tog afsæt i LA RŌUGEs fortælling om selvkærlighed og retten til at være sig selv og tage plads. Vi ville give den et mere direkte og modigt udtryk med inspiration fra den unge, moderne kvindes feminisme.",
          "Vi undersøgte både en klassisk retning med dæmpede farver og en med mere kontrast og kant. Vi valgte den mere markante stil, som vi vurderede ville resonere med den yngre målgruppe.",
          "Vi beholdt skelettet fra LA RŌUGE som et genkendeligt fundament. Det gav os plads til at eksperimentere med de visuelle detaljer.",
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
              "Klistermærker",
              "Logoer og grafiske elementer fra LA RŌUGE og Go Rogue.",
              "cases/go-rogue/stickers.png",
            ),
            picture(
              "Noten i pakken",
              "En personlig hilsen med fokus på at forlænge tøjets levetid.",
              "cases/go-rogue/note.png",
            ),
            picture(
              "Hjerteformet hangtag",
              "Go Rogues logo på det hjerteformede hangtag.",
              "cases/go-rogue/hearttag.svg",
            ),
          ],
        },
      },
      {
        heading: "Min rolle",
        paragraphs: [
          "For mig var det vigtigt, at vi gav plads til at lege med idéen og prøve skøre og skæve retninger af. Jeg tog initiativ til at gå væk fra Re Rouge-idéen og undersøge en mere modig og skæv brandpersona. Jeg ville gerne se, hvad konceptet kunne blive til, hvis vi tænkte lidt mere ud af boksen.",
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
