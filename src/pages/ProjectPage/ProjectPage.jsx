import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal";
import { projects } from "../../data/projects";
import styles from "./ProjectPage.module.css";

function AnarkistCarousel({ images }) {
  const [pairIndex, setPairIndex] = useState(0);
  const [labelIndex, setLabelIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState(0);

  const pairs = [0, 2, 4].map((start) => images.slice(start, start + 2));
  const labels = images.filter((_, index) => index % 2 === 0);
  const details = images.filter((_, index) => index % 2 === 1);

  return (
    <section
      className={styles.carousel}
      aria-label="Anarkist-etiketter og detaljer"
    >
      <div className={styles.desktopCarousel}>
        <div
          className={styles.desktopTrack}
          style={{ transform: `translateX(-${pairIndex * 100}%)` }}
        >
          {pairs.map((pair, index) => (
            <div className={styles.carouselPair} key={index}>
              {pair.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              ))}
            </div>
          ))}
        </div>

        <button
          className={`${styles.carouselButton} ${styles.previousButton}`}
          type="button"
          aria-label="Forrige to billeder"
          onClick={() =>
            setPairIndex((index) => (index + pairs.length - 1) % pairs.length)
          }
        >
          ←
        </button>

        <button
          className={`${styles.carouselButton} ${styles.nextButton}`}
          type="button"
          aria-label="Næste to billeder"
          onClick={() => setPairIndex((index) => (index + 1) % pairs.length)}
        >
          →
        </button>

        <span className={styles.carouselCount} aria-live="polite">
          {pairIndex + 1} / {pairs.length}
        </span>
      </div>

      <div className={styles.mobileCarousels}>
        {[
          {
            title: "Etiketterne",
            items: labels,
            index: labelIndex,
            setIndex: setLabelIndex,
          },
          {
            title: "Detaljerne",
            items: details,
            index: detailIndex,
            setIndex: setDetailIndex,
          },
        ].map(({ title, items, index, setIndex }) => (
          <div className={styles.mobileCarouselBlock} key={title}>
            <h2>{title}</h2>

            <div className={styles.mobileCarousel}>
              <div
                className={styles.mobileTrack}
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {items.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                ))}
              </div>

              <button
                className={`${styles.carouselButton} ${styles.previousButton}`}
                type="button"
                aria-label={`Forrige billede: ${title.toLowerCase()}`}
                onClick={() =>
                  setIndex(
                    (current) => (current + items.length - 1) % items.length,
                  )
                }
              >
                ←
              </button>

              <button
                className={`${styles.carouselButton} ${styles.nextButton}`}
                type="button"
                aria-label={`Næste billede: ${title.toLowerCase()}`}
                onClick={() =>
                  setIndex((current) => (current + 1) % items.length)
                }
              >
                →
              </button>

              <span className={styles.carouselCount} aria-live="polite">
                {index + 1} / {items.length}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <section className={styles.notFound}>
        <h1>Projektet blev ikke fundet.</h1>
        <Link to="/work">Tilbage til projekter</Link>
      </section>
    );
  }

  const nextProject = projects[index + 1];

  const figmaPrototype =
    project.slug === "sundhedsshoppen"
      ? project.links?.find((link) => link.label === "Se Figma-prototypen")
      : null;

  const figmaEmbedUrl = figmaPrototype
    ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
        figmaPrototype.url,
      )}`
    : null;

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.top}>
          <span>
            {project.number} · {project.category}
          </span>
          {project.year && <span>{project.year}</span>}
        </div>

        <h1>{project.title}</h1>
        <p>{project.intro}</p>
      </header>

      <div
        className={`${styles.cover} ${project.cover ? styles.coverFull : ""}`}
      >
        {project.cover ? (
          <div className={styles.coverMedia}>
            <img
              className={styles.coverImage}
              src={project.cover}
              alt={project.coverAlt || project.title}
              style={{
                objectPosition: project.coverPosition || "center",
              }}
            />

            <div className={styles.coverOverlay}>
              <span>{project.category}</span>
              <strong>{project.title}</strong>
            </div>
          </div>
        ) : (
          <div
            className={`${styles.coverGraphic} ${styles[project.theme] || ""}`}
          >
            <span>{project.category}</span>
            <strong>{project.title}</strong>
          </div>
        )}
      </div>

      <Reveal>
        <section className={styles.overview}>
          <div>
            <p className={styles.label}>Discipliner</p>
            <span>{project.services}</span>

            {project.tools && (
              <>
                <p className={styles.label}>Værktøjer</p>
                <span>{project.tools}</span>
              </>
            )}
          </div>

          <div>
            <p className={styles.label}>Om projektet</p>
            <h2>{project.description}</h2>

            {project.links?.length > 0 && (
              <div className={styles.links}>
                {project.links.map((link) => (
                  <a
                    href={link.url}
                    key={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.story} aria-label="Projektets historie">
          {project.story?.map((section, sectionIndex) => (
            <div className={styles.storySection} key={section.heading}>
              <div className={styles.storyHeading}>
                <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
              </div>

              <div className={styles.storyText}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.links?.map((link) => (
                  <a
                    href={link.url}
                    key={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </Reveal>

      {project.reflection && (
        <Reveal>
          <section className={styles.reflection}>
            <h2>Refleksion</h2>
            <div>
              {(Array.isArray(project.reflection)
                ? project.reflection
                : [project.reflection]
              ).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </Reveal>
      )}

      {project.previewUrl && (
        <section
          className={`${styles.live} ${
            project.previewKind === "phone" ? styles.phoneLive : ""
          }`}
        >
          <div className={styles.liveHeading}>
            <span>Projektet i brug</span>

            {project.previewKind === "phone" && <h2>Prøv {project.title}</h2>}

            <p>
              {project.previewKind === "phone"
                ? "Klik dig rundt i appen direkte fra portfolioen. Du kan også åbne projektet via linket ovenfor."
                : "En visning af den eksisterende hjemmeside. Brug linket ovenfor, hvis forhåndsvisningen ikke vises."}
            </p>
          </div>

          <div
            className={
              project.previewKind === "phone" ? styles.phone : styles.browser
            }
          >
            <iframe
              src={project.previewUrl}
              title={`Forhåndsvisning af ${project.title}`}
              loading="lazy"
            />
          </div>
        </section>
      )}

      {project.slug === "anarkist-etiketter" && project.gallery?.length > 0 && (
        <AnarkistCarousel images={project.gallery} />
      )}

      {project.slug !== "anarkist-etiketter" && project.gallery?.length > 0 && (
        <section
          className={`${styles.gallery} ${
            project.slug === "spotify-shorts" ? styles.videoGallery : ""
          } ${
            project.slug === "loebet-filmplakat" ? styles.posterGallery : ""
          }`}
          aria-label="Billeder og videoer fra projektet"
        >
          {project.gallery.map((item, itemIndex) => (
            <Reveal key={item.src}>
              <figure className={styles.figure}>
                {item.type === "video" ? (
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                  >
                    <source src={item.src} type="video/mp4" />
                    Din browser understøtter ikke videoafspilning.
                  </video>
                ) : (
                  <img src={item.src} alt={item.alt} loading="lazy" />
                )}

                <figcaption
                  className={item.type === "video" ? styles.videoCaption : ""}
                >
                  {item.type === "video" ? (
                    <>
                      <h3>{item.caption}</h3>
                      <p>{item.description}</p>
                    </>
                  ) : (
                    item.caption ||
                    `${project.title} · detalje ${itemIndex + 1}`
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </section>
      )}
      {figmaEmbedUrl && (
        <section
          className={styles.figmaPreview}
          aria-labelledby="figma-preview-heading"
        >
          <div className={styles.figmaPreviewHeading}>
            <div>
              <span>Interaktiv prototype</span>

              <h2 id="figma-preview-heading">Udforsk Sundhedsshoppen</h2>
            </div>

            <p>
              Klik dig rundt i den tidlige Figma-prototype og oplev projektets
              struktur og visuelle retning.
            </p>
          </div>

          <div className={styles.figmaDesktopPreview}>
            <iframe
              src={figmaEmbedUrl}
              title="Figma-prototype af Sundhedsshoppen"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <a
            className={styles.figmaResponsiveLink}
            href={figmaPrototype.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Åbn Figma-prototypen <span aria-hidden="true">↗</span>
          </a>
        </section>
      )}

      <Link
        className={styles.next}
        to={nextProject ? `/work/${nextProject.slug}` : "/work"}
      >
        <span>{nextProject ? "Næste projekt" : "Tilbage til oversigten"}</span>
        <strong>{nextProject ? nextProject.title : "Alle projekter"} →</strong>
      </Link>
    </article>
  );
}
