import { motion } from "framer-motion";
import { AcademicCapIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import styles from './Education.module.css';

const Education = () => {
  const education = [
    {
      institution: "Coderhouse",
      degree: "Desarrollo Web",
      period: "2022 - 2023",
      location: "Online",
      description: "Programa intensivo de desarrollo web cubriendo HTML, CSS, Bootstrap y JavaScript."
    },
    {
      institution: "Argentina Programa",
      degree: "Programador Web Full Stack",
      period: "2023 - 2024",
      location: "Online",
      description: "Programa oficial de formación gratuita dividido en dos etapas: #SéProgramar (fundamentos de lógica de programación, algoritmos y estructuras de código) y #YoProgramo (desarrollo web Full Stack con HTML, CSS, JavaScript, Angular, Ruby, Java (Spring Boot) y DevOps)."
    },
    {
      institution: "Nucba",
      degree: "Programación Full Stack",
      period: "16/04/2024 - 29/06/2025",
      location: "Online",
      description: "Curso completo de desarrollo Full Stack donde aprendi desde Diseño web, JavaScript, React, Backend con TypeScript y Node.js, Base de datos SQL y NoSQL y más."
    },
    {
      institution: "Udemy",
      degree: "React y TypeScript - La Guía Completa Creando +10 Proyectos",
      period: "2026 - Presente",
      location: "Online",
      description: "Curso completo de desarrollo Full Stack cubriendo Hooks y State hasta TypeScript, Zod, Zustand, React Query, Next.js IA React Router MERN y PERN. Creación de más de 10 aplicaciones prácticas."
    },
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="education" className={styles.education}>
      <motion.div
        className={styles.educationContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className={styles.educationTitle}
          variants={itemVariants}
        >
          Educación
        </motion.h2>

        <motion.div
          className={styles.educationGrid}
          variants={containerVariants}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={styles.educationCard}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.educationIcon}>
                <AcademicCapIcon className={styles.icon} />
              </div>

              <div className={styles.educationContent}>
                <h3 className={styles.educationInstitution}>{edu.institution}</h3>
                <h4 className={styles.educationDegree}>{edu.degree}</h4>

                <div className={styles.educationMeta}>
                  <div className={styles.metaItem}>
                    <CalendarIcon className={styles.metaIcon} />
                    <span>{edu.period}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPinIcon className={styles.metaIcon} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className={styles.educationDescription}>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
