import styles from './ArrowUp.module.css';
import Image from 'next/image';
import pageUp from '@/assets/pageUp.png';
import pageUpW from '@/assets/pageUpWhite.png';
import { useAppContext } from '@/pages/context/AppContext';

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ArrowUp = () => {
  const { isLightMode } = useAppContext();

  return (
    <div className={styles.arrowUp}>
      {isLightMode ? (
        <Image
          src={pageUp}
          alt="up"
          className={styles.icon}
          onClick={scrollToTop}
        />
      ) : (
        <Image
          src={pageUpW}
          alt="up"
          className={styles.icon}
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default ArrowUp;
