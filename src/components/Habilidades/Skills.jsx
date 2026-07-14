import { motion } from "framer-motion";
import SkillCard from './SkillCard';
import SkillsData from './SkillsData';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.skillsTitle}
        >
          Mis Habilidades
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.skillsDescription}
        >
          Aquí están las tecnologías y herramientas con las que tengo experiencia y me siento cómodo trabajando.
          A lo largo de los años he perfeccionado estas habilidades, y siempre busco mejorar.
        </motion.p>

        {/* Renderización de Skills con map */}
        <div className={styles.skillsGrid}>
          {SkillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard icon={skill.icon} name={skill.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
