import React from 'react';
import styles from './styles.module.css';
import { Strings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { footerIconsData } from 'constants/CommonData/CommonData';

const Footer = () => {
  const { footerStrings } = Strings;

  const footerTopSection = () => {
    return (
      <div className={styles.footerTopSection}>
        <div className={styles.footerTopSectionLeftBlock}>
          <h3 className={styles.footerMainHeading}>
            {footerStrings.footerMainHeading}
          </h3>
          <p className={styles.footerSubDesc}>{footerStrings.footerSubDesc}</p>
        </div>
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
      </div>
    );
  };

  const footerBottomSection = () => {
    return (
      <div className={styles.footerBottomSection}>
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
        <div className={styles.footerBottomSectionRightBlock}>
          <span className={styles.rightBorderDivider}></span>
          <div className={styles.bottomBorder}></div>
          <p className={styles.footerCopyRightDesc}>
            {footerStrings.footerCopyRightDesc}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.footerContainer}>
      {footerTopSection()}
      {footerBottomSection()}
    </div>
  );
};

export default Footer;
