import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              I'm a dynamic and versatile full stack developer with a strong background in 
              developing, maintaining, and optimizing web applications. My experience spans 
              from NASA Goddard Space Flight Center to cybersecurity training platforms, 
              where I've consistently delivered reliable software solutions.
            </p>
            <p className={styles.paragraph}>
              I have proven success in effectively collaborating within teams to meet evolving 
              project requirements. My expertise includes React, TypeScript, C# .NET, Python, 
              and comprehensive software lifecycle management. I excel at requirement gathering 
              directly from end users and translating complex needs into practical solutions.
            </p>
            <p className={styles.paragraph}>
              I'm passionate about mentoring others - having successfully guided high school 
              and college interns who have all gone on to successful careers. I consistently 
              demonstrate strong problem-solving skills and maintain a proactive approach to 
              learning new technologies and tackling challenging projects.
            </p>
          </div>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <h3 className={styles.highlightTitle}>Problem Solver</h3>
              <p className={styles.highlightText}>
                I thrive on breaking down complex problems into elegant, maintainable solutions.
              </p>
            </div>
            <div className={styles.highlight}>
              <h3 className={styles.highlightTitle}>Team Player</h3>
              <p className={styles.highlightText}>
                Collaborative approach with strong communication skills and mentoring experience.
              </p>
            </div>
            <div className={styles.highlight}>
              <h3 className={styles.highlightTitle}>Lifelong Learner</h3>
              <p className={styles.highlightText}>
                Constantly exploring new technologies and best practices to stay current.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;