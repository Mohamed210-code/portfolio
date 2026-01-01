import { useState, useEffect, useRef } from 'react';
import styles from './Skills.module.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const coreSkills = [
    {
      category: 'Frontend Development',
      icon: '⚛️',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 & SASS', level: 90 }
      ]
    },
    {
      category: 'Backend Development',
      icon: '🗄️',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 72 },
        { name: 'REST APIs', level: 78 }
      ]
    },
    {
      category: 'Tools & Workflow',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'VS Code', level: 95 },
        { name: 'Vite', level: 85 },
        { name: 'NPM/Yarn', level: 88 }
      ]
    }
  ];

  const projectSkills = [
    { name: 'Responsive Design', icon: '📱', level: 92 },
    { name: 'Component Architecture', icon: '🧩', level: 88 },
    { name: 'State Management', icon: '🔄', level: 85 },
    { name: 'API Integration', icon: '🔌', level: 82 },
    { name: 'Testing (Jest)', icon: '🧪', level: 75 },
    { name: 'Version Control', icon: '📋', level: 90 }
  ];

  const additionalSkills = [
    { name: 'TypeScript', icon: '📘' },
    { name: 'Redux', icon: '🔴' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Agile/Scrum', icon: '🏃' },
    { name: 'Problem Solving', icon: '🧠' },
    { name: 'Team Collaboration', icon: '🤝' }
  ];

  const technologies = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
    { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }
  ];

  return (
    <section 
      id="skills" 
      className={styles.skills}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.sectionLabel}>My Expertise</span>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            A comprehensive showcase of my technical abilities and professional competencies
          </p>
        </div>

        {/* Core Skills */}
        <div className={styles.coreSkillsSection}>
          <h3 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
            <span className={styles.titleIcon}>🎯</span>
            Core Technical Skills
          </h3>
          <div className={styles.coreSkillsGrid}>
            {coreSkills.map((category, index) => (
              <div
                key={category.category}
                className={`${styles.coreCard} ${isVisible ? styles.visible : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{category.icon}</span>
                  <h4 className={styles.cardTitle}>{category.category}</h4>
                </div>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className={styles.skillItem}
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillPercentage}>{skill.level}%</span>
                      </div>
                      <div className={styles.skillBar}>
                        <div 
                          className={styles.skillProgress}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Skills */}
        <div className={styles.projectSkillsSection}>
          <h3 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
            <span className={styles.titleIcon}>💼</span>
            Project & Development Skills
          </h3>
          <div className={styles.projectSkillsGrid}>
            {projectSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`${styles.projectCard} ${isVisible ? styles.visible : ''}`}
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <div className={styles.projectCardIcon}>{skill.icon}</div>
                <h4 className={styles.projectCardTitle}>{skill.name}</h4>
                <div className={styles.projectProgress}>
                  <div 
                    className={styles.projectBar}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${0.3 + index * 0.05}s`
                    }}
                  />
                </div>
                <span className={styles.projectLevel}>{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className={styles.additionalSkillsSection}>
          <h3 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
            <span className={styles.titleIcon}>✨</span>
            Additional Skills & Knowledge
          </h3>
          <div className={styles.additionalSkillsGrid}>
            {additionalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`${styles.additionalCard} ${isVisible ? styles.visible : ''}`}
                style={{ animationDelay: `${0.5 + index * 0.03}s` }}
              >
                <span className={styles.additionalIcon}>{skill.icon}</span>
                <span className={styles.additionalName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className={`${styles.techStack} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.techStackTitle}>
            <span className={styles.titleIcon}>⚙️</span>
            Technology Stack
          </h3>
          <div className={styles.techIcons}>
            {technologies.map((tech, index) => (
              <div 
                key={tech.name} 
                className={styles.techIcon} 
                title={tech.name}
                style={{ animationDelay: `${0.7 + index * 0.02}s` }}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;