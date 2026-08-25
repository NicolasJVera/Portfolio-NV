import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, image, githubLink, projectLink, technologies, date, category, client }) => (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={styles.projectCardImage}
          loading="lazy"
        />
        <div className={styles.projectCardOverlay}>
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.projectCardLink} ${styles.projectCardLinkSecondary}`}
            >
              GitHub
            </a>
          )}
          <a 
            href={projectLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.projectCardLink} ${styles.projectCardLinkPrimary}`}
          >
            Ver Proyecto
          </a>
        </div>
      </div>
      <div className={styles.projectCardContent}>
        <h3 className={styles.projectCardTitle}>{title}</h3>
        <p className={styles.projectCardDescription}>{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className={styles.projectCardTechnologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        )}
        
        <div className={styles.projectCardMeta}>
          {date && <span className={styles.metaItem}>📅 {date}</span>}
          {category && <span className={styles.metaItem}>📁 {category}</span>}
          {client && <span className={styles.metaItem}>👤 {client}</span>}
        </div>
      </div>
    </div>
  );
  
  export default ProjectCard;