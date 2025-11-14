import React from 'react';
import { type Experience } from '../types';
import styles from './Experience.module.css';

const experienceData: Experience[] = [
  {
    id: 1,
    title: 'Full Stack Application Developer',
    company: 'Chiron Technology Services, Inc.',
    period: 'Feb 2023 - Nov 2025',
    description: 'Built and maintained internal learning management system for cybersecurity training. Led development of three company websites and mentored high school and college interns. Collaborated with development team using Azure and Git ticketing system.',
    technologies: ['React', 'TypeScript', 'JavaScript', 'C# .NET', 'PostgreSQL', 'Python', 'Azure', 'Git']
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'NASA Goddard Space Flight Center',
    period: 'May 2021 - May 2023',
    description: 'Development and upkeep of 34 lab and mission websites for the Solar System Exploration Division. Communicated directly with scientists and customers for requirement gathering, building solutions with React frontend and Python/C# backend.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'C#', 'REST APIs']
  },
  {
    id: 3,
    title: 'Full Stack Application Developer',
    company: 'Chiron Technology Services, Inc.',
    period: 'Jan 2020 - May 2021',
    description: 'Focused on full stack development projects, gaining experience in enterprise application development and collaborative software engineering practices.',
    technologies: ['React', 'JavaScript', 'C#', 'REST APIs', 'SQL']
  },
  {
    id: 4,
    title: 'Software Development Intern',
    company: 'Chiron Technology Services, Inc.',
    period: 'Oct 2019 - Jan 2020',
    description: 'Developed screen sharing application using C++ and PHP. Added watermarks to Linux Virtual Machines for workstation and user information display.',
    technologies: ['C++', 'PHP', 'Linux', 'System Development']
  }
];

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.experienceHeader}>
        <div>
          <h3 className={styles.jobTitle}>{experience.title}</h3>
          <h4 className={styles.company}>{experience.company}</h4>
        </div>
        <span className={styles.period}>{experience.period}</span>
      </div>
      <p className={styles.description}>{experience.description}</p>
      <div className={styles.technologies}>
        {experience.technologies.map((tech: string, index: number) => (
          <span key={index} className={styles.technology}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ExperienceComponent: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Professional Experience</h2>
        <div className={styles.timeline}>
          {experienceData.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;