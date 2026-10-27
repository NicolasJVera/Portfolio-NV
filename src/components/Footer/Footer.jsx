import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerCopyright}>&copy; {new Date().getFullYear()} Nicolas Vera. Todos los derechos reservados.</p>
        
        <div className={styles.footerLinks}>
          <a 
            href="https://www.linkedin.com/in/nicolas-vera-javier" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.footerLink} ${styles.footerLink.linkedin}`}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/NicolasJVera" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.footerLink} ${styles.footerLink.github}`}
          >
            <FaGithub />
          </a>
          <a 
            href="https://wa.me/541165473420" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.footerLink} ${styles.footerLink.whatsapp}`}
          >
            <FaWhatsapp />
          </a>
          <a 
            href="mailto:nico03veraa@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.footerLink} ${styles.footerLink.email}`}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;