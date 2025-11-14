import React from 'react';
import { type Project } from '../types';
import styles from './Projects.module.css';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Cybersecurity Learning Management System',
    description: 'Built and maintained an internal LMS for cybersecurity training with data visualization for schedules, courses, instructors, and student records. Integrated vSphere REST API for VM virtualization.',
    technologies: ['React', 'TypeScript', 'C# .NET', 'PostgreSQL', 'Python', 'vSphere API'],
    githubUrl: 'https://github.com/evanmcgarry',
    liveUrl: undefined,
    imageUrl: undefined
  },
  {
    id: 2,
    title: 'NASA Solar System Exploration Websites',
    description: 'Developed and maintained 34 lab and mission websites for NASA Goddard\'s Solar System Exploration Division. Collaborated directly with scientists for requirement gathering.',
    technologies: ['React', 'JavaScript', 'Python', 'C#', 'REST APIs', 'Data Visualization'],
    githubUrl: 'https://github.com/evanmcgarry',
    liveUrl: undefined,
    imageUrl: undefined
  },
  {
    id: 3,
    title: 'Company Portfolio Websites',
    description: 'Built and maintained three company websites for Contracting, Training, and HR departments. Implemented responsive design and content management capabilities.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'WordPress'],
    githubUrl: 'https://github.com/evanmcgarry',
    liveUrl: undefined,
    imageUrl: undefined
  },
  {
    id: 4,
    title: 'Screen Sharing Application',
    description: 'Developed a cross-platform screen sharing application with Linux VM watermarking capabilities for workstation and user identification.',
    technologies: ['C++', 'PHP', 'Linux', 'System Programming'],
    githubUrl: 'https://github.com/evanmcgarry',
    liveUrl: undefined,
    imageUrl: undefined
  }
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech: string, index: number) => (
            <span key={index} className={styles.technology}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsComponent: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;