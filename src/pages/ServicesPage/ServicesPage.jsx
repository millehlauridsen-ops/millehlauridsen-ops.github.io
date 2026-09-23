import { Link } from "react-router-dom";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import Reveal from "../../components/Reveal/Reveal";
import styles from "./ServicesPage.module.css";

const competences = [
  {
    number: "01",
    title: "Frontendudvikling",
    text: "Jeg omsætter design til responsive og brugervenlige løsninger i React. Jeg arbejder struktureret med komponenter, CSS Modules og samspillet mellem funktion, indhold og visuel identitet.",
    keywords: ["React", "HTML", "CSS", "Responsivt design"],
  },
  {
    number: "02",
    title: "UX/UI og interaktionsdesign",
    text: "Jeg udvikler digitale brugeroplevelser fra de første skitser til klikbare prototyper. Jeg interesserer mig især for tydelige brugerrejser, visuelt hierarki og løsninger, der er nemme at forstå.",
    keywords: ["Figma", "Wireframes", "Prototyper", "Brugerrejser"],
  },
  {
    number: "03",
    title: "Konceptudvikling",
    text: "Jeg undersøger problemet, stiller spørgsmål og udvikler idéer, før jeg låser mig fast på en løsning. Jeg kan godt lide at arbejde fra en løs tanke frem mod et koncept med en tydelig retning og personlighed.",
    keywords: ["Research", "Idéudvikling", "Visuel retning", "Problemløsning"],
  },
  {
    number: "04",
    title: "Grafisk og visuelt design",
    text: "Jeg arbejder med farver, typografi, komposition og visuelle systemer på tværs af digitale flader, plakater, identiteter og emballage. Detaljen skal støtte helheden – ikke stå i vejen for den.",
    keywords: ["Visuel identitet", "Layout", "Typografi", "Adobe"],
  },
  {
    number: "05",
    title: "Motion og digitalt indhold",
    text: "Jeg eksperimenterer med animation, timing og visuel fortælling i korte digitale formater. Jeg er stadig i udvikling på området, men lærer hurtigt og har lyst til at udforske det meget mere.",
    keywords: ["After Effects", "Premiere Pro", "Jitter", "Animation"],
  },
];

const primaryTools = [
  "Figma",
  "Visual Studio Code",
  "React",
  "Git og GitHub",
  "AI",
];

const additionalTools = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe After Effects",
  "Premiere Pro",
  "Adobe Dimension",
  "Jitter",
];

const strengths = [
  {
    number: "01",
    title: "Pålidelig",
    text: "Jeg tager ansvar for mine opgaver og følger dem til dørs.",
  },
  {
    number: "02",
    title: "Detaljeorienteret",
    text: "Jeg går gerne et ekstra lag ned og opdager de små ting, der påvirker helheden.",
  },
  {
    number: "03",
    title: "Løsningsorienteret",
    text: "Jeg bliver motiveret af problemer, der kræver, at jeg undersøger og prøver mig frem.",
  },
  {
    number: "04",
    title: "Entusiastisk",
    text: "Jeg går ind i nye opgaver med energi, nysgerrighed og lyst til at lære.",
  },
  {
    number: "05",
    title: "Imødekommende",
    text: "Jeg lægger vægt på et trygt samarbejde, hvor der er plads til forskellige mennesker.",
  },
  {
    number: "06",
    title: "Omstillingsparat",
    text: "Jeg kan bevare overblikket, når planer ændrer sig, og der skal handles hurtigt.",
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <ProjectHero
        eyebrow="Kompetencer"
        title="Fra nysgerrighed til løsning."
        text="Jeg arbejder i krydsfeltet mellem design, udvikling og koncept – og jeg trives bedst, når jeg får lov til at lære noget nyt undervejs."
      />

      <section className={styles.intro}>
        <Reveal>
          <p className={styles.sectionLabel}>Det kan jeg bidrage med</p>
        </Reveal>

        <Reveal>
          <h2>
            Jeg kombinerer det visuelle blik med lysten til at forstå, hvordan
            løsningen fungerer.
          </h2>
        </Reveal>
      </section>

      <section className={styles.competenceList}>
        {competences.map((competence) => (
          <Reveal key={competence.number}>
            <article className={styles.competence}>
              <span className={styles.number}>{competence.number}</span>

              <h2>{competence.title}</h2>

              <div className={styles.competenceCopy}>
                <p>{competence.text}</p>

                <ul aria-label={`Emner under ${competence.title}`}>
                  {competence.keywords.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className={styles.toolbox}>
          <div className={styles.toolboxHeading}>
            <p className={styles.sectionLabel}>Min værktøjskasse</p>

            <h2>Programmer er værktøjer. Nysgerrigheden er motoren.</h2>

            <p>
              Det her er de programmer og teknologier, jeg allerede arbejder
              med. Listen er ikke lukket – jeg lærer gerne det næste, projektet
              kræver.
            </p>
          </div>

          <div className={styles.tools}>
            <div className={styles.toolGroup}>
              <h3>Det arbejder jeg mest med</h3>

              <div className={styles.toolTags}>
                {primaryTools.map((tool) => (
                  <span className={styles.primaryTool} key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.toolGroup}>
              <h3>Det arbejder jeg også med</h3>

              <div className={styles.toolTags}>
                {additionalTools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className={styles.strengthsSection}>
        <Reveal className={styles.strengthsHeading}>
          <p className={styles.sectionLabel}>Sådan arbejder jeg</p>

          <h2>Kompetencer handler også om den måde, man møder andre på.</h2>

          <p>
            Min erfaring fra salg, administration og rollen som tutor har lært
            mig at tage ansvar, bevare overblikket og være opmærksom på de
            mennesker, jeg arbejder sammen med.
          </p>
        </Reveal>

        <div className={styles.strengthGrid}>
          {strengths.map((strength, index) => (
            <Reveal key={strength.number}>
              <article
                className={`${styles.strength} ${
                  styles[`strength${index + 1}`]
                }`}
              >
                <span>{strength.number}</span>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className={styles.experience}>
          <div>
            <p className={styles.sectionLabel}>Kompetencer i praksis</p>

            <h2>Fra selvstændigt ansvar til socialt overblik.</h2>
          </div>

          <div className={styles.experienceItems}>
            <article>
              <span>2019–2022</span>
              <h3>Salg og administration</h3>

              <p>
                Ansvar for salg, webshop og sociale medier gav mig erfaring med
                selvstændigt arbejde, ansvar og betydningen af de små detaljer.
              </p>
            </article>

            <article>
              <span>2026</span>
              <h3>Tutor på multimediedesign</h3>

              <p>
                Rollen krævede planlægning, struktur, empati og evnen til
                hurtigt at omstille sig og gribe mennesker, når de havde brug
                for det.
              </p>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.cta}>
          <p>Vil du se, hvordan kompetencerne bliver brugt i praksis?</p>

          <Link to="/work">Se mine projekter →</Link>

          <Link className={styles.contactLink} to="/contact">
            Eller kontakt mig
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
