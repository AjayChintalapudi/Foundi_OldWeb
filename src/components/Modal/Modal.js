import React, { useState } from 'react';
import Button from 'components/Button/Button';
import styles from './styles.module.css';
import { modalcloseiconimg } from 'resources/Images/Images';
const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div>
      <Button btName="openModal" onClick={openModal} />
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
              {children}
              <div className={styles.modalCloseImgBlock} onClick={closeModal}>
                <img
                  src={modalcloseiconimg}
                  alt=""
                  className={styles.imageWidth}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
