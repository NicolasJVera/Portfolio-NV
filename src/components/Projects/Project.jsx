import { motion } from "framer-motion";
import ProjectList from "./ProjectList";
import styles from './Project.module.css';

export default function Project() {
  return (
    <>
    <section id="projects" className={styles.projects}>
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.projectsTitle}
      >
        Proyectos
      </motion.h2>
      <ProjectList />
    </section>
    </>
  )
}
