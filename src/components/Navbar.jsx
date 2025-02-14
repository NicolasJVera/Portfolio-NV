import { Link } from "react-scroll";
import { BsDiagram3 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("inicio");

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 p-4 rounded-lg shadow-lg z-50">
      <ul className="flex flex-col space-y-6 text-white">
        {/* Inicio */}
        <li className="group relative flex justify-center items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            className={`cursor-pointer transition-transform duration-300 group-hover:scale-110 ${
              active === "inicio" ? "text-blue-500 scale-110" : ""
            }`}
            onClick={() => setActive("inicio")}
          >
            <IoHomeOutline className="text-3xl" />
          </Link>
          <span className="absolute left-12 bg-gray-800 text-white text-2xl px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Inicio
          </span>
        </li>

        {/* Proyectos */}
        <li className="group relative flex justify-center items-center">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className={`cursor-pointer transition-transform duration-300 group-hover:scale-110 ${
              active === "proyectos" ? "text-blue-500 scale-110" : ""
            }`}
            onClick={() => setActive("proyectos")}
          >
            <FaLaptopCode className="text-3xl" />
          </Link>
          <span className="absolute left-12 bg-gray-800 text-white text-2xl px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Proyectos
          </span>
        </li>

        {/* Habilidades */}
        <li className="group relative flex justify-center items-center">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
            className={`cursor-pointer transition-transform duration-300 group-hover:scale-110 ${
              active === "habilidades" ? "text-blue-500 scale-110" : ""
            }`}
            onClick={() => setActive("habilidades")}
          >
            <BsDiagram3 className="text-3xl" />
          </Link>
          <span className="absolute left-12 bg-gray-800 text-white text-2xl px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Habilidades
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;