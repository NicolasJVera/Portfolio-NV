import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript, SiAstro, SiMysql } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";

// Array de habilidades
const SkillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-6xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-6xl text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-6xl text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-6xl text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-6xl text-indigo-500" /> },
  { name: "React", icon: <FaReact className="text-6xl text-blue-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-6xl text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-6xl text-blue-500" /> },
  { name: "Astro", icon: <SiAstro className="text-6xl" /> },
  { name: "GitHub", icon: <IoLogoGithub className="text-6xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-6xl text-orange-800" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-6xl text-green-500" /> },
];

export default SkillsData;
