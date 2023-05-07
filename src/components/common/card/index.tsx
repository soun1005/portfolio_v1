import styles from './card.module.css';
import Image, { StaticImageData } from 'next/image';

type CardComponent = { title: string; image: StaticImageData };

// This component is called in Skills page
const Card = ({ title, image }: CardComponent) => {
  return (
    <>
      <div className={styles.wrap}>
        <Image src={image} alt={title} className={styles.cardImage} />
        <span className={styles.title}>{title}</span>
      </div>
    </>
  );
};

export default Card;
