import styles from './projectCard.module.css';
import Button from '@/components/common/button';
import Image from 'next/image';
import Tag from '../projectTag';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  github: string;
  screenshot: string;
};
type ProjectCardProps = {
  data: Project[];
};

const ProjectCard = ({ data }: ProjectCardProps) => {
  const projectList = data.map((projects) => {
    const { screenshot, title, description, tags, id, demoLink, github } =
      projects;

    const tagList = tags.map((tag) => {
      return <Tag text={tag} key={tag} />;
    });

    return (
      <div className={styles.cardWrap} key={id}>
        <Image
          src={screenshot}
          alt={title}
          className={styles.img}
          width={1000}
          height={1000}
        />
        <div className={styles.descWrap}>
          <div className={styles.titleWrap}>
            <p>{title}</p>
            <span className={styles.desc}>{description}</span>
            <div className={styles.tagWrap}>{tagList}</div>
          </div>
          <div className={styles.buttonWrap}>
            <Button text="DEMO LINK" link={demoLink} />
            <Button text="GITHUB" link={github} />
          </div>
        </div>
      </div>
    );
  });

  return <div className={styles.cardContainer}>{projectList}</div>;
};

export default ProjectCard;
