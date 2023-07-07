import React, { useEffect } from 'react';
import styles from './styles.module.css';

const Modal = ({ open, onClose, children }) => {
  // After opening the Modal Stop Scrolling of the Page
  useEffect(() => {
    if (open) {
      document.body.classList.add(styles.noscroll);
    } else {
      document.body.classList.remove(styles.noscroll);
    }
    return () => {
      document.body.classList.remove(styles.noscroll);
    };
  }, [open]);

  if (!open) {
    return null;
  }
  // console.log(children);
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeIcon} onClick={onClose}></span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
