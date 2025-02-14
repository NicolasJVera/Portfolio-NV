import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Nicolas Vera. Todos los derechos reservados.</p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/nicolas-vera-javier" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/NicolasJVera" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;