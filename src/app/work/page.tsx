import styles from "./work.module.css";
import { RiCodeLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";

export default function Work() {
  const projects = [
    {
      title: "Portfolio",
      liveDemo: "https://nextjs-portfolio-areeba-fatimas-projects.vercel.app/",
      github: "https://github.com/AREEBA-FATIMA/nextjs-portfolio",
      image: "/images/work-1.png"
    },
    {
      title: "Credify Project",
      liveDemo: "https://credify-project.vercel.app/",
      github: "https://github.com/AREEBA-FATIMA/Credify",
      image: "/images/work-2.png"
    },
    {
      title: "CoachIQ Project",
      liveDemo: "https://areeba-fatima.github.io/Coach-IQ/",
      github: "https://github.com/AREEBA-FATIMA/Coach-IQ",
      image: "/images/work-3.png"
    },
    {
      title: "Personal Portfolio",
      liveDemo: "https://areeba-fatima.github.io/Personal-Portfolio/",
      github: "https://github.com/AREEBA-FATIMA/Personal-Portfolio",
      image: "/images/work-4.png"
    },
    {
      title: "Groco Project",
      liveDemo: "https://areeba-fatima.github.io/grocery-shop/",
      github: "https://github.com/AREEBA-FATIMA/grocery-shop",
      image: "/images/work-5.png"
    },
    {
      title: "Inwood Project",
      liveDemo: "https://inwood-project.vercel.app/",
      github: "https://github.com/AREEBA-FATIMA/inwood-project",
      image: "/images/work-6.png"
    }
  ];

  return (
    <div className={styles.workPage}>
      <div className="caption">my work</div>
      <h1 className="heading">RECENT WORK</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} />
            <div className={styles.overlayText}>
              <div>
                <p>{project.title}</p>
                <p className={styles.smallText}>Website</p>
              </div>
              <div className={styles.overlayIcons}>
                <a
                  href={project.github}
                  title="View Code"
                  aria-label={`View code for ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiCodeLine />
                  <span>View Code</span>
                </a>
                <a
                  href={project.liveDemo}
                  title="Live Demo"
                  aria-label={`View live demo for ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineEye />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
