import ProjectCard from '@/components/common/projectCard';
import styles from './projects.module.css';
import data from '@/data/projects.json';
import personalProjectData from '@/data/personalProjects.json';
import { useState } from 'react';
import Image from 'next/image';
import up from '@/assets/up.png';
import down from '@/assets/down.png';
import up_gray from '@/assets/up_gray.png';
import down_gray from '@/assets/down_gray.png';
import { useAppContext } from '@/pages/context/AppContext';

const Projects = () => {
  const [personal, setPersonal] = useState(true);
  const [school, setSchool] = useState(true);

  const { isLightMode } = useAppContext();

  const ocProjects = data.reverse();
  // sort projects by id
  const personalProjects = personalProjectData.sort((a, b) => a.id - b.id);

  const controlDropdown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const value = target;

    // two constrains for title(h1) and arrow
    if (
      value.innerText === 'Personal Projects' ||
      target.parentElement?.innerText === 'Personal Projects'
    ) {
      setPersonal(!personal);
    }

    if (
      value.innerText === 'School Projects' ||
      target.parentElement?.innerText === 'School Projects'
    ) {
      setSchool(!school);
    }
  };

  return (
    <div className={`container ${styles.container}`} id="projects">
      <h1
        className={`title ${styles.title} ${styles.personalProjectDropdown}`}
        onClick={controlDropdown}
      >
        Personal Projects
        {isLightMode ? (
          personal ? (
            <Image
              src={up}
              alt="arrowUp"
              className={styles.arrowUp}
              priority={true}
              onClick={controlDropdown}
            />
          ) : (
            <Image
              src={down}
              alt="arrowDown"
              className={styles.arrowDown}
              priority={true}
            />
          )
        ) : personal ? (
          <Image
            src={up_gray}
            alt="arrowUp"
            className={styles.arrowUp}
            priority={true}
          />
        ) : (
          <Image
            src={down_gray}
            alt="arrowDown"
            className={styles.arrowDown}
            priority={true}
          />
        )}
      </h1>

      {personal ? (
        <div className={styles.cardContainer}>
          <ProjectCard data={personalProjects} />
        </div>
      ) : (
        ''
      )}

      <h1 className={`title ${styles.title}`} onClick={controlDropdown}>
        School Projects
        {isLightMode ? (
          school ? (
            <Image
              src={up}
              alt="arrowUp"
              className={styles.arrowUp}
              priority={true}
            />
          ) : (
            <Image
              src={down}
              alt="arrowDown"
              className={styles.arrowDown}
              priority={true}
            />
          )
        ) : school ? (
          <Image
            src={up_gray}
            alt="arrowUp"
            className={styles.arrowUp}
            priority={true}
          />
        ) : (
          <Image
            src={down_gray}
            alt="arrowDown"
            className={styles.arrowDown}
            priority={true}
          />
        )}
      </h1>
      {school ? (
        <div className={styles.cardContainer}>
          <ProjectCard data={ocProjects} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Projects;
