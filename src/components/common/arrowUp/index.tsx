import styles from './ArrowUp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const ArrowUp = () => {
  return (
    <div className={styles.arrowUp}>
      <FontAwesomeIcon icon={faCaretUp} />
    </div>
  );
};

export default ArrowUp;
