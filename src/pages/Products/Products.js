import React, { useEffect, useState } from 'react';
import NavBar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';
import Button from 'components/Button/Button';
import { strings } from 'resources/Strings/eng';
import styles from './styles.module.css';
import { productCategoriesHeadingData } from 'constants/CommonData/CommonData';
import ProductsCard from 'components/Cards/ProductsCard/ProductsCard';
import { useNavigate } from 'react-router-dom';
import { EcomProducts } from 'networking/Apis/ecomproducts';

const Products = () => {
  const navigate = useNavigate();
  const { productPageStrings } = strings;

  /*productInfoData*/

  const productInfoData = [
    {
      productsBannerMainHeading:
        productPageStrings.productsBannerMainHeading + '1',
      productsBannerSubDesc: productPageStrings.productsBannerSubDesc + '1',
    },
    {
      productsBannerMainHeading:
        productPageStrings.productsBannerMainHeading + '2',
      productsBannerSubDesc: productPageStrings.productsBannerSubDesc + '2',
    },
    {
      productsBannerMainHeading:
        productPageStrings.productsBannerMainHeading + '3',
      productsBannerSubDesc: productPageStrings.productsBannerSubDesc + '3',
    },
  ];
  const [productDetails, setProductDetails] = useState();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoryProducts, setCategoryProducts] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollButtonClick = (increment) => {
    const newIndex =
      (currentIndex + increment + productInfoData.length) %
      productInfoData.length;
    setCurrentIndex(newIndex);
  };

  /*select categories*/
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const categoryProducts = productDetails.filter(
      (item) => item.category.title === category
    );
    setCategoryProducts(category === 'All' ? productDetails : categoryProducts);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    productsResponse();
  }, []);

  // get Ecom products

  const productsResponse = async () => {
    try {
      const response = await EcomProducts();
      console.log(response);
      if (response.status === 200 && response.data.type === 'success') {
        setProductDetails(response.data.data);
        setCategoryProducts(response.data.data);
      }
    } catch (error) {
      console.log('error in getting product details');
    }
  };

  const productsBannerSection = () => {
    return (
      <div className={styles.productsBannerMainContainer}>
        <div className={styles.productsBannerInsideContainer}>
          {productsBannerInfoSection()}
          {productsBannerButtonsSection()}
        </div>
      </div>
    );
  };

  const productsBannerInfoSection = () => {
    const currentItem = productInfoData[currentIndex];
    // console.log('currentIndex:', currentIndex);
    // console.log('currentItem:', currentItem);
    return (
      <div className={styles.productsBannerInfoBlock}>
        {productInfoData &&
          productInfoData.map((item, index) => {
            return (
              currentIndex === index && (
                <div className={styles.productsBannerInfoSubBlock} key={index}>
                  <h2 className={styles.productsBannerMainHeading}>
                    {currentItem.productsBannerMainHeading}
                  </h2>
                  <p className={styles.productsBannerSubDesc}>
                    {currentItem.productsBannerSubDesc}
                  </p>
                </div>
              )
            );
          })}
      </div>
    );
  };

  const productsBannerButtonsSection = () => {
    return (
      <div className={styles.productsBannerButtonsBlock}>
        <Button
          btName={productPageStrings.productsBannerButtonName}
          btnStyles={styles.productsBtnStyles}
        />

        <div className={styles.scollButtonBlock}>
          {productInfoData.map((item, index) => (
            <span
              key={index}
              className={
                currentIndex === index
                  ? styles.scrollButton
                  : styles.scrollButtonInActive
              }
              onClick={() => handleScrollButtonClick(index - currentIndex)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  const productDetailsSection = () => {
    return (
      <div className={styles.productDetailsContainer}>
        {productDetailsTitleInfo()}
        {productCategoriesSection()}
        {productsDetailsSection()}
      </div>
    );
  };

  const productDetailsTitleInfo = () => {
    return (
      <div className={styles.productDetailsTitleInfo}>
        <h3 className={styles.productsMainHeading}>
          {productPageStrings.productsMainHeading}
        </h3>
        <p className={styles.productsSubDesc}>
          {productPageStrings.productsSubDesc}
        </p>
      </div>
    );
  };

  const productCategoriesSection = () => {
    return (
      <div className={styles.productCategoriesBlock}>
        {productCategoriesHeadingData &&
          productCategoriesHeadingData.map((item, index) => {
            return (
              <p
                key={index}
                className={
                  item.productCategoryHeading === selectedCategory
                    ? styles.productCategoryHeading
                    : styles.productCategoryHeadingSelected
                }
                onClick={() => handleCategoryClick(item.productCategoryHeading)}
              >
                {item.productCategoryHeading}
              </p>
            );
          })}
      </div>
    );
  };

  const productsDetailsSection = () => {
    return (
      <div className={styles.productsDetails}>
        {categoryProducts &&
          categoryProducts.map((item, index) => {
            return (
              <ProductsCard
                key={index}
                productImg={item.images.additional[0]}
                productHeading={item.name}
                productCurrency={item.price.currency}
                productOfferPrice={item.price.selling_price}
                productCurrencyOne={item.price.currency}
                productOriginalPrice={item.price.original_price}
                onClick={() => navigate('/productreview', { state: item._id })}
              />
            );
          })}
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {productsBannerSection()}
      {productDetailsSection()}
      <Footer />
    </div>
  );
};

export default Products;
