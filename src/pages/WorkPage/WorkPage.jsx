import { Link } from "react-router-dom";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import Reveal from "../../components/Reveal/Reveal";
import { projects } from "../../data/projects";
import styles from "./WorkPage.module.css";
import { useState } from "react";

const projectFilters = [
  {
    label: "Alle",
    slugs: null,
  },
  {
    label: "Web & apps",
    slugs: ["mellemrum", "pubhub", "lumina-one"],
  },
  {
    label: "Konceptudvikling & UX",
    slugs: [
      "pubhub",
      "vuuh",
      "go-rogue",
      "customer-experience",
      "sundhedsshoppen",
      "lumina-one",
    ],
  },
  {
    label: "Grafisk & motion",
    slugs: [
      "anarkist-etiketter",
      "loebet-filmplakat",
      "spotify-shorts",
      "go-rogue",
    ],
  },
  {
    label: "3. semester",
    slugs: ["mellemrum", "vuuh", "go-rogue"],
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("Alle");

  const selectedFilter = projectFilters.find(
    (filter) => filter.label === activeFilter,
  );

  const filteredProjects = projects.filter(
    (project) =>
      !selectedFilter.slugs || selectedFilter.slugs.includes(project.slug),
  );
  return (
    <div>
      <ProjectHero
        title="Projekter."
        text="Grafisk design, motion og digitale løsninger. Vælg et projekt for at se idéen og resultatet."
      />

      <section className={styles.projects} aria-label="Alle projekter">
        <div
          className={styles.filters}
          role="group"
          aria-label="Filtrer projekter"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              aria-pressed={activeFilter === filter.label}
              className={`${styles.filterButton} ${
                activeFilter === filter.label ? styles.filterActive : ""
              }`}
              onClick={() => setActiveFilter(filter.label)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.sectionHeading}>
          <span>
            {activeFilter === "Alle" ? "Alle projekter" : activeFilter}
          </span>

          <span role="status" aria-live="polite" aria-atomic="true">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "projekt" : "projekter"}
          </span>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <Reveal key={project.slug}>
              <Link to={`/work/${project.slug}`} className={styles.card}>
                <span
                  className={`${styles.circle} ${
                    styles[`circle${(projects.indexOf(project) % 4) + 1}`]
                  }`}
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
