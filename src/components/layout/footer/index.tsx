import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrap}>
        <h1 className={styles.logo}>SOEUN LEE.</h1>
        <span className={styles.title}>Frontend developer.</span>
        <span className={styles.email}>thdms1005@gmail.com</span>
      </div>
      <ul className={styles.linkWrap}>
        <li>LinkedIn</li>
        <li>Github</li>
        <li>View CV</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Footer;
