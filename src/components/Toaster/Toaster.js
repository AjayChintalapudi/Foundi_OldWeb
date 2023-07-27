import React from 'react';
import styles from './styles.module.css';

const Toaster = ({ message, onClose }) => {
  return (
    <div className={styles.toaster}>
      <div className={styles.message}>{message}</div>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Toaster;
