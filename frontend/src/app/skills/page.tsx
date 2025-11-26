"use client";
import React, { useEffect, useState } from "react";
import styles from "./skills.module.css";
import { getSkills, type Skill } from "@/lib/api";

const SkillsPage = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    // API function already includes fallback data
    getSkills().then((data) => {
      setSkills(data);
    });
  }, []);

  const displaySkills = skills.length > 0 ? skills : [];

  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <p className="caption">My speciality</p>
        <h2 className="heading">My Skills</h2>
        <p className="text">
          I am a web developer specializing in both frontend and backend development, with a focus on SEO optimization, UI/UX design, and building responsive, efficient websites. I combine expertise in modern technologies like CSS, JavaScript, and Next.js to deliver functional and visually appealing solutions. My passion for learning keeps me updated on the latest tools, ensuring seamless user experiences tailored to client needs.
        </p>

        <div className={styles.skillsGrid}>
          {displaySkills.map((skill) => (
            <div className={styles.skill} key={skill.id}>
              <span>{skill.name}</span>
              <div className={styles.progressBar}>
                <div
                  className={`${styles.progress} ${styles[skill.color_class]}`}
                  style={{ width: skill.percentage_display }}
                >
                  <span>{skill.percentage_display}</span>
                  <div className={styles.circle}>
                    <span>{skill.percentage_display}</span>
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
