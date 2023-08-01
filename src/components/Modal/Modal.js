import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const Modal = ({ open, onClose, customClassName, modalContent, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [open, onClose]);

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

  return (
    <div className={`${styles.modal} ${customClassName}`}>
      <div
        className={`${styles.modalContent} ${customClassName}`}
        ref={modalRef}
      >
        <span className={styles.closeIcon} onClick={onClose}></span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
