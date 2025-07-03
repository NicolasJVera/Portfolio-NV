import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const project = [
    {
      id: 1,
      title: 'Black Star - Alternative Anime Clothing',
      description: 'Este proyecto Lo creé utilizando React, Redux Toolkit, React Router y styled-components. Fue un proyecto integrador que me permitio aplicar todo lo aprendido en el curso de React.',
      image: '/proyecto-1.webp',
      githubLink: 'https://github.com/NicolasJVera/Proyecto-Integrador-React-JS',
      projectLink: 'https://proyecto-integrador-react-js-gamma.vercel.app/'
    },
    {
      id: 2,
      title: 'Contador de Calorias',
      description: 'Este proyecto es un contador de calorias el cual te deja ver el registro de tus comidas quemadas y consumidas, tambien ver la diferencia si consumiste mas o menos Kcal. Este proyecto Lo creé utilizando React con useReducer, TypeScript y TailwindCSS.',
      image: '/proyecto-2.webp',
      githubLink: 'https://github.com/NicolasJVera/Calorie-Tracker',
      projectLink: 'https://calorie-tracker-tan-eta.vercel.app'
    },
    {
      id: 3,
      title: 'Calculadora de Propinas y Consumo',
      description: 'Un proyecto interesante sobre una calculadora de propinas la cual podes agregar items y luego dejar un porcentaje de propina. Este proyecto tambien lo creé utilizando React con useReducer, TS y TailwindCSS..',
      image: '/proyecto-3.webp',
      githubLink: 'https://github.com/NicolasJVera/Calculadora-de-propinas',
      projectLink: 'https://calculadora-de-propinas-omega.vercel.app'
    },
    // {
    //   id: 4,
    //   title: 'Proyecto 4',
    //   description: 'Un proyecto interesante sobre.',
    //   image: '#',
    //   githubLink: '#',
    //   projectLink: '#'
    // },
  ];

  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-3xl mx-auto">
      {project.map(project => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          githubLink={project.githubLink}
          projectLink={project.projectLink}
        />
      ))}
    </div>
  );
};

export default ProjectList;