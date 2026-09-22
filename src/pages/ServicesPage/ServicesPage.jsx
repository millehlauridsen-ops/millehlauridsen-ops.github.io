import ProjectHero from "../../components/ProjectHero/ProjectHero";
import Reveal from "../../components/Reveal/Reveal";
import styles from "./ServicesPage.module.css";
const services = [
  {
    n: "01",
    title: "Visuel identitet",
    text: "Visuelle systemer med en tydelig personlighed — fra logo og typografi til farver, layout og retningslinjer.",
  },
  {
    n: "02",
    title: "Art direction",
    text: "En klar kreativ retning, der forbinder idé, billeder, typografi og tone gennem hele projektet.",
  },
  {
    n: "03",
    title: "Redaktionelt design",
    text: "Gennemtænkte layouts til publikationer, plakater og tryksager bygget op omkring hierarki og rytme.",
  },
  {
    n: "04",
    title: "Kampagnedesign",
    text: "Fleksible visuelle koncepter, der fungerer på sociale medier, i motion, på print og digitale flader.",
  },
];
export default function ServicesPage() {
  return (
    <div>
      <ProjectHero
        eyebrow="Kompetencer"
        title="Fra den første idé til et visuelt system."
        text="Jeg udvikler stærke koncepter og omsætter dem til sammenhængende visuel kommunikation på tværs af formater."
      />
      <section className={styles.list}>
        {services.map((s) => (
          <Reveal key={s.n}>
            <article>
              <span>{s.n}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
