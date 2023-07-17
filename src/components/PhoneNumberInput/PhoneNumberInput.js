import React from 'react';
import styles from './styles.module.css';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

const PhoneNumberInput = () => {
  return (
    <div className={styles.phoneInputContainer}>
      <Button btName="+41" btnStyles={styles.phoneCodeBtnStyles} />
      <Input
        customInputStyles={styles.phoneNumberInputStyles}
        placeholder="Enter Phone Number"
      />
    </div>
  );
};

export default PhoneNumberInput;
