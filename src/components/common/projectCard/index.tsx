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
      <Image src={screenshot} alt={title} />
      <h1>{title}</h1>
      <span>{desc}</span>
      {tags}
      <Button text="DEMO LINK" />
      <Button text="GITHUB" />
    </div>
  );
};

export default ProjectCard;
