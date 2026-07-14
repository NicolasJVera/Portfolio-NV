import { motion } from "framer-motion";
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.aboutTitle}>Sobre Mí</h2>
          
          <div className={styles.aboutContent}>
            <p>
              Soy un desarrollador Front-End apasionado por crear experiencias web modernas y funcionales. 
              Mi enfoque se centra en escribir código limpio, mantenible y eficiente, siempre buscando 
              las mejores prácticas y las últimas tecnologías.
            </p>
            
            <p>
              Mi objetivo es crear interfaces que no solo sean visualmente atractivas, sino también 
              accesibles y optimizadas para ofrecer la mejor experiencia de usuario posible.
            </p>
          </div>

          <div className={styles.aboutStats}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.statCard}
            >
              <h3 className={styles.statNumber}>+10</h3>
              <p className={styles.statLabel}>Proyectos Completados</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.statCard}
            >
              <h3 className={styles.statNumber}>+2</h3>
              <p className={styles.statLabel}>Años de Experiencia</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.statCard}
            >
              <h3 className={styles.statNumber}>100%</h3>
              <p className={styles.statLabel}>Dedicación</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
