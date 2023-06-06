import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={`container ${styles.container}`} id="footer">
      <div className={styles.logoWrap}>
        <h1 className={styles.logo}>SOEUN LEE.</h1>
        <span className={styles.title}>Frontend developer.</span>
        <span className={styles.email}>thdms1005@gmail.com</span>
      </div>
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
            href="https://drive.google.com/file/d/1i3_YSnXo7MY6C4De3eiTYUhLX2m7l9P6/view?usp=drive_link"
            target="_blank"
          >
            View CV
          </a>
        </li>
        <li>
          <a href="mailto: thdms1005@gmail.com">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
