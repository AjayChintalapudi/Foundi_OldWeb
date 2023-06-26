import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  EmailValidationSchema,
  PassWordValidationSchema,
} from 'validators/Validators';

const Login = () => {
  const navigate = useNavigate();

  //formik validation
  const handleLogin = (values) => {
    console.log(values, 'values calling');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: EmailValidationSchema.concat(PassWordValidationSchema),
    onSubmit: handleLogin,
  });

  const { loginPageStrings } = strings;
  const [pwvisible, setPwVisible] = useState(false);

  const loginLeftSection = () => {
    return (
      <form onSubmit={formik.handleSubmit} className={styles.loginLeftSection}>
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
        <div
          className={styles.signUpTextSection}
          onClick={() => navigate('/signup')}
        >
          <p className={styles.accountText}>{loginPageStrings.noAccount}</p>
          <p className={styles.signupText}> {loginPageStrings.signup}</p>
        </div>
      </form>
    );
  };

  const loginInputSection = () => {
    return (
      <div className={styles.loginInputSection}>
        <div className={styles.emailSection}>
          <p className={styles.emailText}>{loginPageStrings.email}</p>
          <Input
            name="email"
            customInputStyles={styles.emailInputStyles}
            type="email"
            placeholder={loginPageStrings.emailPlaceHolder}
            value={formik.values.email}
            // onFocus={formik.handle}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className={styles.passwordGapSection}>
          <div className={styles.passwordSection}>
            <p className={styles.passwordText}>{loginPageStrings.password}</p>
            <Input
              name="password"
              customInputStyles={styles.passwordInputStyles}
              type={pwvisible ? 'text' : 'password'}
              placeholder={loginPageStrings.passwordPlaceHolder}
              image={pwvisible ? eyelogo : eyelogo}
              onClick={() => setPwVisible(!pwvisible)}
              value={formik.values.password}
              // onFocus={formik.handleBlur}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
            />
          </div>
          <p
            onClick={() => navigate('/forgotpassword')}
            className={styles.forgotPassWordStyles}
          >
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
            type="submit"
          />
        </div>
        <div className={styles.googleButtonSection}>
          <Button
            btName={loginPageStrings.google}
            btnStyles={styles.googlebtnStyles}
            image={googleglogo}
            type="type"
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
