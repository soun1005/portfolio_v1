import styles from './button.module.css';

type TextType = { text: string; link: string };

const Button = ({ text, link }: TextType) => {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank">
        {text}
      </a>
    </div>
  );
};

export default Button;
