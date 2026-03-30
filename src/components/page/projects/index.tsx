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
import { translations } from '@/locales/translations';

const Projects = () => {
  const [personal, setPersonal] = useState(true);
  const [school, setSchool] = useState(false);

  const { isLightMode, lang } = useAppContext();
  const T = translations.projects;

  const ocProjects = data.reverse();
  const personalProjects = personalProjectData.sort((a, b) => a.id - b.id);

  const controlDropdown = (e: React.MouseEvent) => {
    const section = (e.currentTarget as HTMLElement).dataset.section;
    if (section === 'personal') setPersonal(!personal);
    if (section === 'school') setSchool(!school);
  };

  const ArrowIcon = ({ open }: { open: boolean }) => {
    if (isLightMode) {
      return open
        ? <Image src={up} alt="arrowUp" className={styles.arrowUp} priority />
        : <Image src={down} alt="arrowDown" className={styles.arrowDown} priority />;
    }
    return open
      ? <Image src={up_gray} alt="arrowUp" className={styles.arrowUp} priority />
      : <Image src={down_gray} alt="arrowDown" className={styles.arrowDown} priority />;
  };

  return (
    <div className={`container ${styles.container}`} id="projects">
      <h1
        className={`title ${styles.title} ${styles.personalProjectDropdown}`}
        data-section="personal"
        onClick={controlDropdown}
      >
        {T.personal[lang]}
        <ArrowIcon open={personal} />
      </h1>

      {personal && (
        <div className={styles.cardContainer}>
          <ProjectCard data={personalProjects} />
        </div>
      )}

      <h1
        className={`title ${styles.title}`}
        data-section="school"
        onClick={controlDropdown}
      >
        {T.school[lang]}
        <ArrowIcon open={school} />
      </h1>

      {school && (
        <div className={styles.cardContainer}>
          <ProjectCard data={ocProjects} />
        </div>
      )}
    </div>
  );
};

export default Projects;
