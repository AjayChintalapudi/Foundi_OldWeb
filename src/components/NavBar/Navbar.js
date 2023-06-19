import React from 'react';
import styles from './styles.module.css';
import { cartImg, hamburgerlogo, navbarlogo } from 'resources/Images/Images';
import { Strings } from 'resources/Strings/eng';
import Button from 'components/Button/Button';

const { navbar } = Strings;
const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.insideNavBar}>
        <div className={styles.leftSection}>
          <div className={styles.navBarLogo}>
            <img src={navbarlogo} alt="" className={styles.imageWidth} />
          </div>
          <p className={styles.LogoText}>{navbar.logoHeading}</p>
        </div>
        <div className={styles.rightSection}>
          <p className={styles.eventsSection}>{navbar.events}</p>
          <p className={styles.aboutSection}>{navbar.about}</p>
          <p className={styles.productsSection}>{navbar.products}</p>
          <div className={styles.cartSection}>
            <img src={cartImg} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.navBarButton}>
            <Button btName={navbar.login} btnStyles={styles.loginStyles} />
          </div>
          <div className={styles.hamburgerIcon}>
            <img src={hamburgerlogo} alt="" className={styles.imageWidth} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
