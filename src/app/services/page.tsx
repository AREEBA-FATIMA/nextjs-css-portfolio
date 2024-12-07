import styles from './service.module.css';
import { FaLightbulb, FaDatabase, FaMobileAlt, FaSearch, FaCode, FaDesktop } from 'react-icons/fa';

const Services = () => {
  return (
    <div className={styles.serviceContainer}>
      <p className="caption">What can I do?</p>
      <h1 className="heading">Here Are Some of My Expertise</h1>
      <div className={styles.grid}>
        {/* Innovative Ideas */}
        <div className={`${styles.card} ${styles.bdblue}`}>
          <div className={`${styles.iconContainer} ${styles.blue}`}>
            <FaLightbulb className={styles.icon} />
          </div>
          <h2 className={styles.textTitle}>Innovative Ideas</h2>
          <p className={styles.textDescription}>
            Unique solutions tailored to bring your vision to reality with creative strategies.
          </p>
        </div>

        {/* Application Development */}
        <div className={`${styles.card} ${styles.bdred}`}>
          <div className={`${styles.iconContainer} ${styles.red}`}>
            <FaMobileAlt className={styles.icon} />
          </div>
          <h2 className={styles.textTitle}>Application Development</h2>
          <p className={styles.textDescription}>
            We craft intuitive mobile apps that provide seamless user experiences.
          </p>
        </div>

        {/* SEO Optimization */}
        <div className={`${styles.card} ${styles.bdyellow}`}>
          <div className={`${styles.iconContainer} ${styles.yellow}`}>
            <FaSearch className={styles.icon} />
          </div>
          <h2 className={styles.textTitle}>SEO Optimization</h2>
          <p className={styles.textDescription}>
            Improve your website's ranking and online presence with proven SEO practices.
          </p>
        </div>

        {/* Pixel-perfect Design */}
        <div className={`${styles.card} ${styles.bdpurple}`}>
          <div className={`${styles.iconContainer} ${styles.purple}`}>
            <FaDesktop className={styles.icon} />
          </div>
          <h2 className={styles.textTitle}>Pixel-perfect Design</h2>
          <p className={styles.textDescription}>
            Delivering polished designs with attention to every detail.
          </p>
        </div>

        {/* Frontend Development */}
        <div className={`${styles.card} ${styles.bdgreen}`}>
          <div className={`${styles.iconContainer} ${styles.green}`}>
            <FaCode className={styles.icon} />
          </div>
          <h2 className={styles.textTitle}>Frontend Development</h2>
          <p className={styles.textDescription}>
            Building responsive and engaging user interfaces with modern technologies.
          </p>
        </div>

        {/* Backend Development */}
        <div className={`${styles.card} ${styles.bdnavy}`}>
          <div className={`${styles.iconContainer} ${styles.navy}`}>
            <FaDatabase className={styles.icon} />
          </div>
          <h2 className={styles.textTitle}>Backend Development</h2>
          <p className={styles.textDescription}>
            Reliable and secure backend systems to power your web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
