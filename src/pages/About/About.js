import React from 'react';
import { Strings } from 'resources/Strings/eng';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/NavBar/Navbar';
import { applestoreimg, playstoreimg } from 'resources/Images/Images';
import SubscriptionCard from 'components/Cards/SubscriptionPlanCards/SubscriptionCard';
import {
  premiumPlansData,
  starPlanData,
} from 'constants/CommonData/CommonData';
import styles from './styles.module.css';
const About = () => {
  const { aboutPageStrings } = Strings;

  const aboutBannerSection = () => {
    return (
      <div className={styles.aboutBannerContainer}>
        <div className={styles.aboutBannerInsideContainer}>
          {aboutBannerInfoSection()}
          {aboutBannerButtonsSection()}
        </div>
      </div>
    );
  };

  const aboutBannerInfoSection = () => {
    return (
      <div className={styles.aboutBannerInfoBlock}>
        <h2 className={styles.aboutBannerMainHeading}>
          {aboutPageStrings.aboutBannerMainHeading}
        </h2>
        <p className={styles.aboutBannerSubDescOne}>
          {aboutPageStrings.aboutBannerSubDescOne}
        </p>

        <p className={styles.aboutBannerSubDescTwo}>
          {aboutPageStrings.aboutBannerSubDescTwo}
        </p>
      </div>
    );
  };

  const aboutBannerButtonsSection = () => {
    return (
      <div className={styles.aboutBannerButtonsBlock}>
        <div className={styles.appStoreImgBlock}>
          <img
            src={applestoreimg}
            alt="applestore"
            className={styles.imageWidth}
          />
        </div>
        <div className={styles.playStoreImgBlock}>
          <img
            src={playstoreimg}
            alt="playstore"
            className={styles.imageWidth}
          />
        </div>
      </div>
    );
  };

  const subscriptionPlansSection = () => {
    return (
      <div className={styles.subscriptionPlanContainer}>
        {subscriptionPlanTitleInfoSection()}
        <div className={styles.subscriptionPlanDetails}>
          {subscriptionPlanLeftSection()}

          {subscriptionPlanRightSection()}
        </div>
      </div>
    );
  };

  const subscriptionPlanTitleInfoSection = () => {
    return (
      <div className={styles.subscriptionPlanTitleInfo}>
        <h3 className={styles.subscriptionMainHeading}>
          {aboutPageStrings.subscriptionMainHeading}
        </h3>
        <p className={styles.subscriptionSubDesc}>
          {aboutPageStrings.subscriptionSubDesc}
        </p>
      </div>
    );
  };

  const subscriptionPlanLeftSection = () => {
    return (
      <div className={styles.subscriptionPlanLeftBlock}>
        <p className={styles.starPlansHeading}>{aboutPageStrings.starPlans}</p>
        {starPlanData &&
          starPlanData.map((item, index) => {
            return (
              <SubscriptionCard
                key={index}
                subscriptionPlanHeading={item.numberOfTags}
                subscriptionPrice={item.price}
                subscriptionValidity={item.validity}
                subscriptionImg={item.checkImg}
                subscriptionPlanLimitDesc={item.limit}
                subscriptionCheckImg={item.checkImg}
                subscriptionValidityDesc={item.planvalidity}
                subscriptionBorder={styles.starPlanStyles}
              />
            );
          })}
      </div>
    );
  };

  const subscriptionPlanRightSection = () => {
    return (
      <div className={styles.subscriptionPlanRightBlock}>
        <p className={styles.premiumPlansHeading}>
          {aboutPageStrings.premiumPlans}
        </p>
        <div className={styles.subscriptionPlanRightBlockDetails}>
          {premiumPlansData &&
            premiumPlansData.map((item, index) => {
              return (
                <SubscriptionCard
                  key={index}
                  subscriptionPlanHeading={item.numberOfTags}
                  subscriptionPrice={item.price}
                  subscriptionValidity={item.validity}
                  subscriptionImg={item.checkImg}
                  subscriptionPlanLimitDesc={item.limit}
                  subscriptionCheckImg={item.checkImg}
                  subscriptionValidityDesc={item.planvalidity}
                  subscriptionBorder={styles.premiumPlanBorder}
                  premiumPrice={styles.premiumPriceStyles}
                />
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {aboutBannerSection()}
      {subscriptionPlansSection()}
      <Footer />
    </div>
  );
};

export default About;
