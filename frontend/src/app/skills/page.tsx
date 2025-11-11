"use client";
import React, { useEffect, useState } from "react";
import styles from "./skills.module.css";
import { getSkills, type Skill } from "@/lib/api";

const SkillsPage = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    getSkills().then((data) => {
      if (data.length > 0) {
        setSkills(data);
      }
    });
  }, []);

  // Fallback skills if API fails
  const fallbackSkills = [
    { id: 1, name: "HTML", percentage: 100, percentage_display: "100%", color_class: "green", order: 0 },
    { id: 2, name: "CSS", percentage: 100, percentage_display: "100%", color_class: "blue", order: 1 },
    { id: 3, name: "JavaScript", percentage: 70, percentage_display: "70%", color_class: "yellow", order: 2 },
    { id: 4, name: "TypeScript", percentage: 80, percentage_display: "80%", color_class: "purple", order: 3 },
    { id: 5, name: "Tailwind CSS", percentage: 90, percentage_display: "90%", color_class: "navy", order: 4 },
    { id: 6, name: "Next.js", percentage: 85, percentage_display: "85%", color_class: "red", order: 5 },
  ];

  const displaySkills = skills.length > 0 ? skills : fallbackSkills as Skill[];

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
