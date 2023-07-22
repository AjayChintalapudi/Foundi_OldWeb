import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

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
    onClick,
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
        <div className={styles.inputIcon} onClick={onClick}>
          <img src={image} alt={alt} className={styles.inputImageStyles} />
        </div>
      )}

      {error && <div className={styles.errorStyles}>{error}</div>}
    </div>
  );
};

export default Input;
