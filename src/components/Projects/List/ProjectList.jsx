import ProjectCard from "../Cards/ProjectCard";
import { motion } from "framer-motion";
import styles from './ProjectList.module.css';

const ProjectList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const project = [
    {
      id: 1,
      title: "Black Star - Alternative Anime Clothing",
      description:
        "Este proyecto Lo creé utilizando React, Redux Toolkit, React Router y styled-components. Fue un proyecto integrador que me permitio aplicar todo lo aprendido en el curso de React.",
      image: "/proyecto-1.webp",
      githubLink: 'https://github.com/NicolasJVera/Proyecto-Integrador-React-JS',
      projectLink: "https://proyecto-integrador-react-js-gamma.vercel.app/",
      technologies: ["React", "Redux Toolkit", "React Router", "styled-components"],
      date: "2024",
      category: "E-commerce",
      client: "Proyecto Personal",
    },
    // {
    //   id: 2,
    //   title: 'Contador de Calorias',
    //   description: 'Este proyecto es un contador de calorias el cual te deja ver el registro de tus comidas quemadas y consumidas, tambien ver la diferencia si consumiste mas o menos Kcal. Este proyecto Lo creé utilizando React con useReducer, TypeScript y TailwindCSS.',
    //   image: '/proyecto-2.webp',
    //   // githubLink: 'https://github.com/NicolasJVera/Calorie-Tracker',
    //   projectLink: 'https://calorie-tracker-tan-eta.vercel.app'
    // },
    // {
    //   id: 3,
    //   title: 'Calculadora de Propinas y Consumo',
    //   description: 'Un proyecto interesante sobre una calculadora de propinas la cual podes agregar items y luego dejar un porcentaje de propina. Este proyecto tambien lo creé utilizando React con useReducer, TS y TailwindCSS..',
    //   image: '/proyecto-3.webp',
    //   // githubLink: 'https://github.com/NicolasJVera/Calculadora-de-propinas',
    //   projectLink: 'https://calculadora-de-propinas-omega.vercel.app'
    // },
    {
      id: 4,
      title: "CodeSign - Diseño Web, Desarrollo Digital",
      description: "Sitio web para una agencia de diseño y desarrollo digital. El sitio cuenta con un diseño moderno y responsive, con un sistema de gestión de contenido (CMS) para facilitar la actualización de proyectos y servicios.",
      image: "/codesign.png",
      projectLink: "https://codesignarg.com",
      technologies: ["React", "Vite", "CSS Modules"],
      date: "2026",
      category: "Portfolio",
      client: "CodeSign",
    },
    {
      id: 5,
      title: "Cin Acosta Make Up & Hair",
      description: "Sitio web profesional para maquilladora especializada en novias con más de 12 años de experiencia. Diseño elegante y moderno para destacar servicios de maquillaje bridal y looks especiales.",
      image: "/proyecto-5.webp",
      projectLink: "https://www.cinacostamakeup.com/",
      technologies: ["React", "Vite", "CSS Modules"],
      date: "2026",
      category: "Landing Page",
      client: "Cintia Acosta",
    },
    {
      id: 6,
      title: "Recuerdos de NiLu",
      description: "Página web personal creada para celebrar un aniversario de 3 años con mi pareja. Diseño íntimo y moderno para compartir y preservar recuerdos significativos de nuestra historia juntos.",
      image: "/proyecto-6.webp",
      projectLink: "https://recuerdos-de-nilu-peach.vercel.app/",
      technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Lucide React", "Vite"],
      date: "2026",
      category: "Landing Page",
      client: "Personal",
    },
  ];

  return (
    <motion.div
      className={styles.projectList}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {project.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
            technologies={project.technologies}
            date={project.date}
            category={project.category}
            client={project.client}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
