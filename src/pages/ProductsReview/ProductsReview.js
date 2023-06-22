import React from 'react';
import { Strings } from 'resources/Strings/eng';
import NavBar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';
import Button from 'components/Button/Button';
import {
  prodoctreviewleftarrow,
  prodoctreviewrightarrow,
  productoneimg,
} from 'resources/Images/Images';
import styles from './styles.module.css';

const ProductsReview = () => {
  const { productReviewPageStrings } = Strings;
  const productDetailSection = () => {
    return (
      <div className={styles.productDetailsContainer}>
        <div className={styles.backTextBlockMobile}>
          <img
            src={prodoctreviewleftarrow}
            alt=""
            className={styles.imageWidth}
          />
          <p className={styles.backText}>{productReviewPageStrings.backText}</p>
        </div>
        {productDetailLeftSection()}
        {productsRightSection()}
      </div>
    );
  };

  const productDetailLeftSection = () => {
    return (
      <div className={styles.productDetailLeftBlock}>
        <div className={styles.productDetailLeftImgBlock}>
          <img
            src={productoneimg}
            alt="productImg"
            className={styles.productImageWidth}
          />
        </div>
        <div className={styles.scrollButtonsBlock}>
          <span className={styles.scrollButton}></span>
          <span className={styles.scrollButton}></span>
          <span className={styles.scrollButton}></span>
          <span className={styles.scrollButton}></span>
        </div>
      </div>
    );
  };

  const productsRightSection = () => {
    return (
      <div className={styles.productDetailRightBlock}>
        {productDetailRightTopSection()}
        {productDetailRightBottomSection()}
      </div>
    );
  };

  const productDetailRightTopSection = () => {
    return (
      <div className={styles.productDetailRightTopSection}>
        <div className={styles.backTextBlock}>
          <img
            src={prodoctreviewleftarrow}
            alt=""
            className={styles.imageWidth}
          />
          <p className={styles.backText}>{productReviewPageStrings.backText}</p>
        </div>
        <div className={styles.productDetailRightInfoBlock}>
          <div className={styles.productDetailRightInfo}>
            <h4 className={styles.productHeading}>
              {productReviewPageStrings.productHeading}
            </h4>
            <p className={styles.productSubDesc}>
              {productReviewPageStrings.productSubDesc}
            </p>
          </div>
          <div className={styles.productDetailRightPrices}>
            <p className={styles.productOfferPrice}>
              {productReviewPageStrings.productOfferPriceReview}
            </p>
            <p className={styles.productOriginalPrice}>
              {productReviewPageStrings.productOriginalPrice}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const productDetailRightBottomSection = () => {
    return (
      <div className={styles.productDetailRightBottomSection}>
        <Button
          btName={productReviewPageStrings.productBtnName}
          btnStyles={styles.cartBtnStyles}
        />
        <div className={styles.productDetailRightDesc}>
          <p className={styles.buyNowText}>
            {productReviewPageStrings.buyNowText}
          </p>
          <img
            src={prodoctreviewrightarrow}
            alt=""
            className={styles.imageWidth}
          />
        </div>
      </div>
    );
  };

  const userExperianceSection = () => {
    return <div></div>;
  };

  const ratingSection = () => {
    return <div></div>;
  };
  return (
    <div>
      <NavBar />
      {productDetailSection()}
      {userExperianceSection()}
      {ratingSection()}
      {/* <Footer /> */}
    </div>
  );
};

export default ProductsReview;
