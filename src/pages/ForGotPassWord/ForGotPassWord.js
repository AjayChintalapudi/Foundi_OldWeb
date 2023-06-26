import React, { useState } from 'react';
import styles from './styles.module.css';
import Input from 'components/Input/Input';
import { eyelogo } from 'resources/Images/Images';
import Button from 'components/Button/Button';
import { strings } from 'resources/Strings/eng';

const ForGotPassWord = () => {
  const { forgotPwdStrings } = strings;
  //state values
  const [pwdVisible, setPwdVisible] = useState(false);
  const [confirmPwd, setConfirmPwd] = useState(false);

  const passwordTopSection = () => {
    return (
      <div className={styles.passwordTopSection}>
        <h3 className={styles.passwordHeader}>
          {forgotPwdStrings.forgotHeading}
        </h3>
        <p className={styles.passswordDescp}>{forgotPwdStrings.forgotDescp}</p>
      </div>
    );
  };

  const passwordMiddleSection = () => {
    return (
      <div className={styles.passwordMiddleSection}>
        <div className={styles.newPasswordSection}>
          <p className={styles.newPasswordText}>
            {forgotPwdStrings.newPassword}
          </p>
          <div className={styles.passwordGapSection}>
            <Input
              customInputStyles={styles.newpasswordStyles}
              type={pwdVisible ? 'text' : 'password'}
              placeholder={forgotPwdStrings.newPwdPlaceHolder}
              image={pwdVisible ? eyelogo : eyelogo}
              onClick={() => setPwdVisible(!pwdVisible)}
            />
            <p className={styles.strengthText}>
              {forgotPwdStrings.pwdStrength}
            </p>
          </div>
        </div>
        <div className={styles.confirmPasswordSection}>
          <p className={styles.confirmPasswordText}>
            {forgotPwdStrings.confirmPassword}
          </p>
          <Input
            customInputStyles={styles.confirmpasswordStyles}
            type={confirmPwd ? 'text' : 'password'}
            placeholder={forgotPwdStrings.confirmPwdPlaceHolder}
            image={confirmPwd ? eyelogo : eyelogo}
            onClick={() => setConfirmPwd(!confirmPwd)}
          />
        </div>
      </div>
    );
  };

  const buttonSection = () => {
    return (
      <div className={styles.buttonSection}>
        <Button
          btName={forgotPwdStrings.saveBtn}
          btnStyles={styles.saveBtnStyles}
        />
      </div>
    );
  };

  return (
    <div className={styles.passwordSection}>
      <div className={styles.insidePasswordSection}>
        {passwordTopSection()}
        {passwordMiddleSection()}
        {buttonSection()}
        {}
      </div>
    </div>
  );
};

export default ForGotPassWord;
