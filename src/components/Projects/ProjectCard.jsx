const ProjectCard = ({ title, description, image, githubLink, projectLink }) => (
    <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform flex flex-row gap-6">
      <div className="relative flex-shrink-0 w-1/3">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-lg transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity flex items-center justify-center space-x-4">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white bg-gray-700 p-2 rounded hover:bg-gray-600 transition-all"
          >
            GitHub
          </a>
          <a 
            href={projectLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white bg-blue-600 p-2 rounded hover:bg-blue-500 transition-all"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-lg mt-2">{description}</p>
      </div>
    </div>
  );
  
  export default ProjectCard;