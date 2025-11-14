import React from 'react';
import { type Skill } from '../types';
import styles from './Skills.module.css';

const skillsData: Skill[] = [
  // Frontend Technologies
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 5, category: 'frontend' },
  { name: 'HTML5', level: 5, category: 'frontend' },
  { name: 'CSS3', level: 5, category: 'frontend' },
  { name: 'Angular', level: 3, category: 'frontend' },
  
  // Backend Technologies
  { name: 'C# .NET', level: 5, category: 'backend' },
  { name: 'Python', level: 4, category: 'backend' },
  { name: 'REST APIs', level: 5, category: 'backend' },
  { name: 'PHP', level: 4, category: 'backend' },
  { name: 'C++', level: 3, category: 'backend' },
  
  
  // Database & Storage
  { name: 'EFCore', level: 5, category: 'database' },
  { name: 'PostgreSQL', level: 4, category: 'database' },
  { name: 'SQL', level: 4, category: 'database' },
  
  
  // Development Tools & Platforms
  { name: 'Git', level: 5, category: 'tools' },
  { name: 'GitHub', level: 5, category: 'tools' },
  { name: 'Azure', level: 5, category: 'tools' },
  { name: 'Docker', level: 4, category: 'tools' },
  { name: 'NPM', level: 4, category: 'tools' },
  { name: 'WordPress', level: 4, category: 'tools' },
  { name: 'Vite', level: 3, category: 'tools' },
];

const SkillsComponent: React.FC = () => {
  const skillCategories = {
    frontend: skillsData.filter(skill => skill.category === 'frontend'),
    backend: skillsData.filter(skill => skill.category === 'backend'),
    database: skillsData.filter(skill => skill.category === 'database'),
    tools: skillsData.filter(skill => skill.category === 'tools'),
  };

  const renderSkillBar = (skill: Skill) => (
    <div key={skill.name} className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}/5</span>
      </div>
      <div className={styles.skillBar}>
        <div 
          className={styles.skillProgress}
          style={{ width: `${(skill.level / 5) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Technologies</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Frontend</h3>
            <div className={styles.skillsList}>
              {skillCategories.frontend.map(renderSkillBar)}
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Backend</h3>
            <div className={styles.skillsList}>
              {skillCategories.backend.map(renderSkillBar)}
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Database</h3>
            <div className={styles.skillsList}>
              {skillCategories.database.map(renderSkillBar)}
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Tools & Other</h3>
            <div className={styles.skillsList}>
              {skillCategories.tools.map(renderSkillBar)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;