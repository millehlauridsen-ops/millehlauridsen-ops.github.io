import styles from "./ProjectVisual.module.css";

export default function ProjectVisual({ project }) {
  if (project.cover) {
    return (
      <div className={styles.visual}>
        <img src={project.cover} alt={project.coverAlt} loading="lazy" />
      </div>
    );
  }

  // De digitale projekter i den gamle portfolio har endnu ingen screenshots.
  return (
    <div className={`${styles.visual} ${styles[project.theme] || ""}`}>
      <div className={styles.typographic}>
        <span>{project.category}</span>
        <strong>{project.title}</strong>
        <span>Se projektet ↗</span>
      </div>
    </div>
  );
}
