import React, { useState } from 'react';
import styles from './styles.module.css';
import {
  cartImg,
  crossIcon,
  hamburgerlogo,
  navbarlogo,
} from 'resources/Images/Images';
import { Strings } from 'resources/Strings/eng';
import Button from 'components/Button/Button';

const { navbar } = Strings;
const NavBar = () => {
  const [popOver, setPopOver] = useState(false);

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
            <img
              src={popOver ? crossIcon : hamburgerlogo}
              alt=""
              className={styles.imageWidth}
              onClick={() => setPopOver(!popOver)}
            />
          </div>
        </div>
      </div>
      {popOver && (
        <div className={styles.popOverSection}>
          <div className={styles.insidePopOver}>
            <div className={styles.useProfileSection}>
              <p className={styles.userProfileText}>{navbar.userProfile}</p>
              <div className={styles.loginButtonSection}>
                <Button
                  btName={navbar.login}
                  btnStyles={styles.popOverLoginStyles}
                />
              </div>
            </div>
            <p className={styles.popOverBusinessText}>{navbar.events}</p>
            <p className={styles.popOverProductsText}>{navbar.products}</p>
            <p className={styles.popOverAboutText}>{navbar.about}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
