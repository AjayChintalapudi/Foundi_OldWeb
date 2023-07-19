import React, { useContext, useEffect, useState } from 'react';
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
import { PopUpCart } from 'networking/Apis/popupcart';
import { RemoveCart } from 'networking/Apis/removecart';
import { AppDataContext } from 'providers/AppDataProvider';

const NavBar = () => {
  const { handleLogout } = useContext(UserDataContext);
  const authToken = localStorage.getItem('authToken');
  const navigate = useNavigate();
  const { userDetails } = useContext(UserDataContext);
  const { cartData, setCartData } = useContext(AppDataContext);
  //mapping data
  // const cartData = [
  //   {
  //     id: 1,
  //     image: '',
  //     heading: 'Keychain tags - A pack of 4',
  //     descp: ' ',
  //     currency: '$',
  //     quantity: 1,
  //     price: '100',
  //   },
  //   {
  //     id: 2,
  //     image: '',
  //     heading: 'Keychain tags - A pack of 4',
  //     descp: 'Price - ',
  //     currency: '$',
  //     quantity: 1,
  //     price: '100',
  //   },
  // ];

  //useState
  const [popOver, setPopOver] = useState(false);
  const [purchaseData, setPurchaseData] = useState();
  const [popUp, setPopUp] = useState(false);

  const { navbar } = strings;

  useEffect(() => {
    popUpCartApi();
  }, []);

  const popUpCartApi = async () => {
    try {
      let data = {
        user_id: userDetails._id,
      };
      const response = await PopUpCart(data);
      if (response.data.type === 'success' && response.status === 200) {
        setPurchaseData(response.data.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartApi = async (product_id) => {
    try {
      let removeData = {
        user_id: userDetails._id,
        product_id: product_id,
      };
      const response = await RemoveCart(removeData);
      if (response.status === 200 && response.data.type === 'success') {
        popUpCartApi();
      }
    } catch (error) {}
  };

  const addFunction = (_id) => {
    const newArray = purchaseData.map((product) => {
      if (product.product._id === _id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setPurchaseData(newArray);
  };
  const subtractFunction = (_id) => {
    const newArray = purchaseData.map((product) => {
      if (product.product._id === _id) {
        if (product.quantity === 1) {
          return product;
        } else {
          return { ...product, quantity: product.quantity - 1 };
        }
      }
      return product;
    });
    setPurchaseData(newArray);
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
              <div>
                <img src={cartImg} alt="" className={styles.imageWidth} />
                <p>{purchaseData && purchaseData.length}</p>
              </div>
            }
            content={
              <div className={styles.shoppingCart}>
                <div className={styles.gapSection}>
                  <div className={styles.shoppingTopSection}>
                    <h4 className={styles.shopppingHeader}>
                      {navbar.shopping}
                    </h4>
                    <div
                      className={styles.shoppingCrossImg}
                      onClick={() => setPopUp(!popUp)}
                    >
                      <img
                        src={modalcloseiconimg}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                  </div>

                  <div className={styles.shoppingBottomSection}>
                    {purchaseData &&
                      purchaseData.map((item, index) => {
                        return (
                          <div key={index} className={styles.cartStylesSection}>
                            <div className={styles.shoppingImgSection}>
                              <img
                                src={item.product.images.thumbnail}
                                alt=""
                                className={styles.imageWidth}
                              />
                            </div>
                            <div className={styles.shoppingRightSection}>
                              <div className={styles.textSection}>
                                <h4 className={styles.productHeader}>
                                  {item.product.name}
                                </h4>
                                <p className={styles.priceSection}>
                                  Price - &nbsp;
                                  <span className={styles.priceSection}>
                                    {item.product.price.currency}
                                  </span>
                                  <span className={styles.priceSection}>
                                    {item.product.price.selling_price}
                                  </span>
                                </p>
                              </div>
                              <div className={styles.removeSection}>
                                <div className={styles.addSection}>
                                  <div
                                    className={styles.subtractSection}
                                    onClick={() =>
                                      subtractFunction(item.product._id)
                                    }
                                  >
                                    <img
                                      src={subtractlogo}
                                      alt=""
                                      className={styles.imageWidth}
                                    />
                                  </div>
                                  <div className={styles.numSection}>
                                    <p className={styles.numSectionStyles}>
                                      {item.quantity}
                                    </p>
                                  </div>

                                  <div
                                    className={styles.addSectionOne}
                                    onClick={() =>
                                      addFunction(item.product._id)
                                    }
                                  >
                                    <img
                                      src={addImg}
                                      alt=""
                                      className={styles.imageWidth}
                                    />
                                  </div>
                                </div>
                                <div
                                  className={styles.deleteSection}
                                  onClick={() =>
                                    removeCartApi(item.product._id)
                                  }
                                >
                                  <img
                                    src={deleteIcon}
                                    alt=""
                                    className={styles.imageWidth}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className={styles.checkoutBtn}>
                  <Button
                    btName={'Proceed to checkout'}
                    btnStyles={styles.checkOutStyles}
                    onClick={() => navigate('/checkout')}
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
