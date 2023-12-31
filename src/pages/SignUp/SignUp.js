import React, { useContext, useEffect, useState } from 'react';
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
import { useFormik } from 'formik';
import {
  EmailValidationSchema,
  FullNameValidationSchema,
  PassWordValidationSchema,
} from 'validators/Validators';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'networking/Apis/signUp';
import { UserDataContext } from 'providers/UserDataProvider';
import { NetworkStatusContext } from 'providers/NetWorkProvider';
import GoogleAuth from 'helpers/GoogleAuth';

const SignUp = () => {
  // getting user data
  const { setUserData } = useContext(UserDataContext);
  const { isOnline, showMessage } = useContext(NetworkStatusContext);

  const [errorMessage, setErrorMessage] = useState();

  //formik Validation
  const navigate = useNavigate();

  const handleSignUp = async (values) => {
    try {
      let signUpData = {
        full_name: values.fullName,
        email: values.email,
        password: values.password,
        type: 1,
      };
      const signUpResponse = await signUp(signUpData);
      if (
        signUpResponse.status === 200 &&
        signUpResponse.data.type === 'success'
      ) {
        setUserData(signUpResponse.data);
        localStorage.setItem('authToken', signUpResponse.data.accessToken);
        navigate('/');
        console.log('signUpResponse', signUpResponse);
      } else {
        setErrorMessage(signUpResponse.data.message);
        console.log('error in signup');
      }
    } catch (error) {
      console.log(error.toString(), 'signup error');
    }
  };

  const formik = useFormik({
    initialValues: { fullName: '', email: '', password: '' },
    validationSchema: FullNameValidationSchema.concat(
      EmailValidationSchema
    ).concat(PassWordValidationSchema),

    onSubmit: handleSignUp,
  });

  const { signUpPageStrings } = strings;
  const [pwdVisible, setPwdVisible] = useState(false);

  const signUpLeftSection = () => {
    return (
      <form onSubmit={formik.handleSubmit} className={styles.signUpLeftSection}>
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
        <div
          className={styles.loginTextSection}
          onClick={() => navigate('/login')}
        >
          <p className={styles.accountText}>{signUpPageStrings.alreadtAcc}</p>
          &nbsp;
          <p className={styles.loginText}> {signUpPageStrings.login}</p>
        </div>
      </form>
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
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="fullName"
            error={formik.touched.fullName && formik.errors.fullName}
          />
        </div>
        <div className={styles.emailSection}>
          <p className={styles.emailText}>{signUpPageStrings.email}</p>
          <Input
            customInputStyles={styles.emailInputStyles}
            type="email"
            placeholder={signUpPageStrings.emailPlaceHolder}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="email"
            error={formik.touched.email && formik.errors.email}
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
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
            />
          </div>
          <p className={styles.forgotPassWordStyles}>
            {signUpPageStrings.passwordStrength}
          </p>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
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
            type="submit"
          />
        </div>
        <div className={styles.googleButtonSection}>
          {/* <Button
            btName={signUpPageStrings.google}
            btnStyles={styles.googlebtnStyles}
            image={googleglogo}
            type="type"
          /> */}
          <GoogleAuth />
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
      {isOnline
        ? showMessage && <p className={styles.onLine}>Your online</p>
        : showMessage && <p className={styles.offLine}>Your offline</p>}
      <div className={styles.insideSignUpSection}>
        {signUpLeftSection()}
        {signUpRightSection()}
      </div>
    </div>
  );
};

export default SignUp;
