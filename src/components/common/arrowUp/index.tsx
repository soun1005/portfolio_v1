import styles from './ArrowUp.module.css';
import Image, { StaticImageData } from 'next/image';
import pageUp from '@/assets/pageUp.png';

const ArrowUp = () => {
  return (
    <div className={styles.arrowUp}>
      <Image src={pageUp} alt="up" className={styles.icon} />
    </div>
  );
};

export default ArrowUp;
