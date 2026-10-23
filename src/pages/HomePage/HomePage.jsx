import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal";
import portrait from "../../assets/images/mig.jpeg";
import circles from "../../assets/graphics/stororangegul.svg";
import blueLines from "../../assets/graphics/blaastreger.svg";
import beerLabels from "../../assets/projects/beerlabels.png";
import pubHubImage from "../../assets/projects/pubhubposter.png";
import styles from "./HomePage.module.css";
import { projects } from "../../data/projects";

const goRogue = projects.find((project) => project.slug === "go-rogue");

const featuredProjects = [
  {
    slug: "go-rogue",
    number: "01",
    title: "Go Rogue",
    category: "Brandidentitet · Konceptudvikling · Re-commerce",
    description:
      "Et subbrand med sin egen stemme og et genkendeligt afsæt i LA RŌUGE.",
    image: `${import.meta.env.BASE_URL}cases/go-rogue/note.png`,
    imageAlt: "Go Rogue-note til at lægge i kassen med tøjet",
  },
  {
    slug: "anarkist-etiketter",
    number: "02",
    title: "Øletiketter til Anarkist",
    category: "Emballagedesign · Grafisk design",
    description:
      "Tre forskellige øl, tre visuelle fortællinger og én samlet serie af etiketter.",
    image: beerLabels,
    imageAlt:
      "Tre øldåser med etiketterne Free Spirit, Smoked Rebel og Dark Manifest",
  },
  {
    slug: "pubhub",
    number: "03",
    title: "PubHub",
    category: "Appdesign · UX/UI · React",
    description:
      "Et appkoncept, der gør det lettere at opdage nye barer og oplevelser i Aarhus.",
    image: pubHubImage,
    imageAlt: "Skærmbillede fra PubHub-applikationen",
  },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <img
            className={styles.heroCircles}
            src={circles}
            alt=""
            aria-hidden="true"
          />
          <div className={styles.heroTop}>
            <p>Grafisk design & visuel kommunikation</p>
            <p>Aarhus · Danmark</p>
          </div>

          <div className={styles.title}>
            <span className={styles.portfolio}>Portfolio</span>
            <span className={styles.name}>Mille Høj Lauridsen</span>
            <p className={styles.titleDescription}>
              Detaljeorienteret arbejdshest med kærlighed for storytelling,
              udvikling, medmenneskelighed og surdejsbagning. Jeg elsker at give
              den en ekstra skalle for at bidrage til det større billede.
            </p>
          </div>

          <div className={styles.heroBottom}>
            <a href="#projects">Se udvalgte produkter ↓</a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={portrait} alt="Portræt af Mille Lauridsen" />
          <img
            className={styles.heroLines}
            src={blueLines}
            alt=""
            aria-hidden="true"
          />
        </div>
      </section>

      <section id="projects" className={styles.projects}>
        <div className={styles.sectionHeading}>
          <p>Udvalgte projekter</p>
          <span>01—03</span>
        </div>

        <div className={styles.projectList}>
          {featuredProjects.map((project) => (
            <Reveal key={project.slug}>
              <Link
                to={`/work/${project.slug}`}
                className={styles.project}
                aria-label={`Læs mere om ${project.title}`}
              >
                <div className={styles.projectInfo}>
                  <div className={styles.projectNumber}>
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>

                  <div className={styles.projectBody}>
                    <h2>{project.title}</h2>

                    <p className={styles.description}>{project.description}</p>
                  </div>
                </div>

                <div className={styles.visual}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link className={styles.allProjects} to="/work">
          Se alle projekter <span>→</span>
        </Link>
      </section>

      <Reveal>
        <section className={styles.statement}>
          <p className={styles.label}>Min tilgang</p>

          <h2>
            Enkelt behøver ikke at være neutralt.{" "}
            <em>Godt design må gerne have karakter.</em>
          </h2>

          <Link to="/about">
            Mere om mig <span>↗</span>
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
