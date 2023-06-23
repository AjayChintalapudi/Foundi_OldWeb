import React from 'react';
import NavBar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';
import Button from 'components/Button/Button';
import { strings } from 'resources/Strings/eng';
import styles from './styles.module.css';
import {
  productCategoriesHeadingData,
  productsData,
} from 'constants/CommonData/CommonData';
import ProductsCard from 'components/Cards/ProductsCard/ProductsCard';

const Products = () => {
  const { productPageStrings } = strings;

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
    return (
      <div className={styles.productsBannerInfoBlock}>
        <h2 className={styles.productsBannerMainHeading}>
          {productPageStrings.productsBannerMainHeading}
        </h2>
        <p className={styles.productsBannerSubDesc}>
          {productPageStrings.productsBannerSubDesc}
        </p>
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
          <span className={styles.scrollButton}></span>
          <span className={styles.scrollButton}></span>
          <span className={styles.scrollButton}></span>
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
    );
  };

  const productsDetailsSection = () => {
    return (
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
