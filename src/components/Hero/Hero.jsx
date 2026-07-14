import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import TypewriterEffect from "../ui/TypewriterEffect";
import styles from './Hero.module.css';

const Hero = () => {
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
          ¡Hola, Soy Nicolas Vera{' '}
          <span>
            <TypewriterEffect text="Front-End Developer" speed={100} />
            <span>|</span> 
          </span>
        </h1>
        <p>
          Apasionado por el desarrollo web y la creación de interfaces modernas y funcionales. Siempre en busca de mejorar mis habilidades y aprender nuevas tecnologías.
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
            <span>LinkedIn</span>
          </a>
          <a
            href="/NicolasVeraCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
          >
            <FaFilePdf style={{ fontSize: '1.5rem' }} />
            <span>Descargar CV</span>
          </a>
          <a
            href="https://github.com/NicolasJVera"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
          >
            <FaGithub style={{ fontSize: '1.5rem' }} />
            <span>GitHub</span>
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
