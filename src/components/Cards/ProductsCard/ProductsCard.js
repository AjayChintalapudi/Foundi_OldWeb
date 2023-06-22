import React from 'react';
import styles from './styles.module.css';

const ProductsCard = (props) => {
  const {
    productImg,
    productHeading,
    productOfferPrice,
    productOriginalPrice,
  } = props;
  return (
    <div className={styles.productContainerCard}>
      <div className={styles.productImgBlock}>
        <img src={productImg} alt="products" className={styles.imageWidth} />
      </div>
      <div className={styles.productDetailsBlock}>
        <p className={styles.productHeading}>{productHeading}</p>
        <div className={styles.productpricesBlock}>
          <p className={styles.productOfferPrice}>{productOfferPrice}</p>
          <span className={styles.productOriginalPrice}>
            {productOriginalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
