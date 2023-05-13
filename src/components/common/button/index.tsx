import styles from './button.module.css';

type TextType = { text: string };

const Button = ({ text }: TextType) => {
  return (
    <div className={styles.container}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
