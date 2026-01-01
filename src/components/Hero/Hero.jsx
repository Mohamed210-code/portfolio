import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const roles = ['React Developer', 'Frontend Developer', 'Web Designer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let charIndex = 0;
    const currentRole = roles[roleIndex];
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
      
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageOuterRing}></div>
              <div className={styles.imageInnerRing}></div>
              <img 
                src="https://ui-avatars.com/api/?name=Abdelhakim+Boukerzaza&size=300&background=gradient&color=fff&bold=true&format=svg" 
                alt="Abdelhakim Boukerzaza" 
                className={styles.profileImage}
              />
              <div className={styles.statusDot}></div>
            </div>
          </div>

          {/* Info Section */}
          <div className={styles.infoSection}>
            <div className={styles.greetingWrapper}>
              <span className={styles.waveEmoji}>👋</span>
              <p className={styles.greeting}>Hello, I'm</p>
            </div>
            
            <h1 className={styles.name}>
              <span className={styles.firstName}>Abdelhakim</span>
              <span className={styles.lastName}>Boukerzaza</span>
            </h1>

            <div className={styles.roleContainer}>
              <h2 className={styles.title}>
                <span className={styles.staticText}>Junior </span>
                <span className={styles.dynamicText}>{typedText}</span>
                <span className={styles.cursor}>|</span>
              </h2>
            </div>

            <p className={styles.bio}>
              Passionate about crafting exceptional digital experiences through clean code 
              and innovative solutions. Specialized in building modern, responsive web 
              applications with <strong>React</strong> and cutting-edge technologies.
            </p>

            {/* Stats */}
            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>1+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.buttonGroup}>
              <a 
                href="#projects" 
                className={styles.primaryButton}
                onClick={(e) => scrollToSection(e, 'projects')}
              >
                <span>Explore My Work</span>
                <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a 
                href="#contact" 
                className={styles.secondaryButton}
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <p className={styles.socialLabel}>Connect with me</p>
              <div className={styles.socialLinks}>
                <a 
                  href="https://github.com/abdelhakimbkz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/abdelhakim-boukerzaza-98b0133a4/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                <a 
                  href="mailto:hakimboukerzaza722@gmail.com" 
                  className={styles.socialLink}
                  title="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <p className={styles.scrollText}>Scroll to explore</p>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorativeCircle1}></div>
      <div className={styles.decorativeCircle2}></div>
    </section>
  );
}

export default Hero;