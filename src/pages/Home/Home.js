import React from 'react';
import styles from './styles.module.css';
import { Strings } from 'resources/Strings/eng';
import { homebglogo, scrolldownlogo } from 'resources/Images/Images';
import NavBar from 'components/NavBar/Navbar';

const { homePage } = Strings;
const Home = () => {
  const homebannerSection = () => {
    return (
      <div className={styles.bannerSection}>
        <NavBar />
        <div className={styles.insideBannerSection}>
          {bannerTopSection()}
          {bannerBottomSection()}
        </div>
      </div>
    );
  };

  const bannerTopSection = () => {
    return (
      <div className={styles.insideBannerTopSection}>
        <div className={styles.bannerLeftSection}>
          <h2 className={styles.bannerHeader}>{homePage.bannerHeading}</h2>
          <p className={styles.bannerDescp}>{homePage.bannerDescription}</p>
        </div>
        <div className={styles.bannerRightSection}>
          <div className={styles.ellipseSection}>
            <span className={styles.ellipseOne}></span>
            <span className={styles.ellipseTwo}></span>
          </div>
          <div className={styles.scrollSection}>
            <p className={styles.scrollDesc}>{homePage.scrollText}</p>
            <div className={styles.downArrowIcon}>
              <img src={scrolldownlogo} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const bannerBottomSection = () => {
    return (
      <div className={styles.bottomSection}>
        <img src={homebglogo} alt="" className={styles.imageWidth} />
      </div>
    );
  };

  return <div>{homebannerSection()}</div>;
};

export default Home;
