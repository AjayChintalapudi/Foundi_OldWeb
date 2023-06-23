import React from 'react';
import styles from './styles.module.css';
import {
  eyelogo,
  googleglogo,
  loginbglogo,
  signupleftarrowlogo,
} from 'resources/Images/Images';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { strings } from 'resources/Strings/eng';

const Login = () => {
  const { loginPageStrings } = strings;

  const loginLeftSection = () => {
    return (
      <div className={styles.loginLeftSection}>
        <div className={styles.loginHeaderSection}>
          <div className={styles.loginLeftArrow}>
            <img
              src={signupleftarrowlogo}
              alt=""
              className={styles.imageWidth}
            />
          </div>
          <h3 className={styles.loginHeaderText}>{loginPageStrings.login}</h3>
        </div>
        {loginInputSection()}
        {buttonSection()}
        <div className={styles.signUpTextSection}>
          <p className={styles.accountText}>{loginPageStrings.noAccount}</p>
          <p className={styles.signupText}> {loginPageStrings.signup}</p>
        </div>
      </div>
    );
  };

  const loginInputSection = () => {
    return (
      <div className={styles.loginInputSection}>
        <div className={styles.emailSection}>
          <p className={styles.emailText}>{loginPageStrings.email}</p>
          <Input
            customInputStyles={styles.emailInputStyles}
            type="email"
            placeholder={loginPageStrings.emailPlaceHolder}
          />
        </div>
        <div className={styles.passwordGapSection}>
          <div className={styles.passwordSection}>
            <p className={styles.passwordText}>{loginPageStrings.password}</p>
            <Input
              customInputStyles={styles.passwordInputStyles}
              type="password"
              placeholder={loginPageStrings.passwordPlaceHolder}
              image={eyelogo}
            />
          </div>
          <p className={styles.forgotPassWordStyles}>
            {loginPageStrings.forgotPassword}
          </p>
        </div>
      </div>
    );
  };

  const buttonSection = () => {
    return (
      <div className={styles.buttonSection}>
        <div className={styles.loginButtonSection}>
          <Button
            btName={loginPageStrings.login}
            btnStyles={styles.loginbtnStyles}
          />
        </div>
        <div className={styles.googleButtonSection}>
          <Button
            btName={loginPageStrings.google}
            btnStyles={styles.googlebtnStyles}
            image={googleglogo}
          />
        </div>
      </div>
    );
  };

  const loginRightSection = () => {
    return (
      <div className={styles.loginRightSection}>
        <img src={loginbglogo} alt="" className={styles.loginBgStyles} />
      </div>
    );
  };

  return (
    <div className={styles.loginSection}>
      <div className={styles.insideLoginSection}>
        {loginLeftSection()}
        {loginRightSection()}
      </div>
    </div>
  );
};

export default Login;
