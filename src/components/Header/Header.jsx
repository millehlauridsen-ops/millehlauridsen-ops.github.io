import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const links = [
  ["Projekter", "/work"],
  ["Om mig", "/about"],
  ["Kompetencer", "/services"],
  ["Kontakt", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primær navigation">
        {" "}
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          Mille Høj Lauridsen
        </NavLink>
        <button
          className={styles.menuButton}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="main-menu"
        >
          <span className="sr-only">Åbn menu</span>
          <span />
          <span />
        </button>
        <div
          id="main-menu"
          className={`${styles.links} ${open ? styles.open : ""}`}
        >
          {links.map(([label, path], index) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <span>0{index + 1}</span>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
