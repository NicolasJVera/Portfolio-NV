import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import TypewriterEffect from "../ui/TypewriterEffect";
import styles from './Hero.module.css';
import { useTranslations } from "../../hooks/useTranslations";

const Hero = () => {
  const t = useTranslations();

  return (
    <section id="home" className={styles.hero}>
      {/* Contenido de Presentación */}
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          {t.hero.greeting}{' '}
          <span>
            <TypewriterEffect text={t.hero.role} speed={100} />
            <span>|</span>
          </span>
        </h1>
        <p>
          {t.hero.description}
        </p>

        {/* Botones de Redes */}
        <div className={styles.heroButtons}>
          <a
            href="https://www.linkedin.com/in/nicolas-vera-javier"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.heroButton} ${styles.heroButtonPrimary}`}
          >
            <FaLinkedin style={{ fontSize: '1.5rem' }} />
          </a>
          <a
            href="/NicolasVeraCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            <FaFilePdf style={{ fontSize: '1.5rem' }} />
            <span>{t.hero.downloadCV}</span>
          </a>
          <a
            href="https://github.com/NicolasJVera"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            <FaGithub style={{ fontSize: '1.5rem' }} />
          </a>
          <a href="mailto:nico03veraa@gmail.com" className={styles.heroButton}>
            <FaEnvelope style={{ fontSize: '1.5rem' }} />
          </a>
          <a href="https://wa.me/541165473420" target="_blank" rel="noopener noreferrer" className={styles.heroButton}>
            <FaWhatsapp style={{ fontSize: '1.5rem' }} />
          </a>
        </div>
      </motion.div>

      {/* Imagen de Presentación */}
      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/Logo.jpg"
          alt="Nicolas Vera - Developer"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
