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
import { useMediaQuery } from '@mui/material';
import { userProfileData } from 'constants/CommonData/CommonData';
import { removeProductApi } from 'networking/Apis/removeProduct';
import { CartDataContext } from 'providers/CartDataProvider';
import { checkOut } from 'networking/Apis/checkOut';

const NavBar = () => {
  const { userDetails, handleLogout } = useContext(UserDataContext);
  const { cartData, handleCartData } = useContext(CartDataContext);
  const isWideScreen = useMediaQuery('(min-width: 867px)');
  const authToken = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const [closePopUp, setClosePopUp] = useState(false);

  //useState
  const [popOver, setPopOver] = useState(false);

  const [purchaseData, setPurchaseData] = useState();

  const { navbar } = strings;

  // remove product from cart

  const removeProductFromCart = async (id) => {
    const response = await removeProductApi({
      user_id: userDetails?._id,
      product_id: id,
    });
    if (response.data.type === 'success' && response.status === 200) {
      handleCartData();
      alert('removing product from cart');
    }
  };

  // proceed to payment page onclick the proceed to checkoutButton

  // adding of product

  const addFunction = (id) => {
    const newArray = purchaseData.map((product) => {
      if (product.product._id === _id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setPurchaseData(newArray);
  };

  // subtract the product

  const subtractFunction = (id) => {
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
    const noOfCartItems = cartData?.reduce(
      (sum, item) => item.quantity + sum,
      0
    );
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

        {/* Cart Section Start */}

        <div className={styles.cartSection}>
          <PopUp
            triggerElement={
              <>
                <img src={cartImg} alt="" className={styles.imageWidth} />
                {authToken ? <p>{noOfCartItems}</p> : ''}
              </>
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
                    {authToken ? (
                      <>
                        {cartData?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={styles.cartStylesSection}
                            >
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
                                      {item.product.price.selling_price} X
                                      {item.quantity}
                                    </span>
                                  </p>
                                </div>
                                <div className={styles.removeSection}>
                                  {/* <div className={styles.addSection}>
                                <div
                                  className={styles.subtractSection}
                                  onClick={() => subtractFunction(item.id)}
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
                              </div> */}
                                  <div
                                    className={styles.deleteSection}
                                    onClick={() =>
                                      removeProductFromCart(item.product._id)
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
                      </>
                    ) : (
                      ''
                    )}
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

        {/* Cart Section End */}

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
      <>
        {isWideScreen && (
          <div className={styles.userSignup}>
            <div className={styles.userProfileImgBlock}>
              <img
                src={userprofileimg}
                alt="userprofileimg"
                className={styles.imageWidth}
              />
            </div>

            {isWideScreen && (
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
            )}
          </div>
        )}
      </>
    );
  };

  // PopUpContent
  const handlePopoverContent = () => {
    return (
      <div className={styles.userProfileSection}>
        <div className={styles.userNameAndEmail}>
          <p className={styles.userName}>{userDetails?.full_name}</p>
          <p className={styles.userEmail}>{userDetails?.email}</p>
        </div>
        {userProfileData &&
          userProfileData.map((item, index) => (
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
                <p className={styles.userProfileOptions}>{item.profileDesc}</p>
              </div>
            </div>
          ))}
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
