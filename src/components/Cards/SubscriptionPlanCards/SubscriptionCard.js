import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

const SubscriptionCard = (props) => {
  const {
    subscriptionBorder,
    subscriptionPlanHeading,
    subscriptionPrice,
    premiumPrice,
    subscriptionValidity,
    subscriptionImg,
    subscriptionPlanLimitDesc,
    subscriptionCheckImg,
    subscriptionValidityDesc,
  } = props;

  return (
    <div
      className={classNames(
        styles.subscriptionCardContainer,
        subscriptionBorder
      )}
    >
      <div className={styles.subscriptionCardTopSection}>
        <p className={styles.subscriptionPlanHeading}>
          {subscriptionPlanHeading}
        </p>
        <p className={classNames(styles.subscriptionPrice, premiumPrice)}>
          {subscriptionPrice}
          <span className={styles.subscriptionValidity}>
            {subscriptionValidity}
          </span>
        </p>
      </div>
      <div className={styles.subscriptionCardBottomSection}>
        <div className={styles.subscriptionPlanLimit}>
          <div className={styles.subscriptionCheckImg}>
            <img src={subscriptionImg} alt="" className={styles.imageWidth} />
          </div>
          <p className={styles.subscriptionPlanLimitDesc}>
            {subscriptionPlanLimitDesc}
          </p>
        </div>
        <div className={styles.subscriptionValididty}>
          <div className={styles.subscriptionCheckImg}>
            <img
              src={subscriptionCheckImg}
              alt=""
              className={styles.imageWidth}
            />
          </div>
          <p className={styles.subscriptionValidityDesc}>
            {subscriptionValidityDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
