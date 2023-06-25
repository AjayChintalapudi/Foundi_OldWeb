import React, { useState } from 'react';
import styles from './styles.module.css';
import {
  eyelogo,
  googleglogo,
  loginbglogo,
  signupleftarrowlogo,
} from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const SignUp = () => {
  const { signUpPageStrings } = strings;

  const [pwdVisible, setPwdVisible] = useState(false);

  const signUpLeftSection = () => {
    return (
      <div className={styles.signUpLeftSection}>
        <div className={styles.signUpHeaderSection}>
          <div className={styles.signUpLeftArrow}>
            <img
              src={signupleftarrowlogo}
              alt=""
              className={styles.imageWidth}
            />
          </div>
          <h3 className={styles.signupHeaderText}>
            {signUpPageStrings.signup}
          </h3>
        </div>
        {signUpInputSection()}
        {buttonSection()}
        <div className={styles.loginTextSection}>
          <p className={styles.accountText}>{signUpPageStrings.alreadtAcc}</p>
          &nbsp;
          <p className={styles.loginText}> {signUpPageStrings.login}</p>
        </div>
      </div>
    );
  };

  const signUpInputSection = () => {
    return (
      <div className={styles.signUpInputSection}>
        <div className={styles.nameSection}>
          <p className={styles.nameText}>{signUpPageStrings.fullName}</p>
          <Input
            customInputStyles={styles.fullNameInputStyles}
            type="text"
            placeholder={signUpPageStrings.fullNamePlaceHolder}
          />
        </div>
        <div className={styles.emailSection}>
          <p className={styles.emailText}>{signUpPageStrings.email}</p>
          <Input
            customInputStyles={styles.emailInputStyles}
            type="email"
            placeholder={signUpPageStrings.emailPlaceHolder}
          />
        </div>
        <div className={styles.passwordGapSection}>
          <div className={styles.passwordSection}>
            <p className={styles.passwordText}>{signUpPageStrings.password}</p>
            <Input
              customInputStyles={styles.passwordInputStyles}
              type={pwdVisible ? 'text' : 'password'}
              placeholder={signUpPageStrings.passwordPlaceHolder}
              image={pwdVisible ? eyelogo : eyelogo}
              onClick={() => setPwdVisible(!pwdVisible)}
            />
          </div>
          <p className={styles.forgotPassWordStyles}>
            {signUpPageStrings.passwordStrength}
          </p>
        </div>
      </div>
    );
  };

  const buttonSection = () => {
    return (
      <div className={styles.buttonSection}>
        <div className={styles.createButtonSection}>
          <Button
            btName={signUpPageStrings.createAccount}
            btnStyles={styles.createbtnStyles}
          />
        </div>
        <div className={styles.googleButtonSection}>
          <Button
            btName={signUpPageStrings.google}
            btnStyles={styles.googlebtnStyles}
            image={googleglogo}
          />
        </div>
      </div>
    );
  };

  const signUpRightSection = () => {
    return (
      <div className={styles.signUpRightSection}>
        <img src={loginbglogo} alt="" className={styles.loginBgStyles} />
      </div>
    );
  };

  return (
    <div className={styles.signUpSection}>
      <div className={styles.insideSignUpSection}>
        {signUpLeftSection()}
        {signUpRightSection()}
      </div>
    </div>
  );
};

export default SignUp;
