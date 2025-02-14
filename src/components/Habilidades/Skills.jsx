import SkillCard from './SkillCard';
import SkillsData from './SkillsData';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Mis Habilidades</h2>
        
        <p className="text-center text-xl mb-16">
          Aquí están las tecnologías y herramientas con las que tengo experiencia y me siento cómodo trabajando.
          A lo largo de los años he perfeccionado estas habilidades, y siempre busco mejorar.
        </p>

        {/* Renderización de Skills con map */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {SkillsData.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
