import anarkistCover from "../assets/projects/beerlabels.png";
import freeSpirit from "../assets/projects/freespirit1.png";
import freeSpiritDetail from "../assets/projects/freespirit2.png";
import smokedRebel from "../assets/projects/smokedrebel1.png";
import smokedRebelDetail from "../assets/projects/smokedrebel2.png";
import darkManifest from "../assets/projects/darkmanifest1.png";
import darkManifestDetail from "../assets/projects/darkmanifest2.png";
import movieCover from "../assets/projects/movieposter.png";
import movieDetail from "../assets/projects/movieposter1.png";
import spotifyCover from "../assets/projects/enesterus.png";
import minEnesteRus from "../assets/projects/Barselona_minEnesteRus.mp4";
import hot from "../assets/projects/EmilKruse_hot.mp4";
import luminaCover from "../assets/projects/luminaScreenshot.png";
import sundhedsshoppenCover from "../assets/projects/sundhedsshoppenScreenshot.png";
import pubhubCover from "../assets/projects/pubhubposter.png";

export const projects = [
  {
    slug: "anarkist-etiketter",
    number: "01",
    title: "Øletiketter til Anarkist",
    year: "2026",
    category: "Emballagedesign · Grafisk design",
    intro:
      "Tre forskellige øl, tre fortællinger og én samlet serie af etiketter.",
    services: "Koncept, illustration, emballagedesign",
    tools: "Illustrator · Photoshop",
    description:
      "Et studieprojekt fra Creative Craft, hvor jeg udviklede etiketter til tre fiktive øl i Anarkists univers. Jeg arbejdede med illustration, farve og komposition for at give Free Spirit, Smoked Rebel og Dark Manifest hver deres karakter.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Et designprojekt fra Creative Craft, hvor jeg arbejdede med øletiketter til det danske brand Anarkist.",
          "Jeg fokuserede på at indfange essensen af brandet og dets produkter og samtidig skabe en sammenhængende visuel identitet. Det var lidt udfordrende, fordi Anarkist har en meget særlig og markant stil, men jeg nød at eksperimentere med en anden stil end den, jeg er vant til.",
          "Jeg brugte AI som hjælp til at finde frem til, hvilke øltyper jeg ville designe etiketter til.",
        ],
      },
    ],
    reflection: [
      "Intet er nogensinde for svært at lære – det er mit mantra.",
      "I dette projekt arbejdede jeg med Photoshop og Illustrator for allerførste gang. Det krævede tid og energi at lære værktøjerne at kende, men med tålmodighed og øvelse fik jeg lavet et slutprodukt, som jeg er stolt af.",
      "Det var også første gang, jeg tegnede på en tablet. Jeg har aldrig syntes, at jeg var særligt god til at tegne, men jeg ville udfordre mig selv og prøve noget nyt.",
      "For mig handler det om at skubbe til mine egne grænser og udforske nye kreative muligheder. Projektet gav mig mulighed for at træde ud af min komfortzone og udvikle mig som designer.",
    ],
    cover: anarkistCover,
    coverAlt:
      "Tre øldåser med etiketterne Free Spirit, Smoked Rebel og Dark Manifest",
    gallery: [
      {
        src: freeSpirit,
        alt: "Free Spirit etiketten på dåse",
        caption: "Free Spirit",
      },
      {
        src: freeSpiritDetail,
        alt: "Grafiske detaljer fra Free Spirit etiketten",
      },
      {
        src: smokedRebel,
        alt: "Smoked Rebel etiketten på dåse",
        caption: "Smoked Rebel",
      },
      {
        src: smokedRebelDetail,
        alt: "Grafiske detaljer fra Smoked Rebel etiketten",
      },
      {
        src: darkManifest,
        alt: "Dark Manifest etiketten på dåse",
        caption: "Dark Manifest",
      },
      {
        src: darkManifestDetail,
        alt: "Grafiske detaljer fra Dark Manifest etiketten",
      },
    ],
  },
  {
    slug: "pubhub",
    number: "02",
    title: "PubHub",
    year: "2026",
    category: "Appdesign · UX/UI · React",
    intro:
      "Et appkoncept, der hjælper unge i Aarhus med at finde nye barer og oplevelser.",
    services: "Koncept, UX/UI, prototype, frontend",
    description:
      "I et gruppeprojekt på 2. semester undersøgte vi, hvordan man kan opdage flere steder at gå ud i Aarhus. Vi begyndte med skitser og wireframes, før vi udviklede en Figma-prototype og en responsiv webapp i React.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "PubHub var eksamensprojektet i WebApp på 2. semester. Opgaven var at skabe et appkoncept og designe og kode en responsiv webapp med React - og oprette dataen i en ekstern database (SupaBase).",
        ],
      },
      {
        heading: "Koncept",
        paragraphs: [
          "Vi ville skabe en app, som vi selv følte, at vi manglede i vores hverdag som unge i Aarhus: en digital platform, der hjælper brugerne med at opdage lokale events og barer og engagere sig i dem.",
          "Man hører ofte, at folk i Aarhus går på de samme barer igen og igen. Ikke fordi de nødvendigvis vil det, men fordi de ikke ved, hvor de ellers kan tage hen. Det behov ville vi gerne imødekomme.",
        ],
      },
      {
        heading: "Proces",
        paragraphs: [
          "Vi ville virkelig have hænderne i projektet, eksperimentere og arbejde grundigt med idéerne. Derfor begyndte vi med papirskitser og enkle wireframes, før vi gik videre til detaljerede designs i Figma.",
          "Den tilgang gav os mulighed for at afprøve idéer og være kreative i længere tid, end vi oplever, når vi starter direkte på skærmen.",
          "Vi inddrog brugerne tidligt i processen med test på wireframes for at få feedback og justere vores idéer - hvad var godt, hvad forvirrede? Hvilke funktioner var mest relevante? Det gav os et godt grundlag for at udvikle en prototype, som vi kunne teste mere detaljeret.",
        ],
      },
      {
        heading: "…PubHub?",
        paragraphs: [
          "Ja, vi ved det godt. Vi ville skabe et design, der var sjovt, engagerende og fik folk til at vende hovedet. Vi lod os inspirere af Pornhubs meget genkendelige visuelle identitet og oplevede, at folk blev nysgerrige på vores koncept.",
          "Det var et eksperiment, og det virkede, som vi havde håbet.",
        ],
      },
    ],
    reflection:
      "PubHub lærte mig, hvor meget brugerens konkrete situation kan påvirke det interface, vi udvikler. Et design kan godt være visuelt stærkt uden at blive svært at bruge, hvis hierarki og handlinger er tydelige og intuitive for den, der skal bruge det.",
    cover: pubhubCover,
    coverAlt: "Pubhub Poster",
    coverPosition: "center center",
    theme: "pubhub",
    previewUrl: "https://eaa25mtha.github.io/webapp-eksamen/",
    previewKind: "phone",
    links: [
      {
        label: "Prøv appen",
        url: "https://eaa25mtha.github.io/webapp-eksamen/",
      },
    ],
  },
  {
    slug: "loebet-filmplakat",
    number: "03",
    title: "Løbet",
    year: "2026",
    category: "Plakatdesign · Visuel fortælling",
    intro:
      "En filmplakat, der omsætter en aktuel uro til et dramatisk visuelt udtryk.",
    services: "Koncept, billedbehandling, plakatdesign",
    tools: "Photoshop · Illustrator",
    description:
      "Plakaten blev til under Creative Content i januar 2026. Jeg tog afsæt i mine tanker om truslerne mod Grønland og undersøgte, hvordan stemning, billedsammensætning og typografi kunne bære fortællingen.",
    story: [
      {
        heading: "Bag plakaten",
        paragraphs: [
          "Filmplakaten blev skabt på Creative Content-forløbet. Den tager udgangspunkt i mine egne tanker og bekymringer på det tidspunkt, hvor jeg lavede den: januar 2026.",
          "Trump truede med at 'tage' Grønland med magt, hvis det blev nødvendigt, og det fyldte meget i mine tanker. Jeg ville omsætte min frygt og mine tanker til et visuelt udtryk og eksperimentere med komposition, billeder og stemning.",
        ],
      },
    ],
    reflection:
      "Plakaten var en mulighed for at undersøge, hvordan et personligt afsæt kan blive til en visuel fortælling. Jeg ville lade billederne og atmosfæren formidle følelsen uden at forklare den i en lang tekst.",
    cover: movieCover,
    coverAlt: "Filmplakaten Løbet vist på en plakatvæg",
    gallery: [
      {
        src: movieDetail,
        alt: "Detalje af filmplakaten Løbet",
        caption: "Plakaten tæt på",
      },
      {
        src: movieCover,
        alt: "Filmplakaten Løbet i omgivelserne",
        caption: "Plakaten i kontekst",
      },
    ],
  },
  {
    slug: "spotify-shorts",
    number: "04",
    title: "Spotify Shorts",
    year: "2026",
    category: "Motion design · Musik",
    intro:
      "To korte musikvisuals: Min eneste rus og Hot, samlet i ét motion design-projekt.",
    services: "Animation, komposition, timing",
    tools: "After Effects · Photoshop",
    description:
      "Jeg brugte to sange som anledning til at lære After Effects og eksperimentere med rytme, bevægelse og visuel stemning. Begge animationer ligger på denne side, så man kan se, hvordan jeg arbejdede med det samme korte format på to forskellige måder.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "To korte visualiseringer til nogle af mine yndlingssange på det tidspunkt, skabt mens jeg lærte Adobe After Effects at kende.",
          "Målet var at eksperimentere med bevægelse, timing og visuel fortælling, samtidig med at jeg lærte et helt nyt program.",
        ],
      },
      {
        heading: "01 · Min eneste rus",
        paragraphs: [
          "I visualiseringen til Barselonas 'Min eneste rus' fokuserede jeg på at lære grundfunktionerne i After Effects og undersøge, hvordan bevægelse kan understøtte sangens følelse og rytme.",
          "Jeg arbejdede med timing, komposition og overgange og undersøgte, hvordan man kan styrke en visuel fortælling på bare få sekunder.",
        ],
        links: [
          {
            label: "Hør Min eneste rus",
            url: "https://open.spotify.com/track/7mrhoZ9D53DgtlutlmTOYE?si=4820c9c2b0c24db4",
          },
        ],
      },
      {
        heading: "02 · Hot",
        paragraphs: [
          "I den anden animation ville jeg skubbe det visuelle udtryk længere og prøve en anden tilgang til bevægelse og tempo.",
          "Jeg havde allerede lært nogle af grundværktøjerne og kunne derfor bruge mere tid på at eksperimentere og skabe en animation, der passede til sangens personlighed.",
          "Jeg ville også prøve at animere en tegnet figur, så jeg tegnede den i Photoshop.",
        ],
        links: [
          {
            label: "Hør Hot",
            url: "https://open.spotify.com/track/6ZrzenY5yEFciqcIUmZSYS?si=4ed3a7118f8b4b82",
          },
        ],
      },
    ],
    reflection:
      "De to videoer viser min udvikling undervejs. I den første brugte jeg meget energi på at lære værktøjet. I den anden havde jeg mere overskud til at prøve idéer af og lade animationen passe til sangens personlighed.",
    cover: spotifyCover,
    coverAlt: "Stillbillede fra Spotify-animationen Min eneste rus",
    gallery: [
      {
        type: "video",
        src: minEnesteRus,
        poster: spotifyCover,
        caption: "Min eneste rus · Barselona",
        description:
          "Den første visualisering, hvor jeg undersøgte, hvordan timing og bevægelse kan følge sangens stemning.",
      },
      {
        type: "video",
        src: hot,
        caption: "Hot · Emil Kruse",
        description:
          "En anden tilgang med fokus på tempo, typografi og kontrast.",
      },
    ],
  },
  {
    slug: "lumina-one",
    number: "05",
    title: "Lumina One",
    category: "Webdesign · Frontend",
    intro:
      "Et website fra første semester med fokus på designsystem og interaktive komponenter.",
    services: "Designsystem, prototype, frontend",
    description:
      "Mit eksamensprojekt fra første semester. Jeg arbejdede med at omsætte et designsystem til komponenter og en interaktiv hjemmeside. Den levende side og prototypen kan udforskes via linkene herunder.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Eksamensprojekt fra 1. semester med fokus på designsystem, komponenter og interaktivitet.",
          "Opgaven bestod i at skulle optimere og forbedre et tidligere projekt på 1. semester.",
        ],
      },
      {
        heading: "Proces",
        paragraphs: [
          "Jeg tog udgangspunkt i det første projekt på 1. semester.",
          "Jeg arbejdede med at omsætte designsystemet til interaktive komponenter, gøre siden mere æstetisk tiltalende og brugervenlig. Derudover arbejdede jeg på at forbedre og optimere min kode - som jeg sidenhen har lært meget mere om. Dette var det sidste projekt, vi kodede uden React.js",
          "I Figma arbejdede jeg med at skabe en prototype, der kunne demonstrere de interaktive elementer og komponenter - samt opsætte et godt designsystem med det udgangspunkt, at en anden skulle kunne overtage min prototype.",
        ],
      },
      {
        heading: "Oprindeligt projekt",
        paragraphs: [
          "Vores opgave bestod i at designe en Landingsside for Lumina One - en højtaler designet til unge, sociale kvinder i uddannelse.",
          "Vi satte fokus på at skabe en visuel identitet, der appellerede til målgruppen - både by day og by night.",
          "Der er helt klart flere ting, jeg kunne og ville have forbedret - særligt designmæssigt. Men med den tid og de evner, jeg havde på det givne tidspunkt, er jeg stolt af, hvor langt jeg kom og den læring, jeg har taget med mig.",
        ],
      },
    ],
    reflection:
      "I dette projekt oplevede jeg en stor tilfredsstillelse i at optimere og forbedre kode, design og system. Det var en lærerig proces, hvor jeg kunne se, hvordan små ændringer kunne have stor indflydelse på det endelige resultat - funktionalitet og oplevelse. Jeg har sidenhen brugt denne erfaring og tilfredsstillelse som et springbræt til det detaljerede arbejde med designsystemer, komponenter og interaktivitet.",
    cover: luminaCover,
    coverAlt: "Skærmbillede af Lumina One-hjemmesiden",
    coverPosition: "center center",
    theme: "lumina",

    links: [
      {
        label: "Se hjemmesiden",
        url: "https://millehlauridsen-ops.github.io/LuminaOneExam/",
      },
      {
        label: "Se Figma-prototypen",
        url: "https://www.figma.com/proto/SLGW4anE9BsMk3w1r32Zgi/Landingpage---Lumina-one--Copy-?node-id=2245-3207",
      },
      {
        label: "Se GitHub-koden",
        url: "https://github.com/millehlauridsen-ops/LuminaOneExam",
      },
    ],
  },
  {
    slug: "customer-experience",
    number: "06",
    title: "Customer Experience",
    category: "Webdesign · Brugeroplevelse",
    intro:
      "Et digitalt koncept med fokus på målgruppe, visuel identitet og brugerrejse.",
    services: "Brugerrejse, visuel identitet, prototype",
    description:
      "I dette projekt arbejdede vi med sammenhængen mellem målgruppe, visuel identitet og den oplevelse, brugeren møder på hjemmesiden. Se løsningen og prototypen via linkene.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Et Customer Experience-projekt med fokus på målgruppe, visuel identitet og brugerrejser.",
        ],
      },
      {
        heading: "Proces",
        paragraphs: [
          "I dette projekt arbejdede vi med at kortlægge brugerrejsen og identificere de vigtigste touchpoints. Vi udviklede en visuel identitet, der understøttede brugerens oplevelse og ego - hvad er vigtigt for dem? Hvem er de?",
        ],
      },
      {
        heading: "Research",
        paragraphs: [
          "Vi havde ikke tid eller ressourcer til at teste vores målgruppe i dybden, hvilket kunne have afkræftet eller bekræftet nogle af de antagelser vi lavede, men vi var meget opmærksomme på det undervejs.",
          "Vi arbejdede med brugerresearch og data (statistik, rapporter mm.) for at informere vores designbeslutninger og sikre, at vi adresserede de rigtige behov - dette er dog stadig bare antagelser, man på det rigtige marked ville skulle validere og teste.",
        ],
      },
    ],
    reflection:
      "Jeg ser projektet som en øvelse i at holde den visuelle retning og brugerens oplevelse samlet - ud fra research og data. Hvordan kan vi sikre, at vores designvalg er i tråd med brugernes behov og forventninger? Vi brugte også denne mulighed for at eksperimentere med en målgruppe, som skilte sig lidt ud i forhold til, hvad vi havde arbejdet med indtil da.",
    theme: "customer",
    previewUrl: "https://kubraf96.github.io/customer-experience-exam-trial/",
    previewKind: "browser",
    links: [
      {
        label: "Se hjemmesiden",
        url: "https://kubraf96.github.io/customer-experience-exam-trial/",
      },
      {
        label: "Se Figma-prototypen",
        url: "https://www.figma.com/proto/DDOsqOvKqXQ5mM1FPOejjj/Customer-experience?node-id=622-1013",
      },
      {
        label: "Se GitHub-koden",
        url: "https://github.com/kubraf96/customer-experience-exam-trial",
      },
    ],
  },
  {
    slug: "sundhedsshoppen",
    number: "07",
    title: "Sundhedsshoppen",
    category: "Webdesign · Rådgivning",
    intro:
      "Et tidligt designudkast til en webshop udviklet som rådgivning for en kunde.",
    services: "Rådgivning, wireframes, prototype",
    description:
      "Jeg hjalp med et udkast til Sundhedsshoppen i form af en tidlig prototype (mockup), hvor jeg havde fokus på at forsimple en proces for en målgruppe, der har brug for en nem brugerrejse og hurtig adgang til information.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Jeg rådgav en ven om en enkel, tidlig mockup til min vens kunde 'Sundhedsshoppen'. For denne målgruppe er det vigtigt at have en klar og overskuelig brugerrejse, der gør det nemt for dem at finde de oplysninger, de har brug for - men på samme tid også føle en personlig forbindelse til ejeren af webshoppen.",
        ],
      },
      {
        heading: "Opgaven",
        paragraphs: [
          "For ejeren af denne webshop er der særligt fokus på den personlige rådgivning og skræddersyet service, hun tilbyder. På samme tid, skal processen forsimples for ejeren af webshoppen, så hver enkelte bruger ikke skal kontakte hende privat.",
          "Dette var mit første udkast og bud på, hvordan man kunne imødekomme ejeren af webshoppens ønske om personlig vejledning af hver enkelte bruger uden at overbelaste hende med forespørgsler.",
        ],
      },
    ],
    reflection:
      "Det var en øvelse i at bruge en enkel skitse som samtalegrundlag. Projektet er stadig et tidligt udkast, og jeg vil gerne vise det som netop dét frem for at præsentere det som en færdig webshop.",
    cover: sundhedsshoppenCover,
    coverAlt: "Skærmbillede af Sundhedsshoppen-prototypen",
    coverPosition: "center center",
    theme: "sundhed",
    links: [
      {
        label: "Se Figma-prototypen",
        url: "https://www.figma.com/proto/7Oxy6RujSiCJs9tRg4Rr6S/Sundhedsshoppen?node-id=1338-1312",
      },
    ],
  },
];
