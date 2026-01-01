import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest(`.${styles.mobileMenu}`) && !e.target.closest(`.${styles.mobileMenuBtn}`)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <>
      
      {isMobileMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <nav className={styles.nav}>
         
          <div className={styles.logoContainer}>
            <a
              href="#home"
              className={styles.logo}
              onClick={(e) => scrollToSection(e, 'home')}
            >
              <span className={styles.logoText}>{'<BA>'}</span>
              <span className={styles.logoSubtext}>Portfolio</span>
            </a>
          </div>

          
          <ul className={styles.menu}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.menuLink} ${
                    activeSection === item.id ? styles.active : ''
                  }`}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.label}
                  <span className={styles.linkUnderline}></span>
                </a>
              </li>
            ))}
          </ul>

          
          <button
            className={`${styles.mobileMenuBtn} ${
              isMobileMenuOpen ? styles.open : ''
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <ul className={styles.mobileMenuList}>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={styles.mobileMenuItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={`#${item.id}`}
                className={`${styles.mobileMenuLink} ${
                  activeSection === item.id ? styles.active : ''
                }`}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                <span className={styles.menuNumber}>0{index + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        
        <div className={styles.mobileMenuFooter}>
          <p>Built with React & Vite</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;