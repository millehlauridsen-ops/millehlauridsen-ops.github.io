import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.kicker}>Har du et projekt i tankerne?</p>
          <Link className={styles.mail} to="/contact">
            Lad os arbejde sammen ↗
          </Link>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Mille Lauridsen</p>
          <div>
            <Link to="/work">Projekter</Link>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
