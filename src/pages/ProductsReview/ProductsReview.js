import React, { useContext, useState } from 'react';
import { strings } from 'resources/Strings/eng';
import NavBar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';
import Button from 'components/Button/Button';
import {
  addlogo,
  prodoctreviewleftarrow,
  prodoctreviewrightarrow,
  subtractlogo,
} from 'resources/Images/Images';
import { Rating } from 'react-simple-star-rating';
import { HiStar } from 'react-icons/hi';
import styles from './styles.module.css';
import { productReviewData } from 'constants/CommonData/CommonData';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ProductDetails,
  individualProduct,
} from 'networking/Apis/singleproduct';
import { FeedBack } from 'networking/Apis/feedback';
import { UserDataContext } from 'providers/UserDataProvider';
import { cart } from 'networking/Apis/cart';
import { CartDataContext } from 'providers/CartDataProvider';
import { SpinnerContext } from 'providers/SpinnerProvider';

const ProductsReview = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { productReviewPageStrings } = strings;
  const { userDetails } = useContext(UserDataContext);
  const { cartData, handleCartData } = useContext(CartDataContext);
  const { setIsLoading } = useContext(SpinnerContext);
  //state
  const [productData, setProductData] = useState();
  const [productCount, setProductCount] = useState(0);
  const [feedback, setFeedback] = useState({
    rating: '',
    feedbackDescp: '',
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { setCartData, cartData } = useContext(AppDataContext);

  //useEffect
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state) {
      // userDetails && productDetails(location.state);
      productDetails(location.state);
    }
  }, [location.state, userDetails]);

  //api's
  const productDetails = async (id) => {
    try {
      setIsLoading(true);
      const response = await individualProduct(id);
      if (response.status === 200 && response.data.type === 'success') {
        // console.log(response, '....singleproduct');
        setIsLoading(false);
        setProductData(response.data.data);
      }
    } catch (error) {
      setIsLoading(true);
      console.log(error.message);
    }
  };

  // handle Feedback

  const handleFeedback = async (data) => {
    console.log(feedback, '....');
    // try {
    //   const response = await FeedBack(data);
    //   if (response.status === 200 && response.data.type === 'success') {
    //     console.log(data, 'review......');
    //   }
    // } catch (error) {}
  };
  // const addToCartApi = async () => {
  //   try {
  //     let data = {
  //       user_id: userDetails._id,
  //       product_id: location.state,
  //       quantity: productCount,
  //     };

  //     const response = await Cart(data);
  //     if (response.status === 200 && response.data.type === 'success') {
  //       console.log('cart response', response);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // handle adding product to cart while clicking the add to cart button

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);
      const addToCartData = {
        user_id: userDetails._id,
        product_id: location.state,
      };
      const existedProduct = cartData?.find(
        (item) => item.product._id === productData._id
      );
      console.log('existedProduct', existedProduct);
      const quantity = existedProduct ? existedProduct.quantity + 1 : 1;
      console.log('quantity', quantity);
      const updatedProduct = { ...addToCartData, quantity: quantity };
      console.log('updatedProduct', updatedProduct);
      const addToCartResponse = await cart(updatedProduct);
      if (
        addToCartResponse.data.type === 'success' &&
        addToCartResponse.status === 200
      ) {
        setIsLoading(false);
        // alert('product added to cart');
        handleCartData();
      }
    } catch (error) {
      console.log('error in adding handle add to cart');
      setIsLoading(true);
    }
  };

  // handle adding product to cart while clicking the buyNow

  const handleBuyNowProductData = async () => {
    try {
      setIsLoading(true);
      let buyNowProductData = {
        user_id: userDetails._id,
        product_id: location.state,
        quantity: 1,
      };
      const addingProductToCartResponse = await cart(buyNowProductData);
      if (
        addingProductToCartResponse.data.type === 'success' &&
        addingProductToCartResponse.status === 200
      ) {
        setIsLoading(false);
        console.log(addingProductToCartResponse, 'product added');
        handleCartData();
        navigate('/checkout', { state: productData._id });

        console.log('addingProductToCartResponse', addingProductToCartResponse);
      } else {
        console.log('error in handling product api response');
      }
    } catch {
      console.log('error in adding to cart ');
      setIsLoading(false);
    }
  };

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
        onClick={() => navigate('/products')}
      >
        <div className={styles.leftArrowStyles}>
          <img
            src={prodoctreviewleftarrow}
            alt=""
            className={styles.imageWidth}
          />
        </div>
        <p className={styles.backText}>{productReviewPageStrings.backText}</p>
      </div>
    );
  };

  const productDetailLeftSection = () => {
    const productImages =
      productData && productData.images && productData.images.additional;
    return (
      <div className={styles.productDetailLeftBlock}>
        {productImages &&
          productImages.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {index === currentIndex && (
                  <div className={styles.productsDetailsImgBlock}>
                    <img src={item} alt="" className={styles.imageWidth} />
                  </div>
                )}
              </React.Fragment>
            );
          })}

        <div className={styles.scrollButtonsBlock}>
          {productImages &&
            productImages.map((item, index) => {
              return (
                <span
                  onClick={() => setCurrentIndex(index)}
                  key={index}
                  className={
                    index === currentIndex
                      ? styles.scrollActiveButton
                      : styles.scrollButton
                  }
                >
                  {item.scrollButton}
                </span>
              );
            })}
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
        onClick={() => navigate('/products')}
      >
        <div className={styles.leftArrowStyles}>
          <img
            src={prodoctreviewleftarrow}
            alt=""
            className={styles.imageWidth}
          />
        </div>
        <p className={styles.backText}>{productReviewPageStrings.backText}</p>
      </div>
    );
  };

  const productDetailRightInfoSection = () => {
    return (
      <div className={styles.productDetailRightInfoBlock}>
        <div className={styles.productDetailRightInfo}>
          {productData?.name && (
            <h4 className={styles.productHeading}>{productData?.name}</h4>
          )}
          {productData?.short_description && (
            <p className={styles.productSubDesc}>
              {productData?.short_description}
            </p>
          )}
        </div>
        <div className={styles.productDetailRightPrices}>
          {productData?.price && (
            <p className={styles.productOfferPrice}>
              <span className={styles.productOfferPriceOne}>
                {productData?.price.currency}
              </span>
              {productData?.price.selling_price}
            </p>
          )}
          {productData?.price && (
            <p className={styles.productOriginalPrice}>
              &nbsp;
              <span className={styles.productOriginalPrice}>
                {productData?.price.currency}
                {productData?.price.original_price}
              </span>
            </p>
          )}
        </div>
      </div>
    );
  };

  const productDetailRightBottomSection = () => {
    return (
      <div className={styles.productDetailRightBottomSection}>
        <div className={styles.cartButtonSection}>
          {/* <div
            className={styles.subtractButtonSection}
            // onClick={() => subtractFunction()}
          >
            <img src={subtractlogo} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.numTextSection}>
            <p className={styles.numText}>{productCount}</p>
          </div>

          <div
            className={styles.addButtonSection}
            // onClick={() => addFunction()}
          >
            <img src={addlogo} alt="" className={styles.imageWidth} />
          </div> */}
        </div>
        <Button
          btName={productReviewPageStrings.productBtnName}
          btnStyles={styles.cartBtnStyles}
          onClick={() => handleAddToCart()}
        />
        {/* buy now  */}
        <div
          className={styles.productDetailRightDesc}
          // onClick={() => navigate('/checkout')}
          onClick={() => handleBuyNowProductData()}
        >
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
          initialValue="0"
          allowFraction
          fillColorArray={fillColor}
          onClick={(index) => setFeedback({ ...feedback, rating: index })}
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
            onChange={(e) =>
              setFeedback({ ...feedback, feedbackDescp: e.target.value })
            }
          ></textarea>
        </div>
        <Button
          btName={productReviewPageStrings.thoughtsBtnName}
          btnStyles={styles.thoughtBtnStyles}
          onClick={handleFeedback}
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
        {productReviewDataSection()}
      </div>
    );
  };

  const productReviewDataSection = () => {
    return (
      <>
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
      </>
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
