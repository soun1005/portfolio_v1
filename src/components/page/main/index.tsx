import Navbar from '@/components/layout/navbar';
import styles from './main.module.css';
import Image from 'next/image';
import profilePic from '@/assets/mainPage/portfolio.jpeg';
import arrowDown from '@/assets/mainPage/arrow_down.png';
import arrowWhite from '@/assets/mainPage/arrow_white.png';
import { useAppContext } from '@/pages/context/AppContext';
import { AnimatedText } from '@/components/framer-motion-utils/AnimatedText';
import { Appearance } from '@/components/framer-motion-utils/Appearance';
import { easeInOut } from 'framer-motion';

const Main = () => {
  const { isLightMode } = useAppContext();

  return (
    <div className={`container ${styles.container}`}>
      <Navbar />
      <div className={styles.wrap}>
        <div className={styles.heroWrap}>
          <div className={styles.textWrap}>
            <div className={styles.firstRow}>
              <AnimatedText
                el="span"
                text={['FRONTEND', 'DEVELOPER']}
                className="heroText"
              />
            </div>
            <Appearance
              customAnimation={{
                variants: {
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                },
                initial: 'hidden',

                transition: { duration: 0.3, delay: 1.5, ease: easeInOut },
              }}
            >
              <p className={`${styles.paragraph} ${styles.reactP} `}>
                - SPECIALISED IN REACT / TS / REACT NATIVE
              </p>
            </Appearance>
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
            <Appearance
              customAnimation={{
                variants: {
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                },
                initial: 'hidden',
                transition: {
                  duration: 0.3,
                  delay: 2,
                  ease: [0.25, 0.25, 0.25, 0.75],
                },
              }}
            >
              <div className={styles.nameWrap}>
                <span className={styles.nameFirstRow}>
                  <span>SOEUN</span>
                </span>
                <span className={styles.nameSecondRow}>
                  <span>LEE</span>
                </span>
              </div>
            </Appearance>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
