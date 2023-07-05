import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { strings } from 'resources/Strings/eng';
import { bannerleftarrow, eventsbottomleftimg } from 'resources/Images/Images';
import NavBar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';
import { eventsBuissnessData } from 'constants/CommonData/CommonData';

const Events = () => {
  const { eventsPageStrings } = strings;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventsBannerSection = () => {
    return (
      <div className={styles.eventsBannerContainer}>
        <div className={styles.eventsBannerSubContainer}>
          <div className={styles.eventsBannerInsideContainer}>
            {eventsTopSection()}
            {eventsBottomSection()}
          </div>
        </div>
      </div>
    );
  };

  const eventsTopSection = () => {
    return (
      <div className={styles.eventsTopSection}>
        <h3 className={styles.bannerMainHeading}>
          {eventsPageStrings.bannerMainHeading}
        </h3>
        <p className={styles.bannerSubHeading}>
          {eventsPageStrings.bannerSubHeading}
        </p>
      </div>
    );
  };

  const eventsBottomSection = () => {
    return (
      <div className={styles.eventsBottomSection}>
        <div className={styles.eventsBottomSectionLeftBlock}>
          <div className={styles.eventsleftImgBlock}>
            <img
              src={eventsbottomleftimg}
              alt="eventsbottomleftimg"
              className={styles.imageWidth}
            />
          </div>
          <div className={styles.eventsleftBlockBottomSection}>
            <p className={styles.bannerLeftBottomSubDesc}>
              {eventsPageStrings.bannerLeftBottomSubDesc}
            </p>
            <div className={styles.bannerleftarrowImgBlock}>
              <img
                src={bannerleftarrow}
                alt="bannerleftarrow"
                className={styles.imageWidth}
              />
            </div>
          </div>
        </div>
        <div className={styles.eventsBottomSectionRightBlock}>
          <p className={styles.eventsRightSubDesc}>
            {eventsPageStrings.eventsRightSubDesc}
          </p>
        </div>
      </div>
    );
  };

  const eventsBuissnessSection = () => {
    return (
      <div className={styles.eventsBuissnessContainer}>
        <div className={styles.eventsBuissnessInsideContainer}>
          {eventsBuissnessTitleInfoSection()}
          <div className={styles.eventsBuissnessDivider}></div>
        </div>
        {eventsBuissnessDetailsSection()}
      </div>
    );
  };

  const eventsBuissnessTitleInfoSection = () => {
    return (
      <div className={styles.eventsBuissnessTitleInfo}>
        <h2 className={styles.eventsMainHeading}>
          {eventsPageStrings.eventsMainHeading}
        </h2>
        <p className={styles.eventsSubDesc}>
          {eventsPageStrings.eventsSubDesc}
        </p>
      </div>
    );
  };

  const eventsBuissnessDetailsSection = () => {
    return (
      <div className={styles.eventsBuissnessDetailsContainer}>
        {eventsBuissnessData &&
          eventsBuissnessData.map((item, index) => {
            return (
              <div key={index} className={styles.eventsBuissnessDetails}>
                <div className={styles.eventsBuissnessImgBlock}>
                  <img
                    src={item.eventsBuinessImg}
                    className={styles.imageWidth}
                  />
                </div>
                <div className={styles.eventsBuinessInfoBlock}>
                  <h3 className={styles.eventsDetailsHeadingOne}>
                    {item.eventsDetailsHeadingOne}
                  </h3>
                  <p className={styles.eventsDetailsSubDescOne}>
                    <span className={styles.eventsDetailsSubHeadingOne}>
                      {item.eventsDetailsSubHeadingOne}
                    </span>
                    &nbsp;
                    {item.eventsDetailsSubDescOne}
                  </p>
                  <p className={styles.eventsDetailsSubDescTwo}>
                    <span className={styles.eventsDetailsSubHeadingTwo}>
                      {item.eventsDetailsSubHeadingTwo}
                    </span>
                    &nbsp;
                    {item.eventsDetailsSubDescTwo}
                  </p>
                  <p className={styles.eventsDetailsSubHeadingThree}>
                    <span className={styles.eventsDetailsDescThree}>
                      {item.eventsDetailsSubHeadingThree}
                    </span>
                    &nbsp;
                    {item.eventsDetailsSubDescThree}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className={styles.eventsMainContainer}>
      <NavBar />
      {eventsBannerSection()}
      {eventsBuissnessSection()}
      <Footer />
    </div>
  );
};

export default Events;
