import Navbar from '@/components/layout/navbar';
import styles from './main.module.css';
import Image from 'next/image';
import profilePic from '../../../../public/portfolio.jpeg';
import arrowDown from '../../../../public/arrow_down.png';

const Main = () => {
  return (
    <div className={styles.container}>
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
          />
        </div>
        <div className={styles.presentationWrap}>
          <div className={styles.scrollWrap}>
            <Image src={arrowDown} alt="arrow" className={styles.arrow} />
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
