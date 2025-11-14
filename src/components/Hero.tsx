import React from 'react';
import styles from './Hero.module.css';
import profileImage from '../imgs/180122243_3753569234740820_520705886233264274_n.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Evan McGarry</span>
          </h1>
          <h2 className={styles.subtitle}>Full Stack Developer | React & C# .NET Specialist</h2>
          <p className={styles.description}>
            Experienced software developer passionate about creating innovative solutions 
            and building exceptional digital experiences. Focused on modern web technologies, 
            clean architecture, and delivering high-quality software that makes a difference.
          </p>
          <div className={styles.actions}>
            <button 
              className={styles.primaryButton}
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src={profileImage} 
            alt="Evan McGarry - Full Stack Developer" 
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;