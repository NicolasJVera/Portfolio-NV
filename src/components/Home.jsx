import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import TypewriterEffect from "./ui/TypewriterEffect";

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
      {/* Contenido de Presentación */}
      <motion.div
        className="text-center lg:text-left max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          ¡Hola, Soy{" Nicolas Vera "}
          <span className="text-indigo-400">
            <TypewriterEffect text="Front-End Developer" speed={100} />
            <span className="text-indigo-400">|</span> 
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Apasionado por el desarrollo web y la creación de interfaces modernas y funcionales. Siempre en busca de mejorar mis habilidades y aprender nuevas tecnologías.
        </p>

        {/* Botones de Redes */}
        <div className="flex justify-center lg:justify-start space-x-6">
          <a
            href="https://www.linkedin.com/in/nicolas-vera-javier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-full hover:bg-indigo-600 transition duration-300"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:nico03veraa@gmail.com"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300"
          >
            <FaEnvelope className="text-2xl" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/NicolasJVera"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-500 rounded-full hover:bg-gray-600 transition duration-300"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>

      {/* Imagen de Presentación */}
      <motion.div
        className="hidden lg:block ml-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/Logo.jpg"
          alt="Developer"
          className="w-72 h-72 object-cover rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Home;
