import styles from './Navbar.module.css';
import { Link } from 'react-scroll/modules';
import { useRef, useState, useEffect } from 'react';
import { useAppContext } from '@/pages/context/AppContext';
import CopyEmail from '@/components/utils/CopyEmail';
import { translations } from '@/locales/translations';

const Navbar = () => {
  type DivRef = React.MutableRefObject<HTMLDivElement | null>;
  const [nav, openNav] = useState(false);
  const { isLightMode, toggleMode, lang, toggleLang } = useAppContext();
  const navHiddenMenu: DivRef = useRef(null);
  const T = translations.nav;

  const handleToggle = () => toggleMode();

  useEffect(() => {
    const menus = [
      'ABOUT', 'SKILLS', 'PROJECTS', 'LINKS', 'EMAIL',
      'À PROPOS', 'COMPÉTENCES', 'PROJETS', 'LIENS', 'E-MAIL',
      'EN', 'FR', '🌝', '🌚',
    ];

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
    return () => document.removeEventListener('mousedown', checkIfClickedOutside);
  }, [nav]);

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>ELODIE LE GALL</div>
        <div className={styles.openIcon} onClick={() => openNav(!nav)}>
          <div
            className={nav ? styles.sideNav : styles.open}
            ref={nav ? navHiddenMenu : null}
          ></div>
        </div>
        <div className={nav ? styles.responsiveNav : styles.desktopNav}>
          <ul className={styles.nav}>
            <li className={styles.list}>
              <Link activeClass="active" to="about" spy smooth offset={0} duration={300} onClick={() => openNav(false)}>
                {T.about[lang]}
              </Link>
            </li>
            <li className={styles.list}>
              <Link activeClass="active" to="skills" spy smooth offset={0} duration={300} onClick={() => openNav(false)}>
                {T.skills[lang]}
              </Link>
            </li>
            <li className={styles.list}>
              <Link activeClass="active" to="projects" spy smooth offset={0} duration={300} onClick={() => openNav(false)}>
                {T.projects[lang]}
              </Link>
            </li>
            <li className={styles.list}>
              <Link activeClass="active" to="footer" spy smooth offset={0} duration={300} onClick={() => openNav(false)}>
                {T.links[lang]}
              </Link>
            </li>
            <li className={styles.list}>
              <p className="copyEmail" onClick={CopyEmail}>
                {T.email[lang]}
              </p>
            </li>
            <li className={`${styles.langToggle} ${styles.list}`} onClick={toggleLang}>
              {lang === 'en' ? 'FR' : 'EN'}
            </li>
            <li className={`${styles.iconContainer} ${styles.list}`} onClick={handleToggle}>
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
