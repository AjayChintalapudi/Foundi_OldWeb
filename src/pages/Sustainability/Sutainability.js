import React from 'react';
import NavBar from 'components/NavBar/Navbar';
import Button from 'components/Button/Button';
import Footer from 'components/Footer/Footer';
import styles from './styles.module.css';
import { strings } from 'resources/Strings/eng';
import { sustainabilityglobeimg } from 'resources/Images/Images';
import { sustainabilityEffortsData } from 'constants/CommonData/CommonData';
import { useNavigate } from 'react-router-dom';

const Sutainability = () => {
  const { sustainabilityPageStrings } = strings;
  const navigate=useNavigate()
  const sustainabilityBannerSection = () => {
    return (
      <div className={styles.bannerMainContainer}>
        <div className={styles.bannerSubContainer}>
          {bannerLeftSection()}
          {bannerRightSection()}
        </div>
      </div>
    );
  };

  const bannerLeftSection = () => {
    return (
      <div className={styles.bannerLeftContainer}>
        <img
          src={sustainabilityglobeimg}
          alt=""
          className={styles.imageWidth}
        />
      </div>
    );
  };

  const bannerRightSection = () => {
    return (
      <div className={styles.bannerRightContainer}>
        <div className={styles.bannerRightInfoBlock}>
          <p className={styles.sustainabilityBannerHeading}>
            {sustainabilityPageStrings.sustainabilityBannerHeading}
            <span className={styles.sustainabilityBannerSubHeading}>
              {' '}
              {sustainabilityPageStrings.sustainabilityBannerSubHeading}
            </span>
            &nbsp;
            {sustainabilityPageStrings.sustainabilityBannerSubHeadingOne}
          </p>
          <p className={styles.sustainabilityBannerDesc}>
            {sustainabilityPageStrings.sustainabilityBannerDesc}
          </p>
        </div>
        <Button
          btName={sustainabilityPageStrings.learMoreBtnName}
          btnStyles={styles.learnMoreBtnStyles}
        />
      </div>
    );
  };

  const sustainabilityEffortsSection = () => {
    return (
      <div className={styles.sustainabilityEffortsMainContainer}>
        <div className={styles.sustainabilityEffortsContainer}>
          {sustainabilityEffortsData &&
            sustainabilityEffortsData.map((item, index) => {
              return (
                <div key={index} className={styles.sustainabilitySubContainer}>
                  <div className={styles.sustainabilityTitleInfo}>
                    <h2 className={styles.sustainabiltyHeading}>
                      {item.sustainabiltyHeading}
                    </h2>
                    <p className={styles.sustainabiltyDescOne}>
                      {item.sustainabiltyDescOne}
                    </p>
                    <p className={styles.sustainabiltyDescTwo}>
                      {item.sustainabiltyDescTwo}
                    </p>
                  </div>
                  <div className={styles.sustainabilityDivider}></div>
                  <div className={styles.sustainabilityImgBlock}>
                    <img
                      src={item.sustainabiltyImg}
                      className={styles.sustainabilityImageWidth}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {sustainabilityBannerSection()}
      {sustainabilityEffortsSection()}
      <Footer />
    </div>
  );
};

export default Sutainability;
