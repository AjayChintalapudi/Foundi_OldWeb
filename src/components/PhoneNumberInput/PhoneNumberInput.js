import React from 'react';
import styles from './styles.module.css';

const PhoneNumberInput = ({
  name,
  type,
  value,
  onBlur,
  onFocus,
  onChange,
  error,
  placeholder,
  customInputStyles,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <p className={styles.phoneCode}>+41</p>
        <span className={styles.rightBorder}></span>
        <input
          type={type}
          className={`${styles.input} ${customInputStyles}`}
          name={name}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      {error && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
