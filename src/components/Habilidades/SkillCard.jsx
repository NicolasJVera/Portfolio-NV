const SkillCard = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center transition-all transform hover:scale-110 hover:text-indigo-300">
      {icon}
      <h3 className="text-xl mt-2">{name}</h3>
    </div>
  );
};

export default SkillCard;
