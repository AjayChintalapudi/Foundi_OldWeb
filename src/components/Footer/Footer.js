import React from 'react';
import { Strings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { footerIconsData } from 'constants/CommonData/CommonData';
import styles from './styles.module.css';

const Footer = () => {
  // Footer Section Strings

  const { footerStrings } = Strings;

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
          <Input
            customInputStyles={styles.footerInputStyles}
            placeholder={footerStrings.footerPlaceHolderText}
          />
          <div className={styles.footerButtonContainer}>
            <Button btName="submit" btnStyles={styles.footerBtnStyles} />
            <Button btName=">" btnStyles={styles.footerBtnIconStyles} />
          </div>
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
