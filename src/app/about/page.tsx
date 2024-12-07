import React from "react";
import { FiCode, FiSmartphone, FiEdit } from 'react-icons/fi'; // Feather Icons
import { MdBrush } from 'react-icons/md'; // Material Design Icons
import styles from './about.module.css';  // Import your CSS Module

const AboutPage = () => {
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
                Hi, I&apos;m Areeba Fatima. I am an ardent web developer fueled by an unwavering passion for crafting transformative digital experiences. My journey is one of innovation, precision, and creativity, where every line of code unites functionality with artistry. With a sharp eye for detail and a dedication to excellence, I specialize in building dynamic, scalable, and visually captivating web solutions.
              </p>
              <p className="text">
                Driven by curiosity and a commitment to perfection, I thrive on solving complex challenges and delivering user-centric designs. Let&apos;s collaborate to transform ideas into remarkable realities and leave a lasting impact in the digital space.
              </p>
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
