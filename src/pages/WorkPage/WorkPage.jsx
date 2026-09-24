import { Link } from "react-router-dom";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import Reveal from "../../components/Reveal/Reveal";
import { projects } from "../../data/projects";
import styles from "./WorkPage.module.css";

export default function WorkPage() {
  return (
    <div>
      <ProjectHero
        title="Projekter."
        text="Grafisk design, motion og digitale løsninger. Vælg et projekt for at se idéen og resultatet."
      />

      <section className={styles.projects} aria-label="Alle projekter">
        <div className={styles.sectionHeading}>
          <span>Alle projekter</span>
          <span>{String(projects.length).padStart(2, "0")} i alt</span>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <Link to={`/work/${project.slug}`} className={styles.card}>
                <span
                  className={`${styles.circle} ${styles[`circle${(index % 4) + 1}`]}`}
                  aria-hidden="true"
                />
                <span className={styles.number}>
                  {project.number} / {project.category}
                </span>
                <h2>{project.title}</h2>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
