import React from 'react';
import NavBar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';
import Button from 'components/Button/Button';
import { Strings } from 'resources/Strings/eng';
import styles from './styles.module.css';
import {
  productCategoriesHeadingData,
  productsData,
} from 'constants/CommonData/CommonData';
import ProductsCard from 'components/Cards/ProductsCard/ProductsCard';

const Products = () => {
  const { productPageStrings } = Strings;

  const productsBannerSection = () => {
    return (
      <div className={styles.productsBannerMainContainer}>
        <div className={styles.productsBannerInsideContainer}>
          <div className={styles.productsBannerInfoBlock}>
            <h2 className={styles.productsBannerMainHeading}>
              {productPageStrings.productsBannerMainHeading}
            </h2>
            <p className={styles.productsBannerSubDesc}>
              {productPageStrings.productsBannerSubDesc}
            </p>
          </div>
          <div className={styles.productsBannerButtonsBlock}>
            <Button
              btName={productPageStrings.productsBannerButtonName}
              btnStyles={styles.productsBtnStyles}
            />
            <div className={styles.scollButtonBlock}>
              <span className={styles.scrollButton}></span>
              <span className={styles.scrollButton}></span>
              <span className={styles.scrollButton}></span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const productDetailsSection = () => {
    return (
      <div className={styles.productDetailsContainer}>
        <div className={styles.productDetailsTitleInfo}>
          <h3 className={styles.productsMainHeading}>
            {productPageStrings.productsMainHeading}
          </h3>
          <p className={styles.productsSubDesc}>
            {productPageStrings.productsSubDesc}
          </p>
        </div>
        <div className={styles.productCategoriesBlock}>
          {productCategoriesHeadingData &&
            productCategoriesHeadingData.map((item, index) => {
              return (
                <p
                  key={index}
                  className={
                    index === 0
                      ? styles.productCategoryHeading
                      : styles.productCategoryHeadingHover
                  }
                >
                  {item.productCategoryHeading}
                </p>
              );
            })}
        </div>
        <div className={styles.productsDetails}>
          {productsData &&
            productsData.map((item, index) => {
              return (
                <ProductsCard
                  key={index}
                  productImg={item.productImg}
                  productHeading={item.productHeading}
                  productOfferPrice={item.productOfferPrice}
                  productOriginalPrice={item.productOriginalPrice}
                />
              );
            })}
        </div>
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
