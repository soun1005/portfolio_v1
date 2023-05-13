import styles from './projectCard.module.css';
import Button from '@/components/common/button';
import Image, { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

type Card = {
  screenshot: StaticImageData;
  title: string;
  desc: string;
  tags: ReactElement[];
};

const ProjectCard = ({ screenshot, title, desc, tags }: Card) => {
  return (
    <div className={styles.container}>
      <Image src={screenshot} alt={title} className={styles.img} />
      <div className={styles.descWrap}>
        <div className={styles.titleWrap}>
          <p>{title}</p>
          <span>{desc}</span>
          {tags}
        </div>
        <div className={styles.buttonWrap}>
          <Button text="DEMO LINK" />
          <Button text="GITHUB" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
