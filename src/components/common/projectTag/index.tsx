import styles from './projectTag.module.css';

type text = { text: string };

const Tag = ({ text }: text) => {
  return (
    <div className={styles.container}>
      <span>{text}</span>
    </div>
  );
};

export default Tag;
