import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal";
import { projects } from "../../data/projects";
import portrait from "../../assets/images/mig.jpeg";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroTop}>
            <p>Grafisk design & visuel kommunikation</p>
            <p>Aarhus · Danmark</p>
          </div>

          <div className={styles.title}>
            <span className={styles.portfolio}>Portfolio</span>
            <span className={styles.name}>Mille Høj Lauridsen</span>
            <p className={styles.titleDescription}>
              Jeg skaber visuelle identiteter, kampagner og digitale oplevelser
              med et klart koncept og et personligt udtryk.
            </p>
          </div>

          <div className={styles.heroBottom}>
            <a href="#projects">Se udvalgte produkter ↓</a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={portrait} alt="Portræt af Mille Lauridsen" />
        </div>
      </section>

      <section id="projects" className={styles.projects}>
        <div className={styles.sectionHeading}>
          <p>Udvalgte projekter</p>
          <span>01—03</span>
        </div>

        <div className={styles.projectList}>
          {projects.slice(0, 3).map((project) => (
            <Reveal key={project.slug}>
              <Link to={`/work/${project.slug}`} className={styles.project}>
                <div className={styles.projectInfo}>
                  <div className={styles.projectNumber}>
                    <span>{project.number}</span>
                    <span>{project.name}</span>
                  </div>

                  <div>
                    <p className={styles.category}>{project.category}</p>
                    <h2>{project.title}</h2>
                    <p className={styles.description}>{project.intro}</p>
                  </div>

                  <span className={styles.projectLink}>Se projekt ↗</span>
                </div>

                <div className={`${styles.visual} ${styles[project.color]}`}>
                  <span className={styles.letter}>{project.letter}</span>
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
