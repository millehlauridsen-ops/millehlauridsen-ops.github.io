import { Link } from "react-router-dom";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import Reveal from "../../components/Reveal/Reveal";
import styles from "./AboutPage.module.css";
import portraitImage from "../../assets/images/afslappet.jpeg";
import projectImage from "../../assets/images/studie.jpeg";
import grassVideo from "../../assets/images/graes.mov";
import lampImage from "../../assets/images/phlampe.png";
import crochetImage from "../../assets/images/haeklet.JPG";

const interviewVideo = `${import.meta.env.BASE_URL}video/myinterview.mp4`;

function ImagePlaceholder({ number, label, className = "" }) {
  return (
    <div
      className={`${styles.imagePlaceholder} ${className}`}
      role="img"
      aria-label={`Plads til billede: ${label}`}
    >
      <span>{number}</span>
      <p>{label}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <Reveal>
          <img
            className={styles.portrait}
            src={portraitImage}
            alt="Et afslappet portræt af Mille"
          />
        </Reveal>

        <Reveal className={styles.introCopy}>
          <p className={styles.eyebrow}>Hej, jeg er Mille</p>

          <h2>Detaljer, gåpåmod og masser af nysgerrighed.</h2>

          <p>
            Jeg er en detaljeorienteret arbejdshest med kærlighed til udvikling,
            medmenneskelighed og surdejsbagning. Jeg holder af at gå grundigt
            til værks, tage ansvar og give den en ekstra skalle, når det
            bidrager til det større billede.
          </p>

          <p>
            Som person er jeg pålidelig, entusiastisk og nysgerrig. Jeg møder
            nye opgaver med et smil, masser af gåpåmod og en oprigtig lyst til
            at finde den gode løsning – også når vejen derhen kræver, at jeg
            lærer noget helt nyt.
          </p>

          <div className={styles.facts}>
            <div>
              <span>Holder til i</span>
              <strong>Aarhus, Danmark</strong>
            </div>

            <div>
              <span>Arbejder med</span>
              <strong>Figma · React · VS Code · AI</strong>
            </div>

            <div>
              <span>Drives af</span>
              <strong>Nysgerrighed og udvikling</strong>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className={styles.journey}>
          <div className={styles.journeyNumber} aria-hidden="true">
            02
          </div>

          <div className={styles.journeyCopy}>
            <p className={styles.eyebrow}>Jeg begyndte helt fra bunden</p>

            <h2>Jeg sprang direkte ud på dybt vand.</h2>

            <p>
              Da jeg startede på multimediedesigneruddannelsen, havde jeg aldrig
              kodet eller arbejdet med design før. Jeg sprang direkte ud på dybt
              vand og begyndte at lære det hele fra bunden.
            </p>

            <p>
              Det har lært mig, at jeg trives bedst, når jeg bliver udfordret.
              Jeg kan godt lide den del af processen, hvor jeg endnu ikke har
              alle svarene, men må undersøge, eksperimentere og arbejde mig frem
              til dem. For mig er intet program eller værktøj for svært at lære,
              hvis jeg får lov til at være nysgerrig og bruge tid på at forstå
              det.
            </p>

            <p>
              I dag arbejder jeg særligt med Figma, React og Visual Studio Code.
              Jeg interesserer mig for hele processen fra den første idé og det
              visuelle koncept til en løsning, der fungerer i praksis.
            </p>
          </div>

          <img
            className={styles.workImage}
            src={projectImage}
            alt="Mig i gang med et projekt"
          />
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.lookingFor}>
          <p className={styles.eyebrow}>Det leder jeg efter</p>

          <div className={styles.lookingGrid}>
            <h2>
              Et sted med plads til at prøve,
              <br />
              lære og bidrage.
            </h2>

            <div>
              <p>
                Jeg søger muligheder inden for frontendudvikling, webudvikling
                og konceptudvikling – eller den spændende opgave, jeg endnu ikke
                ved, at jeg bliver vild med.
              </p>

              <p>
                Det vigtigste for mig er at finde et sted, hvor jeg kan udvikle
                mig fagligt, bidrage til fællesskabet og få albuerum til at
                prøve idéer af. Jeg er sulten efter erfaring, ansvar og nye
                udfordringer og vil gerne være en del af et miljø, hvor man
                lærer af både processen og hinanden.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <section className={styles.life}>
        <Reveal className={styles.lifeHeading}>
          <p className={styles.eyebrow}>Livet uden for skærmen</p>

          <h2>Jeg elsker at nørde ting.</h2>

          <p>
            Det kan være alt fra kaffe, keramik og øl til surdej,
            gør-det-selv-projekter og renovering. Jeg bliver hurtigt optaget af
            materialer, metoder og små detaljer og holder af at forstå, hvordan
            noget er skruet sammen.
          </p>

          <p>
            Den nysgerrighed følger mig også i mit arbejde: Jeg vil gerne helt
            tæt på problemet, afprøve mulighederne og skabe noget, der både er
            gennemtænkt og har personlighed.
          </p>
        </Reveal>

        <div className={styles.lifeGallery}>
          <Reveal className={styles.galleryTall}>
            <img src={crochetImage} alt="mig, der har hæklet en taske" />
          </Reveal>

          <Reveal className={styles.galleryWide}>
            <video
              className={styles.yellowPlaceholder}
              src={grassVideo}
              controls
              width="100%"
              loop
            ></video>
          </Reveal>

          <Reveal>
            <img src={lampImage} alt="DIY PHlampe malet i orange" />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className={styles.videoSection}>
          <div className={styles.videoCopy}>
            <p className={styles.eyebrow}>Lær mig bedre at kende</p>

            <h2>Min vej ind i den digitale verden.</h2>

            <p>
              I videoen fortæller jeg mere om mine styrker og de områder, jeg
              stadig arbejder på. Jeg fortæller også om min vej ind i den
              digitale verden, hvad der motiverer mig, og hvad jeg kan bidrage
              med i et team.
            </p>
          </div>

          <div className={styles.videoWrapper}>
            <video
              className={styles.interviewVideo}
              src={interviewVideo}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.contactCta}>
          <p>Har du en opgave, en idé eller bare lyst til en kop kaffe?</p>
          <Link to="/contact">Lad os tage en snak →</Link>
        </section>
      </Reveal>
    </div>
  );
}
