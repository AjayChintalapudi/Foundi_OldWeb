import React, { useContext, useState } from 'react';
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
import { emailValidationSchema } from 'validators/Validators';
import { Userlogin } from 'networking/Apis/login';

import { UserDataContext } from 'providers/UserDataProvider';
import GoogleAuth from 'helpers/GoogleAuth';

const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [pwvisible, setPwVisible] = useState(false);

  const { loginPageStrings } = strings;
  const { setUserData } = useContext(UserDataContext);

  //formik validation
  const handleLogin = async (values) => {
    try {
      const response = await Userlogin(values);
      if (response.status === 200 && response.data.type === 'success') {
        localStorage.setItem('authToken', response.data.accessToken);
        setUserData(response.data);
        navigate('/');
        console.log(response);
      } else {
        setErrorMsg(response.data.message);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: emailValidationSchema,
    onSubmit: handleLogin,
  });

  const loginLeftSection = () => {
    return (
      <form onSubmit={formik.handleSubmit} className={styles.loginLeftSection}>
        <div className={styles.loginHeaderSection}>
          <div className={styles.loginLeftArrow}>
            <img
              src={signupleftarrowlogo}
              alt=""
              className={styles.imageWidth}
              onClick={() => navigate('/')}
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
        {errorMsg && (
          <div>
            <p className={styles.errorMsgStyles}>{errorMsg}</p>
          </div>
        )}
        <div className={styles.loginButtonSection}>
          <Button
            btName={loginPageStrings.login}
            btnStyles={styles.loginbtnStyles}
            type="submit"
          />
        </div>
        <div className={styles.googleButtonSection}>
          {/* <Button
            btName={loginPageStrings.google}
            btnStyles={styles.googlebtnStyles}
            image={googleglogo}
            type="type"
          /> */}

          <GoogleAuth />
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
