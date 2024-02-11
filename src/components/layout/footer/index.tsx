import styles from './footer.module.css';
import { Appearance } from '@/components/framer-motion-utils/Appearance';
import CopyEmail from '@/components/utils/CopyEmail';

const Footer = () => {
  return (
    <div className={`container ${styles.container}`} id="footer">
      <Appearance
        customAnimation={{
          variants: {
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          },
          initial: 'hidden',
          transition: { duration: 1, delay: 0.3 },
        }}
      >
        <div className={styles.logoWrap}>
          <h1 className={styles.logo}>SOEUN LEE.</h1>
          <span className={styles.title}>Frontend developer.</span>
          <span className={styles.email}>thdms1005@gmail.com</span>
        </div>
      </Appearance>
      <Appearance
        width="fit-content"
        customAnimation={{
          variants: {
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          },
          initial: 'hidden',
          transition: {
            duration: 1,
            delay: 0.3,
            ease: [0.25, 0.25, 0.25, 0.75],
          },
        }}
      >
        <ul className={styles.linkWrap}>
          <li className={styles.list}>
            <a href="https://www.linkedin.com/in/soeunl/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li className={styles.list}>
            <a href="https://github.com/soun1005" target="_blank">
              Github
            </a>
          </li>
          <li className={styles.list}>
            <a
              href="https://drive.google.com/file/d/14XFWxUkJV-pxUL_oTM4oFRJ8PvRFDnEC/view?usp=sharing"
              target="_blank"
            >
              View CV
            </a>
          </li>
          <li className={styles.list}>
            <p className="copyEmail" onClick={CopyEmail}>
              E-Mail
            </p>
          </li>
        </ul>
      </Appearance>
    </div>
  );
};

export default Footer;
