import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import {
  addImg,
  cartImg,
  crossIcon,
  deleteIcon,
  hamburgerlogo,
  modalcloseiconimg,
  navbarlogo,
  subtractlogo,
  userprofileimg,
  userprofileuparrow,
} from 'resources/Images/Images';

import { strings } from 'resources/Strings/eng';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from 'providers/UserDataProvider';
import PopUp from 'components/PopUp/PopUp';
import { userProfileData } from 'constants/CommonData/CommonData';
const NavBar = () => {
  const { handleLogout } = useContext(UserDataContext);
  const authToken = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const [popOver, setPopOver] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const { navbar } = strings;

  const addFunction = () => {
    setProductCount(productCount + 1);
  };
  const subtractFunction = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };
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
    const authToken = localStorage.getItem('authToken');
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
          <PopUp
            triggerElement={
              <img src={cartImg} alt="" className={styles.imageWidth} />
            }
            content={
              <div className={styles.shoppingCart}>
                <div className={styles.gapSection}>
                  <div className={styles.shoppingTopSection}>
                    <h4 className={styles.shopppingHeader}>Shopping cart</h4>
                    <div className={styles.shoppingCrossImg}>
                      <img
                        src={modalcloseiconimg}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                  </div>
                  <div className={styles.shoppingBottomSection}>
                    <div className={styles.shoppingImgSection}>
                      <img src="" alt="" />
                    </div>
                    <div className={styles.shoppingRightSection}>
                      <div className={styles.textSection}>
                        <h4 className={styles.productHeader}>
                          Keychain tags - A pack of 4
                        </h4>
                        <p className={styles.priceSection}>Price - $100</p>
                      </div>
                      <div className={styles.removeSection}>
                        <div className={styles.addSection}>
                          <div
                            className={styles.subtractSection}
                            onClick={() => subtractFunction()}
                          >
                            <img
                              src={subtractlogo}
                              alt=""
                              className={styles.imageWidth}
                            />
                          </div>
                          <div className={styles.numSection}>
                            <p className={styles.numSectionStyles}>
                              {productCount}
                            </p>
                          </div>

                          <div
                            className={styles.addSectionOne}
                            onClick={() => addFunction()}
                          >
                            <img
                              src={addImg}
                              alt=""
                              className={styles.imageWidth}
                            />
                          </div>
                        </div>
                        <div className={styles.deleteSection}>
                          <img
                            src={deleteIcon}
                            alt=""
                            className={styles.imageWidth}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.checkoutBtn}>
                  <Button
                    btName={'Proceed to checkout'}
                    btnStyles={styles.checkOutStyles}
                  />
                </div>
              </div>
            }
          />
        </div>

        {authToken ? (
          <div>{userProfileSection()}</div>
        ) : (
          <div className={styles.navBarButton}>
            <Button
              onClick={() => navigate('/login')}
              btName={navbar.login}
              btnStyles={styles.loginStyles}
            />
          </div>
        )}

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

  // userProfile Section

  const userProfileSection = () => {
    return (
      <div className={styles.userSignup}>
        <div className={styles.userProfileImgBlock}>
          <img
            src={userprofileimg}
            alt="userprofileimg"
            className={styles.imageWidth}
          />
        </div>

        <div className={styles.userProfileuparrowBlock}>
          <PopUp
            triggerElement={
              <img
                src={userprofileuparrow}
                alt="userprofileimg"
                className={styles.imageWidth}
              />
            }
            content={handlePopoverContent()}
          />
        </div>
      </div>
    );
  };

  // PopUpContent
  const handlePopoverContent = () => {
    return (
      <div className={styles.userProfileSection}>
        {userProfileData &&
          userProfileData.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.userProfileFeaturesBlock}
                onClick={() => {
                  if (index === 2) {
                    handleLogout();
                  }
                }}
              >
                <div className={styles.userProfileImgBlock}>
                  <img
                    src={item.profileImg}
                    className={styles.imageWidth}
                    alt="userProfileFeature"
                  />
                </div>
                <div>
                  <p className={styles.userProfileOptions}>
                    {item.profileDesc}
                  </p>
                </div>
              </div>
            );
          })}
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
            {authToken ? (
              <div>hi</div>
            ) : (
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
            )}

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
