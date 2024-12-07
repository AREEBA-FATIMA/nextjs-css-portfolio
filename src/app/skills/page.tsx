import React from "react";
import styles from "./skills.module.css";

const SkillsPage = () => {
  const skills = [
    { name: "HTML", percentage: "100%", color: "green" },
    { name: "CSS", percentage: "100%", color: "blue" },
    { name: "JavaScript", percentage: "70%", color: "yellow" },
    { name: "TypeScript", percentage: "80%", color: "purple" },
    { name: "Tailwind CSS", percentage: "90%", color: "navy" },
    { name: "Next.js", percentage: "85%", color: "red" },
  ];

  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <p className="caption">My speciality</p>
        <h2 className="heading">My Skills</h2>
        <p className="text">
          I am a web developer specializing in both frontend and backend development, with a focus on SEO optimization, UI/UX design, and building responsive, efficient websites. I combine expertise in modern technologies like CSS, JavaScript, and Next.js to deliver functional and visually appealing solutions. My passion for learning keeps me updated on the latest tools, ensuring seamless user experiences tailored to client needs.
        </p>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div className={styles.skill} key={index}>
              <span>{skill.name}</span>
              <div className={styles.progressBar}>
                <div
                  className={`${styles.progress} ${styles[skill.color]}`}
                  style={{ width: skill.percentage }}
                >
                  <span>{skill.percentage}</span>
                  <div className={styles.circle}>
                    <span>{skill.percentage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
