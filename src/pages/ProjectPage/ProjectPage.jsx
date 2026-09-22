import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import Reveal from "../../components/Reveal/Reveal";
import styles from "./ProjectPage.module.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <section className={styles.notFound}><h1>Projektet blev ikke fundet.</h1><Link to="/work">Tilbage til projekter</Link></section>;

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.top}><span>{project.number} · {project.category}</span><span>{project.year}</span></div>
        <h1>{project.title}</h1>
        <p>{project.intro}</p>
      </header>
      <div className={`${styles.cover} ${styles[project.color]}`}><span>{project.letter}</span></div>
      <Reveal><section className={styles.overview}><div><p>Discipliner</p><span>{project.services}</span></div><div><p>Om projektet</p><h2>{project.description}</h2></div></section></Reveal>
      <section className={styles.gallery}>
        <Reveal><div className={`${styles.image} ${styles.cobalt}`}><span>Projektbillede 01</span></div></Reveal>
        <Reveal><div className={`${styles.image} ${styles.orange}`}><span>Projektbillede 02</span></div></Reveal>
        <div className={styles.split}><Reveal><div className={`${styles.image} ${styles.light}`}><span>Projektbillede 03</span></div></Reveal><Reveal><div className={`${styles.image} ${styles.soft}`}><span>Projektbillede 04</span></div></Reveal></div>
      </section>
      <Link className={styles.next} to="/work"><span>Tilbage til oversigten</span><strong>Alle projekter →</strong></Link>
    </article>
  );
}
