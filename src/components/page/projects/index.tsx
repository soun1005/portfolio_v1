import ProjectCard from '@/components/common/projectCard';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className="title">Projects</h1>
      <ProjectCard title="Openclassrooms Project 3" desc="Restaurant website" />
    </div>
  );
};

export default Projects;
