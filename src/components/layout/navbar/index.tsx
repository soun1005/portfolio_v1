import styles from './Navbar.module.css';
import { Link } from 'react-scroll/modules';
import { useState } from 'react';
import { useAppContext } from '@/pages/context/AppContext';

const Navbar = () => {
  const [nav, openNav] = useState(false);
  const { isLightMode, toggleMode } = useAppContext();

  const handleToggle = () => {
    toggleMode();
  };

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>SOEUN LEE</div>
        {/* responsive nav */}
        <div
          className={styles.openIcon}
          onClick={() => {
            openNav(!nav);
          }}
        >
          <div className={nav ? styles.sideNav : styles.open}></div>
        </div>
        <div className={nav ? styles.responsiveNav : styles.desktopNav}>
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
            <li className={styles.iconContainer} onClick={handleToggle}>
              {isLightMode ? (
                <span className={styles.icon}>🌚</span>
              ) : (
                <span className={styles.icon}>🌝</span>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
