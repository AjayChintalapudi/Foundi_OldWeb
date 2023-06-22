import React from 'react';
import styles from './styles.module.css';
import {
  eyelogo,
  googleglogo,
  leftarrowlogo,
  loginbglogo,
} from 'resources/Images/Images';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const Login = () => {
  return (
    <div className={styles.loginSection}>
      <div className={styles.insideLoginSection}>
        <div className={styles.loginLeftSection}>
          <div className={styles.loginHeaderSection}>
            <div className={styles.loginLeftArrow}>
              <img src={leftarrowlogo} alt="" className={styles.imageWidth} />
            </div>
            <h3 className={styles.loginHeaderText}>Log in</h3>
          </div>
          <div className={styles.loginInputSection}>
            <div className={styles.emailSection}>
              <p className={styles.emailText}>Email address</p>
              <Input
                customInputStyles={styles.emailInputStyles}
                type="text"
                placeholder={'Enter your email address'}
              />
            </div>
            <div className={styles.passwordGapSection}>
              <div className={styles.passwordSection}>
                <p className={styles.passwordText}>Password</p>
                <Input
                  customInputStyles={styles.passwordInputStyles}
                  type="text"
                  placeholder={'Enter your password'}
                  image={eyelogo}
                />
              </div>
              <p className={styles.forgotPassWordStyles}>Forgot password?</p>
            </div>
          </div>
          <div className={styles.buttonSection}>
            <div className={styles.loginButtonSection}>
              <Button btName={'Log in'} btnStyles={styles.loginbtnStyles} />
            </div>
            <div className={styles.googleButtonSection}>
              <Button
                btName={'Sign in with Google'}
                btnStyles={styles.googlebtnStyles}
                image={googleglogo}
              />
            </div>
          </div>
          <div className={styles.signUpTextSection}>
            <p className={styles.accountText}>Don’t have an account?</p>
            <p className={styles.signupText}> Sign up</p>
          </div>
        </div>
        <div className={styles.loginRightSection}>
          <img src={loginbglogo} alt="" className={styles.loginBgStyles} />
        </div>
      </div>
    </div>
  );
};

export default Login;
