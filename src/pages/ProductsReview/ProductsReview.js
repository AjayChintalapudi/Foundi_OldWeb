import React from 'react';
import { strings } from 'resources/Strings/eng';
import NavBar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';
import Button from 'components/Button/Button';
import {
  prodoctreviewleftarrow,
  prodoctreviewrightarrow,
  productoneimg,
} from 'resources/Images/Images';
import { Rating } from 'react-simple-star-rating';
import { HiStar } from 'react-icons/hi';
import styles from './styles.module.css';
import { productReviewData } from 'constants/CommonData/CommonData';
import { useNavigate } from 'react-router-dom';

const ProductsReview = () => {
  // const navigate = useNavigate();
  const { productReviewPageStrings } = strings;
  const productDetailSection = () => {
    return (
      <div className={styles.productDetailsContainer}>
        {backTextSection()}
        {productDetailLeftSection()}
        {productsRightSection()}
      </div>
    );
  };

  const backTextSection = () => {
    return (
      <div
        className={styles.backTextBlockMobile}
        // onClick={() => navigate('/products')}
      >
        <img
          src={prodoctreviewleftarrow}
          alt=""
          className={styles.imageWidth}
        />
        <p className={styles.backText}>{productReviewPageStrings.backText}</p>
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
        {backTextRightSection()}
        {productDetailRightInfoSection()}
      </div>
    );
  };

  const backTextRightSection = () => {
    return (
      <div
        className={styles.backTextBlock}
        // onClick={() => navigate('/products')}
      >
        <img
          src={prodoctreviewleftarrow}
          alt=""
          className={styles.imageWidth}
        />
        <p className={styles.backText}>{productReviewPageStrings.backText}</p>
      </div>
    );
  };

  const productDetailRightInfoSection = () => {
    return (
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
    );
  };

  const productDetailRightBottomSection = () => {
    return (
      <div className={styles.productDetailRightBottomSection}>
        <Button
          btName={productReviewPageStrings.productBtnName}
          btnStyles={styles.cartBtnStyles}
          // onClick={() => navigate('/checkout')}
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

  const fillColor = ['#FFC700'];
  const customIcons = [
    { icon: <HiStar size={40} /> },
    { icon: <HiStar size={40} /> },
    { icon: <HiStar size={40} /> },
    { icon: <HiStar size={40} /> },
    { icon: <HiStar size={40} /> },
  ];

  const userExperianceSection = () => {
    return (
      <div className={styles.userExperianceMainContainer}>
        <div className={styles.userExperianceContainer}>
          {userExperianceLeftSection()}
          {userExperianceRightSection()}
        </div>
      </div>
    );
  };

  const userExperianceLeftSection = () => {
    return (
      <div className={styles.userExperianceLeftBlock}>
        {shareExperianceDetailsSection()}
        {UserRatingSection()}
      </div>
    );
  };

  const shareExperianceDetailsSection = () => {
    return (
      <div className={styles.shareExperianceDetails}>
        <h3 className={styles.shareExperianceHeading}>
          {productReviewPageStrings.shareExperianceHeading}
        </h3>
        <p className={styles.shareExperianceDesc}>
          {productReviewPageStrings.shareExperianceDesc}
          <span className={styles.shareExperianceNoteHeading}>
            {productReviewPageStrings.shareExperianceNoteHeading}
          </span>
          &nbsp;
          <span className={styles.shareExperianceDescOne}>
            {productReviewPageStrings.shareExperianceDescOne}
          </span>
        </p>
      </div>
    );
  };

  const UserRatingSection = () => {
    return (
      <div className={styles.userRatingBlock}>
        <Rating
          customIcons={customIcons}
          initialValue="3"
          allowFraction
          readonly={true}
          fillColorArray={fillColor}
        />
      </div>
    );
  };

  const userExperianceRightSection = () => {
    return (
      <div className={styles.userExperianceRightBlock}>
        <div className={styles.userExperianceRightTopSection}>
          <p className={styles.thoughtsDesc}>
            {productReviewPageStrings.thoughtsDesc}
          </p>
          <textarea
            className={styles.userExperianceTextArea}
            placeholder={productReviewPageStrings.thoughtsPlaceHolderText}
          ></textarea>
        </div>
        <Button
          btName={productReviewPageStrings.thoughtsBtnName}
          btnStyles={styles.thoughtBtnStyles}
        />
      </div>
    );
  };

  const ratingSection = () => {
    return (
      <div className={styles.ratingMainContainer}>
        <div className={styles.ratingContainer}>
          {ratingTitleInfoSection()}
          {reviewRatingSection()}
          {loadMoreButtonSection()}
        </div>
      </div>
    );
  };

  const ratingTitleInfoSection = () => {
    return (
      <div className={styles.ratingTitleInfoBlock}>
        <h3 className={styles.ratingMainHeading}>
          {productReviewPageStrings.ratingMainHeading}
        </h3>
        <p className={styles.ratingSubDesc}>
          {productReviewPageStrings.ratingSubDesc}
        </p>
      </div>
    );
  };

  const reviewRatingSection = () => {
    return (
      <div className={styles.reviewRatingBlock}>
        {productReviewData &&
          productReviewData.map((item, index) => {
            return (
              <div key={index} className={styles.productRatingSubContainer}>
                <div className={styles.ratingTopSection}>
                  <Rating
                    customIcons={customIcons}
                    initialValue={item.rating}
                    allowFraction
                    readonly={true}
                    fillColor="#194f59"
                    className="reviewstars"
                  />
                  <div className={styles.ratedUserInfoBlock}>
                    <p className={styles.ratedUserName}>{item.ratedUserName}</p>
                    <p className={styles.ratedDesc}>{item.ratedDesc}</p>
                  </div>
                </div>
                <div className={styles.ratingBottomBorder}></div>
              </div>
            );
          })}
      </div>
    );
  };

  const loadMoreButtonSection = () => {
    return (
      <div className={styles.loadMoreButton}>
        <Button
          btName={productReviewPageStrings.ratingLoadMoreBtnName}
          btnStyles={styles.ratingLoadMoreBtnStyles}
        />
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {productDetailSection()}
      {userExperianceSection()}
      {ratingSection()}
      <Footer />
    </div>
  );
};

export default ProductsReview;
