import styles from './SkillCard.module.css';

const SkillCard = ({ icon, name }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillIcon}>{icon}</div>
      <h3 className={styles.skillName}>{name}</h3>
    </div>
  );
};

export default SkillCard;
