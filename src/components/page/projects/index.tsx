import ProjectCard from '@/components/common/projectCard';
import styles from './projects.module.css';
import data from '@/data/projects.json';

const Projects = () => {
  return (
    <div className={`container ${styles.container}`} id="projects">
      <h1 className={`title ${styles.title}`}>Projects</h1>
      <div className={styles.cardContainer}>
        <ProjectCard data={data} />
      </div>
    </div>
  );
};

export default Projects;
