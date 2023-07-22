import React from 'react';
import { strings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { footerIconsData } from 'constants/CommonData/CommonData';
import styles from './styles.module.css';
import { Formik, useFormik } from 'formik';
import { emailValidationSchema } from 'validators/Validators';

const Footer = () => {
  // Footer Section Strings

  const { footerStrings } = strings;

  // handle email response

  const handleEmailResponse = async (values) => {
    console.log(values, 'email sending value');
    try {
    } catch {
      console.log('error in handling email sending response');
    }
  };

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: emailValidationSchema,
    onSubmit: handleEmailResponse,
  });

  const footerTopSection = () => {
    return (
      <div className={styles.footerTopSection}>
        {footerTopSectionLeftBlock()}
        {footerTopSectionRightBlock()}
      </div>
    );
  };

  const footerTopSectionLeftBlock = () => {
    return (
      <div className={styles.footerTopSectionLeftBlock}>
        <h3 className={styles.footerMainHeading}>
          {footerStrings.footerMainHeading}
        </h3>
        <p className={styles.footerSubDesc}>{footerStrings.footerSubDesc}</p>
      </div>
    );
  };

  const footerTopSectionRightBlock = () => {
    return (
      <div className={styles.footerTopSectionRightBlock}>
        <div className={styles.footerInputContainer}>
          <form onSubmit={formik.handleSubmit}>
            <Input
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldError('email', '')}
              customInputStyles={styles.footerInputStyles}
              placeholder={footerStrings.footerPlaceHolderText}
              error={formik.touched.email && formik.errors.email}
            />
            <div className={styles.footerButtonContainer}>
              <Button
                btName="submit"
                type="submit"
                btnStyles={styles.footerBtnStyles}
              />
              <Button btName=">" btnStyles={styles.footerBtnIconStyles} />
            </div>
          </form>
        </div>
      </div>
    );
  };

  const footerBottomSection = () => {
    return (
      <div className={styles.footerBottomSection}>
        {footerBottomSectionLeftBlock()}
        {footerBottomSectionRightBlock()}
      </div>
    );
  };

  const footerBottomSectionLeftBlock = () => {
    return (
      <div className={styles.footerBottomSectionLeftBlock}>
        {footerIconsData &&
          footerIconsData.map((item, index) => {
            return (
              <div key={index} className={styles.socialMediaImgBlock}>
                <img
                  src={item.footerSocialMediaImg}
                  alt={item.footerAltText}
                  className={styles.imageWidth}
                />
              </div>
            );
          })}
      </div>
    );
  };

  const footerBottomSectionRightBlock = () => {
    return (
      <div className={styles.footerBottomSectionRightBlock}>
        <span className={styles.rightBorderDivider}></span>
        <div className={styles.bottomBorder}></div>
        <p className={styles.footerCopyRightDesc}>
          {footerStrings.footerCopyRightDesc}
        </p>
      </div>
    );
  };
  return (
    <div className={styles.footerMainContainer}>
      <div className={styles.footerInsideContainer}>
        {footerTopSection()}
        {footerBottomSection()}
      </div>
    </div>
  );
};

export default Footer;
