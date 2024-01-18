import styles from './Navbar.module.css';
import { Link } from 'react-scroll/modules';
import { useRef, useState, useEffect, ReactEventHandler } from 'react';
import { useAppContext } from '@/pages/context/AppContext';
import CopyEmail from '@/components/utils/CopyEmail';

const Navbar = () => {
  // Define a custom type for the ref
  type DivRef = React.MutableRefObject<HTMLDivElement | null>;
  const [nav, openNav] = useState(false);
  const { isLightMode, toggleMode } = useAppContext();
  const navHiddenMenu: DivRef = useRef(null);

  const handleToggle = () => {
    toggleMode();
  };

  // mobile nav bar closing function
  useEffect(() => {
    // Responsive nav menu innerText
    const menus = ['PROJECTS', 'ABOUT', 'SKILLS', 'LINKS', 'EMAIL', '🌝', '🌚'];

    const checkIfClickedOutside = (e: any) => {
      if (
        nav &&
        navHiddenMenu.current &&
        !navHiddenMenu.current.contains(e.target as Node) &&
        e.target.className !== 'openIcon' &&
        !menus.includes(e.target.innerText)
      ) {
        openNav(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // clean eventListener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [nav]);

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
          <div
            className={nav ? styles.sideNav : styles.open}
            ref={nav ? navHiddenMenu : null}
          ></div>
        </div>
        <div className={nav ? styles.responsiveNav : styles.desktopNav}>
          <ul className={styles.nav}>
            <li className={styles.list}>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                onClick={() => openNav(false)}
              >
                ABOUT
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                onClick={() => openNav(false)}
              >
                SKILLS
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                onClick={() => openNav(false)}
              >
                PROJECTS
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                onClick={() => openNav(false)}
              >
                LINKS
              </Link>
            </li>
            <li className={styles.list}>
              <p className="copyEmail" onClick={CopyEmail}>
                EMAIL
              </p>
            </li>
            <li
              className={`${styles.iconContainer} ${styles.list}`}
              onClick={handleToggle}
            >
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
