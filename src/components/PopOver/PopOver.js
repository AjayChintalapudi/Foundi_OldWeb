import React, { useState } from 'react';
import styles from './styles.module.css';

const Popover = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.popoverContainer}>
      <div className={styles.popoverTrigger} onClick={handleClick}>
        {trigger}
      </div>
      {isOpen && (
        <div className={styles.popoverContent}>
          <div className={styles.arrowUp}></div>
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
