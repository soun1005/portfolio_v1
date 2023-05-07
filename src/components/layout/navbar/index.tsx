import styles from './Navbar.module.css';
import Image from 'next/image';
import icon from '@/assets/nav/sunlightIcon.png';

const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>SOEUN LEE</div>
        <div className={styles.menuWrap}>
          <ul className={styles.nav}>
            <li>SKILLS</li>
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
          <div className={styles.iconContainer}>
            <Image src={icon} className={styles.icon} alt="daytime button" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
