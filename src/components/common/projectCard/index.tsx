import styles from './projectCard.module.css';
import Button from '@/components/common/button';
import Image from 'next/image';
import Tag from '../projectTag';
import { Appearance } from '@/components/framer-motion-utils/Appearance';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoLink: string | null;
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
      <Appearance
        key={id}
        width="100%"
        customAnimation={{
          variants: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          },
          initial: 'hidden',
          transition: { duration: 0.5 },
        }}
      >
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
              {demoLink ? <Button text="DEMO LINK" link={demoLink} /> : null}
              <Button text="GITHUB" link={github} />
            </div>
          </div>
        </div>
      </Appearance>
    );
  });

  return <div className={styles.cardContainer}>{projectList}</div>;
};

export default ProjectCard;
