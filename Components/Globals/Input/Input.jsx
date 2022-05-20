import { useState } from 'react';
import styles from './Input.module.scss';

export const Input = ({
  label,
  type,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          className={styles.input}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={showPassword ? 'text' : type}
          id={id}
          placeholder={placeholder}
          {...props}
        />
        {id === 'password' && (
          <img
            className={styles.showPassword}
            src={
              showPassword
                ? '/src/Assets/eyeOpened.png'
                : '/src/Assets/eyeClosed.png'
            }
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
