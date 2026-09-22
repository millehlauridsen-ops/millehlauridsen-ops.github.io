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

// Rækkefølgen her bestemmer også rækkefølgen på Projekter-siden.
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
    description:
      "Et studieprojekt fra Creative Content, hvor jeg udviklede etiketter til tre fiktive øl i Anarkists univers. Jeg arbejdede med illustration, farve og komposition for at give Free Spirit, Smoked Rebel og Dark Manifest hver deres karakter.",
    process:
      "Jeg undersøgte Anarkists markante univers og arbejdede på at give de tre øl hvert sit udtryk, samtidig med at etiketterne føltes som en serie. Undervejs lærte jeg Illustrator og Photoshop at kende og tegnede på en tablet for første gang. Jeg brugte også AI som hjælp til at vælge, hvilke øltyper jeg ville designe til.",
    reflection:
      "Det tog tid at lære både værktøjerne og en tegnemåde, jeg ikke var vant til. Arbejdet mindede mig om, at det er værd at afprøve et udtryk uden for min komfortzone og give processen plads, før den endelige løsning falder på plads.",
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
    process:
      "Vi tog udgangspunkt i spørgsmålet om, hvor man tager hen på en aften i Aarhus, og samlede idéer til barer og events i én mobil løsning. Vi begyndte med papirskitser og enkle wireframes, udviklede prototypen i Figma og byggede derefter en responsiv webapp i React.",
    reflection:
      "Arbejdet fra skitse til webapp fik mig til at tænke over, hvor hurtigt man skal kunne orientere sig på mobilen, når man er på vej videre i byen. Hvis jeg skulle udvikle PubHub videre, ville jeg afprøve den med brugere i netop den situation og se, hvilke oplysninger de faktisk har brug for først.",
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
    description:
      "Plakaten blev til under Creative Content i januar 2026. Jeg tog afsæt i mine tanker om truslerne mod Grønland og undersøgte, hvordan stemning, billedsammensætning og typografi kunne bære fortællingen.",
    process:
      "Jeg begyndte med mine egne tanker og bekymringer i januar 2026 og omsatte dem til en filmplakat. Med Photoshop og Illustrator eksperimenterede jeg med billedsammensætning, typografi og en dramatisk stemning.",
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
    description:
      "Jeg brugte to sange som anledning til at lære After Effects og eksperimentere med rytme, bevægelse og visuel stemning. Begge animationer ligger på denne side, så man kan se, hvordan jeg arbejdede med det samme korte format på to forskellige måder.",
    process:
      "Til Min eneste rus lærte jeg grundlæggende værktøjer i After Effects og arbejdede med timing, komposition og overgange i forhold til sangens rytme. Til Hot kunne jeg eksperimentere mere med tempo og udtryk; jeg tegnede blandt andet en figur i Photoshop for at animere den.",
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
    process:
      "I eksamensprojektet fra første semester arbejdede jeg med et designsystem, komponenter og interaktive elementer. Jeg udviklede både en Figma-prototype og en kodet hjemmeside, så idéerne kunne afprøves i en fungerende løsning.",
    reflection:
      "Projektet gav mig anledning til at se design og udvikling i sammenhæng: Et visuelt system skal også fungere, når det bliver til klikbare komponenter på en rigtig hjemmeside.",
    theme: "lumina",
    previewUrl: "https://millehlauridsen-ops.github.io/LuminaOneExam/",
    previewKind: "browser",
    links: [
      {
        label: "Se hjemmesiden",
        url: "https://millehlauridsen-ops.github.io/LuminaOneExam/",
      },
      {
        label: "Se Figma-prototypen",
        url: "https://www.figma.com/proto/SLGW4anE9BsMk3w1r32Zgi/Landingpage---Lumina-one--Copy-?node-id=2245-3207",
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
    process:
      "Projektet tog udgangspunkt i målgruppen og brugerrejsen. Vi arbejdede med den visuelle identitet og omsatte idéerne til en Figma-prototype og en hjemmeside, der kunne prøves af.",
    reflection:
      "Jeg ser projektet som en øvelse i at holde den visuelle retning og brugerens oplevelse samlet. De valg, man træffer i identiteten, skal også give mening, når en person bevæger sig rundt på siden.",
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
      "Jeg hjalp med et udkast til Sundhedsshoppen i form af en tidlig prototype. Projektet viser idéfasen og mine overvejelser om struktur og præsentation; det er ikke en færdigudviklet hjemmeside.",
    process:
      "Jeg rådgav om et tidligt udkast til en kundes webshop og lavede en simpel prototype i Figma. Fokus var på at få idéer til sidens struktur og præsentation frem, før der blev arbejdet med en færdig løsning.",
    reflection:
      "Det var en øvelse i at bruge en enkel skitse som samtalegrundlag. Projektet er stadig et tidligt udkast, og jeg vil gerne vise det som netop dét frem for at præsentere det som en færdig webshop.",
    theme: "sundhed",
    links: [
      {
        label: "Se Figma-prototypen",
        url: "https://www.figma.com/proto/7Oxy6RujSiCJs9tRg4Rr6S/Sundhedsshoppen?node-id=1338-1312",
      },
    ],
  },
];
