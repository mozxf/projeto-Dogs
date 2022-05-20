import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

export const Button = ({ children, onClick, type, href, disabled }) => {
  if (type === 'button') {
    return (
      <button className={styles.button} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  if (type === 'link') {
    return (
      <Link className={styles.button} to={href} disabled={disabled}>
        {children}
      </Link>
    );
  } else return null;
};
