import React from 'react';
import { trackOrderData } from 'constants/CommonData/CommonData';
import { strings } from 'resources/Strings/eng';
import Button from 'components/Button/Button';
import styles from './styles.module.css';

const OrderHistory = () => {
  const { orderHistoryPageStrings } = strings;

  const trackOrderSection = () => {
    return (
      <div className={styles.trackOrderContainer}>
        {trackOrderTopSection()}
        {trackOrderBottomSection()}
        {trackAndCancelButtonSection()}
      </div>
    );
  };

  const trackOrderTopSection = () => {
    return (
      <div className={styles.trackOrderTopSection}>
        {trackOrderData &&
          trackOrderData.map((item, index) => {
            return (
              <div key={index} className={styles.trackOrderDetailsBlock}>
                <div className={styles.trackOrderDetailsLeftBlock}>
                  <p className={styles.orderNo}>{item.orderNo}</p>
                  <div className={styles.orderArrivingDetailsBlock}>
                    <p className={styles.orderDate}>{item.orderDate}</p>
                    <p className={styles.estimatedDelivery}>
                      {item.estimatedDelivery}
                      <span className={styles.estimatedDeliveryTime}>
                        {item.estimatedDeliveryTime}
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.trackOrderPriceRightBlock}>
                  <p className={styles.totalPrice}>{item.totalPrice}</p>
                </div>
                <div className={styles.divider}></div>
              </div>
            );
          })}
      </div>
    );
  };

  const trackOrderBottomSection = () => {
    return (
      <div className={styles.trackOrderBottomSection}>
        {trackOrderData[0].trackingProductsInfo.map((item, index) => {
          return (
            <div key={index} className={styles.trackOrderBottomBlock}>
              <div className={styles.trackOrderBottomLeftBlock}>
                <div className={styles.trackOrderBottomLeftImgBlock}>
                  <img
                    src={item.orderedProductImg}
                    alt=""
                    className={styles.imageWidth}
                  />
                </div>
                <div className={styles.trackOrderBottomLeftDetailsBlock}>
                  <p className={styles.orderedProductName}>
                    {item.orderedProductName}
                  </p>
                  <p className={styles.orderedProductPricesDetails}>
                    {item.orderedProductPricesDetails}
                  </p>
                </div>
              </div>
              <div className={styles.trackOrderBottomRightBlock}>
                <Button
                  // btName={orderHistoryPageStrings.trackOrderBtName}
                  btName={
                    index === 1
                      ? orderHistoryPageStrings.cancelOrderBtName
                      : orderHistoryPageStrings.trackOrderBtName
                  }
                  btnStyles={
                    index === 1
                      ? styles.cancelBtnStyles
                      : styles.trackOrderBtnStyles
                  }
                />
                {/* <Button btName={orderHistoryPageStrings.cancelOrderBtName} /> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const trackAndCancelButtonSection = () => {
    return (
      <div className={styles.trackAndCancelButtonBlock}>
        <Button
          btName={orderHistoryPageStrings.trackOrderBtName}
          btnStyles={styles.trackOrderBtnStyles}
        />
        <Button
          btName={orderHistoryPageStrings.cancelOrderBtName}
          btnStyles={styles.cancelBtnStyles}
        />
      </div>
    );
  };

  const buyAgainSection = () => {
    return (
      <div className={styles.buyAgainContainer}>
        {buyAgainTopSection()}
        {buyAgainBottomSection()}
      </div>
    );
  };

  const buyAgainTopSection = () => {
    return (
      <div className={styles.buyAgainTopSection}>
        {trackOrderData[0].buyAgainProductData.map((item, index) => {
          return (
            <div key={index} className={styles.OrderDetailsBlock}>
              <div className={styles.OrderDetailsLeftBlock}>
                <p className={styles.orderNo}>{item.orderNo}</p>
                <div className={styles.orderArrivingDetailsBlock}>
                  <p className={styles.orderOn}>{item.orderDate}</p>
                  <p className={styles.status}>
                    {item.orderedOn}
                    <span className={styles.statusUpdate}>{item.status}</span>
                  </p>
                </div>
              </div>
              <div className={styles.OrderPriceRightBlock}>
                <p className={styles.orderedPrice}>{item.totalPrice}</p>
              </div>
              <div className={styles.divider}></div>
            </div>
          );
        })}
      </div>
    );
  };

  const buyAgainBottomSection = () => {
    return (
      <div className={styles.buyAgainBottomSection}>
        {trackOrderData[0].buyAgainProductData[0].buyAgainProductInfo.map(
          (item, index) => {
            return (
              <div key={index} className={styles.buyAgainBottomBlock}>
                <div className={styles.buyAgainBottomLeftBlock}>
                  <div className={styles.buyAgainBottomLeftImgBlock}>
                    <img
                      src={item.buyProductImg}
                      alt=""
                      className={styles.imageWidth}
                    />
                  </div>
                  <div className={styles.buyAgainBottomLeftDetailsBlock}>
                    <p className={styles.orderedProductName}>
                      {item.buyProductName}
                    </p>
                    <p className={styles.orderedProductPricesDetails}>
                      {item.buyProductPricesDetails}
                    </p>
                  </div>
                </div>

                <Button
                  btName={orderHistoryPageStrings.buyAgain}
                  btnStyles={styles.cancelBtnStyles}
                />
              </div>
            );
          }
        )}
      </div>
    );
  };

  const orderSection = () => {
    return (
      <div className={styles.orderContainer}>
        {orderedTopSection()}
        {orderBottomSection()}
      </div>
    );
  };

  const orderedTopSection = () => {
    return (
      <div className={styles.orderedTopSection}>
        {trackOrderData[0].orderAgainProductData.map((item, index) => {
          return (
            <div key={index} className={styles.OrderedDetailsBlock}>
              <div className={styles.OrderedDetailsLeftBlock}>
                <p className={styles.orderNo}>{item.orderNo}</p>
                <div className={styles.orderedArrivingDetailsBlock}>
                  <p className={styles.orderDate}>{item.orderDate}</p>
                  <p className={styles.orderedStatus}>
                    {item.orderedOnStatus}
                    <span className={styles.cancelled}>
                      {item.statusCancelled}
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.trackOrderPriceRightBlock}>
                <p className={styles.totalPrice}>{item.totalPrice}</p>
              </div>
              <div className={styles.divider}></div>
            </div>
          );
        })}
      </div>
    );
  };

  const orderBottomSection = () => {
    return (
      <div className={styles.orderBottomSection}>
        {trackOrderData[0].buyAgainProductData[0].buyAgainProductInfo.map(
          (item, index) => {
            return (
              <div key={index} className={styles.orderedBottomBlock}>
                <div className={styles.orderedBottomLeftBlock}>
                  <div className={styles.orderBottomLeftImgBlock}>
                    <img
                      src={item.buyProductImg}
                      alt=""
                      className={styles.imageWidth}
                    />
                  </div>
                  <div className={styles.orderedBottomLeftDetailsBlock}>
                    <p className={styles.orderedProductName}>
                      {item.buyProductName}
                    </p>
                    <p className={styles.orderedProductPricesDetails}>
                      {item.buyProductPricesDetails}
                    </p>
                  </div>
                </div>
                <div className={styles.orderdButtonBlock}>
                  <Button
                    btName={orderHistoryPageStrings.orderAgain}
                    btnStyles={styles.cancelBtnStyles}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    );
  };

  return (
    <div className={styles.orderHistoryMainContainer}>
      <div className={styles.orderHistorySubContainer}>
        {trackOrderSection()}
        {buyAgainSection()}
        {orderSection()}
      </div>
    </div>
  );
};

export default OrderHistory;
