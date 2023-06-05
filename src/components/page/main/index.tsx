import Navbar from '@/components/layout/navbar';
import styles from './main.module.css';
import Image from 'next/image';
import profilePic from '@/assets/mainPage/portfolio.jpeg';
import arrowDown from '@/assets/mainPage/arrow_down.png';
import arrowWhite from '@/assets/mainPage/arrow_white.png';
import { useAppContext } from '@/pages/context/AppContext';

const Main = () => {
  const { isLightMode } = useAppContext();

  return (
    <div className={`container ${styles.container}`}>
      <Navbar />
      <div className={styles.wrap}>
        <div className={styles.heroWrap}>
          <div className={styles.textWrap}>
            <span className={styles.heroText}>FRONTEND </span>
            <span className={styles.heroText}>DEVELOPER </span>
            <p className={`${styles.paragraph} ${styles.reactP} `}>
              - SPECIALISED IN REACT
            </p>
          </div>
          <Image
            src={profilePic}
            alt="profile photo"
            className={styles.photo}
            priority={true}
          />
        </div>
        <div className={styles.presentationWrap}>
          <div className={styles.scrollWrap}>
            {isLightMode ? (
              <Image src={arrowDown} alt="arrow" className={styles.arrow} />
            ) : (
              <Image src={arrowWhite} alt="arrow" className={styles.arrow} />
            )}

            <span>SCROLL</span>
          </div>
          <div className={styles.bottomWrap}>
            <p className={styles.paragraph}>- SOON TO BE FULL-STACK</p>
            <div className={styles.nameWrap}>
              <span className={styles.name}>SOEUN</span>
              <span className={styles.name}>LEE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
