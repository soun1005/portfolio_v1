import styles from './ArrowUp.module.css';
import Image, { StaticImageData } from 'next/image';
import pageUp from '@/assets/pageUp.png';

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ArrowUp = () => {
  return (
    <div className={styles.arrowUp}>
      <Image
        src={pageUp}
        alt="up"
        className={styles.icon}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ArrowUp;
