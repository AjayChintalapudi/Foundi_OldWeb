import React from 'react';
import styles from './styles.module.css';

const ProductsCard = (props) => {
  const {
    productImg,
    productHeading,
    productOfferPrice,
    productOriginalPrice,
    productCurrency,
    productCurrencyOne,
  } = props;
  return (
    <div className={styles.productContainerCard}>
      <div className={styles.productImgBlock}>
        <img src={productImg} alt="products" className={styles.imageWidth} />
      </div>
      <div className={styles.productDetailsBlock}>
        <p className={styles.productHeading}>{productHeading}</p>
        <div className={styles.productpricesBlock}>
          <p className={styles.productCurrency}>
            {productCurrency} &nbsp;
            <span className={styles.productOfferPrice}>
              {productOfferPrice}
            </span>
          </p>

          <p className={styles.productCurrencyOne}>
            {productCurrencyOne}
            <span className={styles.productOriginalPrice}>
              {productOriginalPrice}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
