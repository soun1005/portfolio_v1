import styles from './card.module.css';
import Image, { StaticImageData } from 'next/image';

type CardComponent = { title: string; image: StaticImageData };

const Card = ({ title, image }: CardComponent) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Image src={image} alt={title} className={styles.cardImage} />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Card;
