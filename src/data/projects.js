import { semesterCases } from "./semesterCases";
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
import controlCover from "../assets/projects/controlScreenshot.png";

export const projects = [
  {
    slug: "anarkist-etiketter",
    number: "01",
    title: "Ã˜letiketter til Anarkist",
    year: "2026",
    category: "Emballagedesign Â· Grafisk design",
    intro:
      "Tre forskellige Ã¸l, tre fortÃ¦llinger og Ã©n samlet serie af etiketter.",
    services: "Koncept, illustration, emballagedesign",
    tools: "Illustrator Â· Photoshop",
    description:
      "Et studieprojekt fra Creative Craft, hvor jeg udviklede etiketter til tre fiktive Ã¸l i Anarkists univers. Jeg arbejdede med illustration, farve og komposition for at give Free Spirit, Smoked Rebel og Dark Manifest hver deres karakter.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Et designprojekt fra Creative Craft, hvor jeg arbejdede med Ã¸letiketter til det danske brand Anarkist.",
          "Jeg fokuserede pÃ¥ at indfange essensen af brandet og dets produkter og samtidig skabe en sammenhÃ¦ngende visuel identitet. Det var lidt udfordrende, fordi Anarkist har en meget sÃ¦rlig og markant stil, men jeg nÃ¸d at eksperimentere med en anden stil end den, jeg er vant til.",
          "Jeg brugte AI som hjÃ¦lp til at finde frem til, hvilke Ã¸ltyper jeg ville designe etiketter til.",
        ],
      },
    ],
    reflection: [
      "Intet er nogensinde for svÃ¦rt at lÃ¦re â€“ det er mit mantra.",
      "I dette projekt arbejdede jeg med Photoshop og Illustrator for allerfÃ¸rste gang. Det krÃ¦vede tid og energi at lÃ¦re vÃ¦rktÃ¸jerne at kende, men med tÃ¥lmodighed og Ã¸velse fik jeg lavet et slutprodukt, som jeg er stolt af.",
      "Det var ogsÃ¥ fÃ¸rste gang, jeg tegnede pÃ¥ en tablet. Jeg har aldrig syntes, at jeg var sÃ¦rligt god til at tegne, men jeg ville udfordre mig selv og prÃ¸ve noget nyt.",
      "For mig handler det om at skubbe til mine egne grÃ¦nser og udforske nye kreative muligheder. Projektet gav mig mulighed for at trÃ¦de ud af min komfortzone og udvikle mig som designer.",
    ],
    cover: anarkistCover,
    coverAlt:
      "Tre Ã¸ldÃ¥ser med etiketterne Free Spirit, Smoked Rebel og Dark Manifest",
    gallery: [
      {
        src: freeSpirit,
        alt: "Free Spirit etiketten pÃ¥ dÃ¥se",
        caption: "Free Spirit",
      },
      {
        src: freeSpiritDetail,
        alt: "Grafiske detaljer fra Free Spirit etiketten",
      },
      {
        src: smokedRebel,
        alt: "Smoked Rebel etiketten pÃ¥ dÃ¥se",
        caption: "Smoked Rebel",
      },
      {
        src: smokedRebelDetail,
        alt: "Grafiske detaljer fra Smoked Rebel etiketten",
      },
      {
        src: darkManifest,
        alt: "Dark Manifest etiketten pÃ¥ dÃ¥se",
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
    category: "Appdesign Â· UX/UI Â· React",
    intro:
      "Et appkoncept, der hjÃ¦lper unge i Aarhus med at finde nye barer og oplevelser.",
    services: "Koncept, UX/UI, prototype, frontend",
    description:
      "I et gruppeprojekt pÃ¥ 2. semester undersÃ¸gte vi, hvordan man kan opdage flere steder at gÃ¥ ud i Aarhus. Vi begyndte med skitser og wireframes, fÃ¸r vi udviklede en Figma-prototype og en responsiv webapp i React.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "PubHub var eksamensprojektet i WebApp pÃ¥ 2. semester. Opgaven var at skabe et appkoncept og designe og kode en responsiv webapp med React - og oprette dataen i en ekstern database (SupaBase).",
        ],
      },
      {
        heading: "Koncept",
        paragraphs: [
          "Vi ville skabe en app, som vi selv fÃ¸lte, at vi manglede i vores hverdag som unge i Aarhus: en digital platform, der hjÃ¦lper brugerne med at opdage lokale events og barer og engagere sig i dem.",
          "Man hÃ¸rer ofte, at folk i Aarhus gÃ¥r pÃ¥ de samme barer igen og igen. Ikke fordi de nÃ¸dvendigvis vil det, men fordi de ikke ved, hvor de ellers kan tage hen. Det behov ville vi gerne imÃ¸dekomme.",
        ],
      },
      {
        heading: "Proces",
        paragraphs: [
          "Vi ville virkelig have hÃ¦nderne i projektet, eksperimentere og arbejde grundigt med idÃ©erne. Derfor begyndte vi med papirskitser og enkle wireframes, fÃ¸r vi gik videre til detaljerede designs i Figma.",
          "Den tilgang gav os mulighed for at afprÃ¸ve idÃ©er og vÃ¦re kreative i lÃ¦ngere tid, end vi oplever, nÃ¥r vi starter direkte pÃ¥ skÃ¦rmen.",
          "Vi inddrog brugerne tidligt i processen med test pÃ¥ wireframes for at fÃ¥ feedback og justere vores idÃ©er - hvad var godt, hvad forvirrede? Hvilke funktioner var mest relevante? Det gav os et godt grundlag for at udvikle en prototype, som vi kunne teste mere detaljeret.",
        ],
      },
      {
        heading: "â€¦PubHub?",
        paragraphs: [
          "Ja, vi ved det godt. Vi ville skabe et design, der var sjovt, engagerende og fik folk til at vende hovedet. Vi lod os inspirere af Pornhubs meget genkendelige visuelle identitet og oplevede, at folk blev nysgerrige pÃ¥ vores koncept.",
          "Det var et eksperiment, og det virkede, som vi havde hÃ¥bet.",
        ],
      },
    ],
    reflection:
      "PubHub lÃ¦rte mig, hvor meget brugerens konkrete situation kan pÃ¥virke det interface, vi udvikler. Et design kan godt vÃ¦re visuelt stÃ¦rkt uden at blive svÃ¦rt at bruge, hvis hierarki og handlinger er tydelige og intuitive for den, der skal bruge det.",
    cover: pubhubCover,
    coverAlt: "Pubhub Poster",
    coverPosition: "center center",
    theme: "pubhub",
    previewUrl: "https://eaa25mtha.github.io/webapp-eksamen/",
    previewKind: "phone",
    links: [
      {
        label: "PrÃ¸v appen",
        url: "https://eaa25mtha.github.io/webapp-eksamen/",
      },
    ],
  },
  {
    slug: "loebet-filmplakat",
    number: "03",
    title: "LÃ¸bet",
    year: "2026",
    category: "Plakatdesign Â· Visuel fortÃ¦lling",
    intro:
      "En filmplakat, der omsÃ¦tter en aktuel uro til et dramatisk visuelt udtryk.",
    services: "Koncept, billedbehandling, plakatdesign",
    tools: "Photoshop Â· Illustrator",
    description:
      "Plakaten blev til under Creative Content i januar 2026. Jeg tog afsÃ¦t i mine tanker om truslerne mod GrÃ¸nland og undersÃ¸gte, hvordan stemning, billedsammensÃ¦tning og typografi kunne bÃ¦re fortÃ¦llingen.",
    story: [
      {
        heading: "Bag plakaten",
        paragraphs: [
          "Filmplakaten blev skabt pÃ¥ Creative Content-forlÃ¸bet. Den tager udgangspunkt i mine egne tanker og bekymringer pÃ¥ det tidspunkt, hvor jeg lavede den: januar 2026.",
          "Trump truede med at 'tage' GrÃ¸nland med magt, hvis det blev nÃ¸dvendigt, og det fyldte meget i mine tanker. Jeg ville omsÃ¦tte min frygt og mine tanker til et visuelt udtryk og eksperimentere med komposition, billeder og stemning.",
        ],
      },
    ],
    reflection:
      "Plakaten var en mulighed for at undersÃ¸ge, hvordan et personligt afsÃ¦t kan blive til en visuel fortÃ¦lling. Jeg ville lade billederne og atmosfÃ¦ren formidle fÃ¸lelsen uden at forklare den i en lang tekst.",
    cover: movieCover,
    coverAlt: "Filmplakaten LÃ¸bet vist pÃ¥ en plakatvÃ¦g",
    gallery: [
      {
        src: movieDetail,
        alt: "Detalje af filmplakaten LÃ¸bet",
        caption: "Plakaten tÃ¦t pÃ¥",
      },
      {
        src: movieCover,
        alt: "Filmplakaten LÃ¸bet i omgivelserne",
        caption: "Plakaten i kontekst",
      },
    ],
  },
  {
    slug: "spotify-shorts",
    number: "04",
    title: "Spotify Shorts",
    year: "2026",
    category: "Motion design Â· Musik",
    intro:
      "To korte musikvisuals: Min eneste rus og Hot, samlet i Ã©t motion design-projekt.",
    services: "Animation, komposition, timing",
    tools: "After Effects Â· Photoshop",
    description:
      "Jeg brugte to sange som anledning til at lÃ¦re After Effects og eksperimentere med rytme, bevÃ¦gelse og visuel stemning. Begge animationer ligger pÃ¥ denne side, sÃ¥ man kan se, hvordan jeg arbejdede med det samme korte format pÃ¥ to forskellige mÃ¥der.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "To korte visualiseringer til nogle af mine yndlingssange pÃ¥ det tidspunkt, skabt mens jeg lÃ¦rte Adobe After Effects at kende.",
          "MÃ¥let var at eksperimentere med bevÃ¦gelse, timing og visuel fortÃ¦lling, samtidig med at jeg lÃ¦rte et helt nyt program.",
        ],
      },
      {
        heading: "01 Â· Min eneste rus",
        paragraphs: [
          "I visualiseringen til Barselonas 'Min eneste rus' fokuserede jeg pÃ¥ at lÃ¦re grundfunktionerne i After Effects og undersÃ¸ge, hvordan bevÃ¦gelse kan understÃ¸tte sangens fÃ¸lelse og rytme.",
          "Jeg arbejdede med timing, komposition og overgange og undersÃ¸gte, hvordan man kan styrke en visuel fortÃ¦lling pÃ¥ bare fÃ¥ sekunder.",
        ],
        links: [
          {
            label: "HÃ¸r Min eneste rus",
            url: "https://open.spotify.com/track/7mrhoZ9D53DgtlutlmTOYE?si=4820c9c2b0c24db4",
          },
        ],
      },
      {
        heading: "02 Â· Hot",
        paragraphs: [
          "I den anden animation ville jeg skubbe det visuelle udtryk lÃ¦ngere og prÃ¸ve en anden tilgang til bevÃ¦gelse og tempo.",
          "Jeg havde allerede lÃ¦rt nogle af grundvÃ¦rktÃ¸jerne og kunne derfor bruge mere tid pÃ¥ at eksperimentere og skabe en animation, der passede til sangens personlighed.",
          "Jeg ville ogsÃ¥ prÃ¸ve at animere en tegnet figur, sÃ¥ jeg tegnede den i Photoshop.",
        ],
        links: [
          {
            label: "HÃ¸r Hot",
            url: "https://open.spotify.com/track/6ZrzenY5yEFciqcIUmZSYS?si=4ed3a7118f8b4b82",
          },
        ],
      },
    ],
    reflection:
      "De to videoer viser min udvikling undervejs. I den fÃ¸rste brugte jeg meget energi pÃ¥ at lÃ¦re vÃ¦rktÃ¸jet. I den anden havde jeg mere overskud til at prÃ¸ve idÃ©er af og lade animationen passe til sangens personlighed.",
    cover: spotifyCover,
    coverAlt: "Stillbillede fra Spotify-animationen Min eneste rus",
    gallery: [
      {
        type: "video",
        src: minEnesteRus,
        poster: spotifyCover,
        caption: "Min eneste rus Â· Barselona",
        description:
          "Den fÃ¸rste visualisering, hvor jeg undersÃ¸gte, hvordan timing og bevÃ¦gelse kan fÃ¸lge sangens stemning.",
      },
      {
        type: "video",
        src: hot,
        caption: "Hot Â· Emil Kruse",
        description:
          "En anden tilgang med fokus pÃ¥ tempo, typografi og kontrast.",
      },
    ],
  },
  {
    slug: "lumina-one",
    number: "05",
    title: "Lumina One",
    category: "Webdesign Â· Frontend",
    intro:
      "Et website fra fÃ¸rste semester med fokus pÃ¥ designsystem og interaktive komponenter.",
    services: "Designsystem, prototype, frontend",
    description:
      "Mit eksamensprojekt fra fÃ¸rste semester. Jeg arbejdede med at omsÃ¦tte et designsystem til komponenter og en interaktiv hjemmeside. Den levende side og prototypen kan udforskes via linkene herunder.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Eksamensprojekt fra 1. semester med fokus pÃ¥ designsystem, komponenter og interaktivitet.",
          "Opgaven bestod i at skulle optimere og forbedre et tidligere projekt pÃ¥ 1. semester.",
        ],
      },
      {
        heading: "Proces",
        paragraphs: [
          "Jeg tog udgangspunkt i det fÃ¸rste projekt pÃ¥ 1. semester.",
          "Jeg arbejdede med at omsÃ¦tte designsystemet til interaktive komponenter, gÃ¸re siden mere Ã¦stetisk tiltalende og brugervenlig. Derudover arbejdede jeg pÃ¥ at forbedre og optimere min kode - som jeg sidenhen har lÃ¦rt meget mere om. Dette var det sidste projekt, vi kodede uden React.js",
          "I Figma arbejdede jeg med at skabe en prototype, der kunne demonstrere de interaktive elementer og komponenter - samt opsÃ¦tte et godt designsystem med det udgangspunkt, at en anden skulle kunne overtage min prototype.",
        ],
      },
      {
        heading: "Oprindeligt projekt",
        paragraphs: [
          "Vores opgave bestod i at designe en Landingsside for Lumina One - en hÃ¸jtaler designet til unge, sociale kvinder i uddannelse.",
          "Vi satte fokus pÃ¥ at skabe en visuel identitet, der appellerede til mÃ¥lgruppen - bÃ¥de by day og by night.",
          "Der er helt klart flere ting, jeg kunne og ville have forbedret - sÃ¦rligt designmÃ¦ssigt. Men med den tid og de evner, jeg havde pÃ¥ det givne tidspunkt, er jeg stolt af, hvor langt jeg kom og den lÃ¦ring, jeg har taget med mig.",
        ],
      },
    ],
    reflection:
      "I dette projekt oplevede jeg en stor tilfredsstillelse i at optimere og forbedre kode, design og system. Det var en lÃ¦rerig proces, hvor jeg kunne se, hvordan smÃ¥ Ã¦ndringer kunne have stor indflydelse pÃ¥ det endelige resultat - funktionalitet og oplevelse. Jeg har sidenhen brugt denne erfaring og tilfredsstillelse som et springbrÃ¦t til det detaljerede arbejde med designsystemer, komponenter og interaktivitet.",
    cover: luminaCover,
    coverAlt: "SkÃ¦rmbillede af Lumina One-hjemmesiden",
    coverPosition: "center center",
    theme: "lumina",
    previewUrl: "https://millehlauridsen-ops.github.io/luminaResponsive/",
    previewKind: "browser",

    links: [
      {
        label: "Se hjemmesiden",
        url: "https://millehlauridsen-ops.github.io/luminaResponsive/",
      },
      {
        label: "Se Figma-prototypen",
        url: "https://www.figma.com/proto/SLGW4anE9BsMk3w1r32Zgi/Landingpage---Lumina-one--Copy-?node-id=2245-3207",
      },
      {
        label: "Se GitHub-koden",
        url: "https://github.com/millehlauridsen-ops/luminaResponsive",
      },
    ],
  },
  {
    slug: "customer-experience",
    number: "06",
    title: "Customer Experience",
    category: "Webdesign Â· Brugeroplevelse",
    intro:
      "Et digitalt koncept (retailer) med fokus pÃ¥ mÃ¥lgruppe, visuel identitet og brugerrejse.",
    services: "Brugerrejse, visuel identitet, prototype",
    description:
      "I dette projekt arbejdede vi med sammenhÃ¦ngen mellem mÃ¥lgruppe, visuel identitet og den oplevelse, brugeren mÃ¸der pÃ¥ hjemmesiden. Se lÃ¸sningen og prototypen via linkene.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Et Customer Experience-projekt med fokus pÃ¥ mÃ¥lgruppe, visuel identitet og brugerrejser.",
        ],
      },
      {
        heading: "Proces",
        paragraphs: [
          "I dette projekt arbejdede vi med at kortlÃ¦gge brugerrejsen og identificere de vigtigste touchpoints. Vi udviklede en visuel identitet, der understÃ¸ttede brugerens oplevelse og ego - hvad er vigtigt for dem? Hvem er de?",
        ],
      },
      {
        heading: "Research",
        paragraphs: [
          "Vi havde ikke tid eller ressourcer til at teste vores mÃ¥lgruppe i dybden, hvilket kunne have afkrÃ¦ftet eller bekrÃ¦ftet nogle af de antagelser vi lavede, men vi var meget opmÃ¦rksomme pÃ¥ det undervejs.",
          "Vi arbejdede med brugerresearch og data (statistik, rapporter mm.) for at informere vores designbeslutninger og sikre, at vi adresserede de rigtige behov - dette er dog stadig bare antagelser, man pÃ¥ det rigtige marked ville skulle validere og teste.",
        ],
      },
    ],
    reflection:
      "Jeg ser projektet som en Ã¸velse i at holde den visuelle retning og brugerens oplevelse samlet - ud fra research og data. Hvordan kan vi sikre, at vores designvalg er i trÃ¥d med brugernes behov og forventninger? Vi brugte ogsÃ¥ denne mulighed for at eksperimentere med en mÃ¥lgruppe, som skilte sig lidt ud i forhold til, hvad vi havde arbejdet med indtil da.",
    cover: controlCover,
    coverAlt: "SkÃ¦rmbillede af control-hjemmeside",
    coverPosition: "center center",
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
    category: "Webdesign Â· RÃ¥dgivning",
    intro:
      "Et tidligt designudkast til en webshop udviklet som rÃ¥dgivning for en kunde.",
    services: "RÃ¥dgivning, wireframes, prototype",
    description:
      "Jeg hjalp med et udkast til Sundhedsshoppen i form af en tidlig prototype (mockup), hvor jeg havde fokus pÃ¥ at forsimple en proces for en mÃ¥lgruppe, der har brug for en nem brugerrejse og hurtig adgang til information.",
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Jeg rÃ¥dgav en ven om en enkel, tidlig mockup til min vens kunde 'Sundhedsshoppen'. For denne mÃ¥lgruppe er det vigtigt at have en klar og overskuelig brugerrejse, der gÃ¸r det nemt for dem at finde de oplysninger, de har brug for - men pÃ¥ samme tid ogsÃ¥ fÃ¸le en personlig forbindelse til ejeren af webshoppen.",
        ],
      },
      {
        heading: "Opgaven",
        paragraphs: [
          "For ejeren af denne webshop er der sÃ¦rligt fokus pÃ¥ den personlige rÃ¥dgivning og skrÃ¦ddersyet service, hun tilbyder. PÃ¥ samme tid, skal processen forsimples for ejeren af webshoppen, sÃ¥ hver enkelte bruger ikke skal kontakte hende privat.",
          "Dette var mit fÃ¸rste udkast og bud pÃ¥, hvordan man kunne imÃ¸dekomme ejeren af webshoppens Ã¸nske om personlig vejledning af hver enkelte bruger uden at overbelaste hende med forespÃ¸rgsler.",
        ],
      },
    ],
    reflection:
      "Projektet er et lo-fi udkast, der fokuserer pÃ¥ at skabe en enkel og overskuelig brugerrejse. Det var interessant at arbejde pÃ¥ en konkret webshop og skabe en lÃ¸sning, der imÃ¸dekommer brugerens behov uden at gÃ¥ pÃ¥ kompromis med ejeren af webshoppens vÃ¦rdigrundlag.",
    cover: sundhedsshoppenCover,
    coverAlt: "SkÃ¦rmbillede af Sundhedsshoppen-prototypen",
    coverPosition: "center center",
    theme: "sundhed",
    links: [
      {
        label: "Se Figma-prototypen",
        url: "https://www.figma.com/proto/7Oxy6RujSiCJs9tRg4Rr6S/Sundhedsshoppen?node-id=1338-1312",
      },
    ],
  },
  ...semesterCases,
];
