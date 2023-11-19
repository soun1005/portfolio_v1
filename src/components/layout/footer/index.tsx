import { easeInOut } from 'framer-motion';
import styles from './footer.module.css';
import { Appearance } from '@/components/framer-motion-utils/Appearance';

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
          transition: { duration: 0.5, delay: 0.5, ease: easeInOut },
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
          transition: { duration: 0.4, delay: 0.5, ease: easeInOut },
        }}
      >
        <ul className={styles.linkWrap}>
          <li>
            <a href="https://www.linkedin.com/in/soeunl/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/soun1005" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1FdRoo3PKzmyJbDq7XZKlyMNRWUnF7Haz/view?usp=sharing"
              target="_blank"
            >
              View CV(EN/FR)
            </a>
          </li>
          <li>
            <a href="mailto: thdms1005@gmail.com">Contact</a>
          </li>
        </ul>
      </Appearance>
    </div>
  );
};

export default Footer;
