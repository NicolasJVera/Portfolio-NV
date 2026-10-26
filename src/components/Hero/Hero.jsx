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
            <TypewriterEffect text="Full Stack Developer" speed={100} />
            <span>|</span>
          </span>
        </h1>
        <p>
          Desarrollador Full Stack apasionado por crear experiencias web modernas y funcionales. Me especializo en React, TypeScript y tecnologías frontend de vanguardia. Siempre en constante aprendizaje, transformando ideas en código limpio y eficiente.
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
