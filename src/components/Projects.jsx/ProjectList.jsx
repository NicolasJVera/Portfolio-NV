import ProjectCard from './ProjectCard';

const ProjectList = () => {
  const project = [
    {
      id: 1,
      title: 'Black Star - Alternative Anime Clothing',
      description: 'Este proyecto fue de lo mas divertido de hacer por lo que me se hizo muy hacerlo. Es una tienda de ropa alternativa y de anime. Este proyecto Lo creé utilizando HTML, CSS y JS.',
      image: '/proyecto-1.webp',
      githubLink: 'https://github.com/NicolasJVera/Integrador-JS-Nucba',
      projectLink: 'https://integrador-js-nucba-pi.vercel.app'
    },
    {
      id: 2,
      title: 'Contador de Calorias',
      description: 'Este segundo proyecto es un contador de calorias el cual te deja ver el registro de tus comidas quemadas y consumidas, tambien ver la diferencia si consumiste mas o menos Kcal. Este proyecto Lo creé utilizando React con useReducer, TS y TailwindCSS.',
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
    <div className="flex flex-wrap justify-center gap-8">
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