import { Link } from "react-router-dom";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import Reveal from "../../components/Reveal/Reveal";
import { projects } from "../../data/projects";
import styles from "./WorkPage.module.css";

export default function WorkPage() {
  return (
    <div>
      <ProjectHero eyebrow="Udvalgt arbejde · 2025—2026" title="Projekter med plads til idéen." text="Identitet, kampagne, redaktionelt og digitalt design præsenteret enkelt — med fokus på processen og det visuelle resultat." />
      <section className={styles.list}>
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <Link to={`/work/${project.slug}`} className={styles.project}>
              <div className={styles.heading}><span>{project.number}</span><h2>{project.title}</h2><span>{project.year}</span></div>
              <div className={`${styles.visual} ${styles[project.color]}`}><span>{project.letter}</span></div>
              <div className={styles.meta}><p>{project.category}</p><span>Se projekt ↗</span></div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
