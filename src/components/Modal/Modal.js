import React, { useState } from 'react';
import Button from 'components/Button/Button';
import styles from './styles.module.css';
import { modalcloseiconimg, uprightlogo } from 'resources/Images/Images';
import { HiLockClosed } from 'react-icons/hi';
const Modal = ({ children, showCloseIcon }) => {
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
    <div className={styles.modalMainContainer}>
      <Button
        btName="Return item"
        onClick={openModal}
        btnStyles={styles.modalBtnStyles}
        image={uprightlogo}
        imageWrapperStyles={styles.modalWrappperStyles}
      />
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
              {children}
              {showCloseIcon && (
                <div className={styles.modalCloseImgBlock} onClick={closeModal}>
                  <img
                    src={modalcloseiconimg}
                    alt=""
                    className={styles.imageWidth}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
