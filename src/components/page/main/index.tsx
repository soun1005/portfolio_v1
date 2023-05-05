import Navbar from '@/components/layout/navbar';
import styles from './main.module.css';
import Image from 'next/image';
import profilePic from '../../../../public/portfolio.jpeg';

const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrap}>
        <div className={styles.heroWrap}>
          <span className={styles.heroText}>FRONTEND </span>
          <span className={styles.heroText}>DEVELOPER </span>
        </div>
        <div className={styles.presentationWrap}>
          <p className={styles.paragraph}>
            Hello I&apos;m Soeun, frontend developer Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            &apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <Image
            src={profilePic}
            alt="profile photo"
            className={styles.photo}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
