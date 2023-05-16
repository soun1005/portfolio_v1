import styles from './Navbar.module.css';
import Image from 'next/image';
import icon from '@/assets/nav/sunlightIcon.png';
import { Link } from 'react-scroll/modules';

const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>SOEUN LEE</div>
        {/* responsive nav */}
        <div className={styles.responsiveNav}>
          <div className={styles.buttonWrap}>
            <div className={styles.openIcon}>open</div>
            <div className={styles.closeIcon}>X</div>
          </div>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                LINKS
              </Link>
            </li>
            <li>
              <a href="mailto: thdms1005@gmail.com">CONTACT</a>
            </li>
          </ul>
        </div>
        {/* nav desktop mode */}
        <div className={styles.menuWrap}>
          <ul className={styles.nav}>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                LINKS
              </Link>
            </li>
            <li>
              <a href="mailto: thdms1005@gmail.com">CONTACT</a>
            </li>
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
