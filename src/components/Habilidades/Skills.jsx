import { motion } from "framer-motion";
import {
  CpuChipIcon,
  ServerIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  DevicePhoneMobileIcon
} from "@heroicons/react/24/outline";
import styles from './Skills.module.css';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Frontend",
      icon: <DevicePhoneMobileIcon className={styles.categoryIconSvg} />,
      description: "Desarrollo de interfaces de usuario modernas y responsivas con foco en experiencia de usuario y rendimiento.",
      technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: <ServerIcon className={styles.categoryIconSvg} />,
      description: "Desarrollo de APIs RESTful, arquitectura de servidores y lógica de negocio del lado del servidor.",
      technologies: ["Node.js", "Express", "API REST", "Autenticación JWT", "Middleware"]
    },
    {
      title: "Base de Datos",
      icon: <CircleStackIcon className={styles.categoryIconSvg} />,
      description: "Diseño y gestión de bases de datos relacionales y no relacionales para almacenamiento eficiente de datos.",
      technologies: ["PostgreSQL", "MongoDB", "SQL", "Mongoose", "Sequelize"]
    },
    {
      title: "Herramientas",
      icon: <WrenchScrewdriverIcon className={styles.categoryIconSvg} />,
      description: "Herramientas de desarrollo, control de versiones y despliegue para workflows eficientes.",
      technologies: ["Git", "GitHub", "Vite", "NPM", "VS Code", "Postman"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

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
          Habilidades
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.skillsDescription}
        >
          Stack tecnológico completo para el desarrollo de aplicaciones web modernas
        </motion.p>

        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              className={styles.skillCategory}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  {category.icon}
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              <p className={styles.categoryDescription}>{category.description}</p>

              <div className={styles.technologiesList}>
                {category.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.technologyTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
