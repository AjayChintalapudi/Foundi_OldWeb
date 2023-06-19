import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import Button from 'components/Button/Button';

const Input = (props) => {
  const {
    type,
    name,
    value,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    customInputStyles,
    image,
    alt,
    error,
    button,
  } = props;
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={classNames(styles.inputStyles, customInputStyles)}
        value={value}
      />
      {image && (
        <div className={styles.inputIcon}>
          <img src={image} alt={alt} className={styles.inputImageStyles} />
        </div>
      )}

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
