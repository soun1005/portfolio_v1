import ProjectCard from '@/components/common/projectCard';
import styles from './projects.module.css';
import data from '@/data/projects.json';
import personalProjectData from '@/data/personalProjects.json';

const Projects = () => {
  return (
    <div className={`container ${styles.container}`} id="projects">
      <h1 className={`title ${styles.title}`}>Personal Projects</h1>
      <div className={styles.cardContainer}>
        <ProjectCard data={personalProjectData} />
      </div>
      <h1 className={`title ${styles.title}`}>School Projects</h1>
      <div className={styles.cardContainer}>
        <ProjectCard data={data} />
      </div>
    </div>
  );
};

export default Projects;
