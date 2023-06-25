import React, { useState } from 'react';
import styles from './styles.module.css';
import {
  cartImg,
  crossIcon,
  hamburgerlogo,
  navbarlogo,
} from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';

const { navbar } = strings;
const NavBar = () => {
  const navigate = useNavigate();
  const [popOver, setPopOver] = useState(false);

  const leftSection = () => {
    return (
      <div onClick={() => navigate('/')} className={styles.leftSection}>
        <div className={styles.navBarLogo}>
          <img src={navbarlogo} alt="" className={styles.imageWidth} />
        </div>
        <p className={styles.LogoText}>{navbar.logoHeading}</p>
      </div>
    );
  };

  const rightSection = () => {
    return (
      <div className={styles.rightSection}>
        <p onClick={() => navigate('/events')} className={styles.eventsSection}>
          {navbar.events}
        </p>
        <p onClick={() => navigate('/about')} className={styles.aboutSection}>
          {navbar.about}
        </p>
        <p
          onClick={() => navigate('/products')}
          className={styles.productsSection}
        >
          {navbar.products}
        </p>
        <div className={styles.cartSection}>
          <img src={cartImg} alt="" className={styles.imageWidth} />
        </div>
        <div className={styles.navBarButton}>
          <Button
            onClick={() => navigate('/login')}
            btName={navbar.login}
            btnStyles={styles.loginStyles}
          />
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
    );
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.insideNavBar}>
        {leftSection()}
        {rightSection()}
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
                  onClick={() => navigate('/login')}
                />
              </div>
            </div>
            <p
              onClick={() => navigate('/events')}
              className={styles.popOverBusinessText}
            >
              {navbar.events}
            </p>
            <p
              onClick={() => navigate('/products')}
              className={styles.popOverProductsText}
            >
              {navbar.products}
            </p>
            <p
              onClick={() => navigate('/about')}
              className={styles.popOverAboutText}
            >
              {navbar.about}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
