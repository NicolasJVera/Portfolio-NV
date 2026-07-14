import { Link, scroller } from "react-scroll";
import { BsDiagram3 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [active, setActive] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "inicio", name: "Inicio", icon: <IoHomeOutline style={{ fontSize: '1.5rem' }} />, to: "home" },
    { id: "sobre-mi", name: "Sobre Mí", icon: <FaUser style={{ fontSize: '1.5rem' }} />, to: "about" },
    { id: "proyectos", name: "Proyectos", icon: <FaLaptopCode style={{ fontSize: '1.5rem' }} />, to: "projects" },
    { id: "habilidades", name: "Habilidades", icon: <BsDiagram3 style={{ fontSize: '1.5rem' }} />, to: "skills" },
    { id: "contacto", name: "Contacto", icon: <FaEnvelope style={{ fontSize: '1.5rem' }} />, to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section.to);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleNavClick = (sectionId, to) => {
    setActive(sectionId);
    setIsMobileMenuOpen(false);
    scroller.scrollTo(to, {
      duration: 500,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          {sections.map((section) => (
            <li key={section.id} className={styles.navbarItem}>
              <button
                onClick={() => handleNavClick(section.id, section.to)}
                className={`${styles.navbarButton} ${active === section.id ? styles.navbarButtonActive : ''}`}
              >
                {section.icon}
              </button>
              <span className={styles.navbarTooltip}>
                {section.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={styles.mobileMenuButton}
      >
        <svg
          style={{ width: '1.5rem', height: '1.5rem' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList}>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id, section.to)}
                  className={`${styles.mobileMenuItem} ${active === section.id ? styles.mobileMenuItemActive : ''}`}
                >
                  {section.icon}
                  <span>{section.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
