import { Link, useParams } from "react-router-dom";
import ProjectVisual from "../../components/ProjectVisual/ProjectVisual";
import Reveal from "../../components/Reveal/Reveal";
import { projects } from "../../data/projects";
import styles from "./ProjectPage.module.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  if (!project) {
    return <section className={styles.notFound}><h1>Projektet blev ikke fundet.</h1><Link to="/work">Tilbage til projekter</Link></section>;
  }

  const nextProject = projects[index + 1];

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.top}><span>{project.number} · {project.category}</span>{project.year && <span>{project.year}</span>}</div>
        <h1>{project.title}</h1>
        <p>{project.intro}</p>
      </header>

      <div className={styles.cover}><ProjectVisual project={project} /></div>

      <Reveal>
        <section className={styles.overview}>
          <div><p className={styles.label}>Discipliner</p><span>{project.services}</span></div>
          <div>
            <p className={styles.label}>Om projektet</p>
            <h2>{project.description}</h2>
            {project.links?.length > 0 && (
              <div className={styles.links}>
                {project.links.map((link) => (
                  <a href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </Reveal>

      {project.previewUrl && (
        <section className={styles.live}>
          <div className={styles.liveHeading}>
            <span>Projektet i brug</span>
            <p>En visning af den eksisterende hjemmeside. Brug linket ovenfor, hvis forhåndsvisningen ikke vises.</p>
          </div>
          <div className={project.previewKind === "phone" ? styles.phone : styles.browser}>
            <iframe src={project.previewUrl} title={`Forhåndsvisning af ${project.title}`} loading="lazy" />
          </div>
        </section>
      )}

      {project.gallery?.length > 0 && (
        <section
          className={`${styles.gallery} ${project.slug === "spotify-shorts" ? styles.videoGallery : ""}`}
          aria-label="Billeder og videoer fra projektet"
        >
          {project.gallery.map((item, itemIndex) => (
            <Reveal key={item.src}>
              <figure className={styles.figure}>
                {item.type === "video" ? (
                  <video controls playsInline preload="metadata" poster={item.poster}>
                    <source src={item.src} type="video/mp4" />
                    Din browser understøtter ikke videoafspilning.
                  </video>
                ) : (
                  <img src={item.src} alt={item.alt} loading="lazy" />
                )}
                <figcaption className={item.type === "video" ? styles.videoCaption : ""}>
                  {item.type === "video" ? (
                    <>
                      <h3>{item.caption}</h3>
                      <p>{item.description}</p>
                    </>
                  ) : (
                    item.caption || `${project.title} · detalje ${itemIndex + 1}`
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </section>
      )}

      <Link className={styles.next} to={nextProject ? `/work/${nextProject.slug}` : "/work"}>
        <span>{nextProject ? "Næste projekt" : "Tilbage til oversigten"}</span>
        <strong>{nextProject ? nextProject.title : "Alle projekter"} →</strong>
      </Link>
    </article>
  );
}
