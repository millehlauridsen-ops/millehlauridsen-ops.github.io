import styles from "./ContactPage.module.css";
export default function ContactPage() {
  return (
    <section className={styles.page}>
      <p>Kontakt</p>
      <h1>
        Har du et projekt
        <br />i tankerne?
      </h1>
      <a href="mailto:millehlauridsen@gmail.com">millehlauridsen@gmail.com ↗</a>
      <a href="tel:+4571780323">+45 71 78 03 23 ↗</a>
      <a href="https://www.linkedin.com/in/mille-høj-lauridsen-8953a7403">
        LinkedIn ↗
      </a>
      <div className={styles.bottom}>
        <span>Aarhus, Danmark</span>
        <div>
          <a
            href="https://www.linkedin.com/in/mille-høj-lauridsen-8953a7403"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://candidate.dk/candidates/6ab156a39970e4e2ac2f15f8"
            target="_blank"
            rel="noreferrer"
          >
            Candidate
          </a>
        </div>
      </div>
    </section>
  );
}
