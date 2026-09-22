import styles from "./ProjectHero.module.css";

export default function ProjectHero({ eyebrow, title, text }) {
  return (
    <section className={styles.hero}>
      <p>{eyebrow}</p>
      <h1>{title}</h1>
      <div className={styles.text}>{text}</div>
    </section>
  );
}
