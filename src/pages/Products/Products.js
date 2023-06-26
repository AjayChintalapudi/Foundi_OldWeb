import React from 'react';
import NavBar from 'components/NavBar/Navbar';
import Footer from 'components/Footer/Footer';
import Button from 'components/Button/Button';
import { strings } from 'resources/Strings/eng';
import styles from './styles.module.css';

const Products = () => {
  const { productPageStrings } = strings;

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
    return <div></div>;
  };
  return (
    <div>
      <NavBar />
      {productsBannerSection()}
      {productDetailsSection()}
      {/* <Footer /> */}
    </div>
  );
};

export default Products;
