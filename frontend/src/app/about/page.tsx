"use client";
import React, { useEffect, useState } from "react";
import { FiCode, FiSmartphone, FiEdit } from 'react-icons/fi'; // Feather Icons
import { MdBrush } from 'react-icons/md'; // Material Design Icons
import styles from './about.module.css';  // Import your CSS Module
import { getProfile, type Profile } from "@/lib/api";

const AboutPage = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    getProfile().then((data) => {
      if (data) {
        setProfile(data);
      }
    });
  }, []);

  return (
    <section id="about" className={styles['about-section']}>
      <div className="about">
        <div className="caption">About us</div>
        <div className="heading">
          <h2>Who Am I?</h2>
        </div>
        <div className={styles['about-content']}>
          <div className={styles['profile-info']}>
            <div className={styles['profile-text']}>
              <p className="text">
                {profile?.about_text_1 || "Hi, I’m Areeba Fatima, a passionate Full Stack & AI-Driven Web Developer focused on building intelligent, scalable, and user-centered solutions. I specialize in Django REST Framework (Python) and Next.js/React.js, combining powerful backends with sleek, high-performance frontends. I’ve crafted modular ERP systems, API-driven architectures, and secure role-based dashboards for real-world enterprise applications."}
              </p>
              {profile?.about_text_2 ? (
                <p className="text">{profile.about_text_2}</p>
              ) : (
                <>
                  <p className="text">
                    Currently, I’m working on a School/ERP Management System (Django + Next.js) with modules for HR, Students, Attendance, Exams, and Analytics—honing strengths in data modeling, API design, and efficient state management. I’m also diving deep into Agentic AI—integrating AI reasoning, planning, and automation using the OpenAI SDK—to build AI-native apps that adapt, assist, and learn.
                  </p>
                  <p className="text">
                    Vision: I aim to merge AI and Web Development to build platforms that think, adapt, and automate intelligently—leading the shift toward AI-native systems that redefine how software interacts with humans and data.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className={styles.services}>
            <div className={`${styles['service-card']} ${styles['blue']}`}>
              <FiCode className={styles.icon} />
              <p>Website</p>
            </div>
            <div className={`${styles['service-card']} ${styles['red']}`}>
              <FiSmartphone className={styles.icon} />
              <p>Application</p>
            </div>
            <div className={`${styles['service-card']} ${styles['yellow']}`}>
              <FiEdit className={styles.icon} />
              <p>UI/UX Design</p>
            </div>
            <div className={`${styles['service-card']} ${styles['purple']}`}>
              <MdBrush className={styles.icon} />
              <p>Web Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
