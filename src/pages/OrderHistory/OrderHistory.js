import React, { useContext } from 'react';
import {
  orderedDetailsData,
  trackOrderData,
} from 'constants/CommonData/CommonData';
import { strings } from 'resources/Strings/eng';
import Button from 'components/Button/Button';
import styles from './styles.module.css';
import { UserDataContext } from 'providers/UserDataProvider';
import { getOrderHistory } from 'networking/Apis/getOrderHistory';
import { useLocation } from 'react-router-dom';

const OrderHistory = () => {
  const { orderHistoryPageStrings } = strings;

  const location = useLocation();
  const orderHistoryData = location.state?.orderHistoryData;
  console.log('orderHistoryData', orderHistoryData);
  const trackOrderSection = () => {
    return orderHistoryData?.map((order, index) => (
      <div className={styles.trackOrderContainer} key={index}>
        {trackOrderTopSection(order)}
        {trackOrderBottomSection(order)}
        {trackAndCancelButtonSection(order)}
      </div>
    ));
  };

  const trackOrderTopSection = (order) => {
    return (
      <div className={styles.trackOrderTopSection}>
        <div className={styles.trackOrderDetailsBlock}>
          <div className={styles.trackOrderDetailsLeftBlock}>
            <p className={styles.orderNo}>
              {orderHistoryPageStrings.orderNo}
              {order?.shipping?.tracking_no}
            </p>
            <div className={styles.orderArrivingDetailsBlock}>
              <p className={styles.orderDate}>
                {orderHistoryPageStrings.orderedOn}
                {order?.createdAt}
              </p>
              <p className={styles.estimatedDelivery}>
                {orderHistoryPageStrings.estimatedDelivery}&nbsp;
                <span className={styles.estimatedDeliveryTime}>
                  {orderHistoryPageStrings.time}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.trackOrderPriceRightBlock}>
            <p className={styles.totalPrice}>
              {orderHistoryPageStrings.totalPrice}
              {order?.currency}
              {order?.total}
            </p>
          </div>
          <div className={styles.divider}></div>
        </div>
      </div>
    );
  };

  const trackOrderBottomSection = (order) => {
    return (
      <div className={styles.trackOrderBottomSection}>
        {order.items.map((item, index) => {
          return (
            <div key={index} className={styles.trackOrderBottomBlock}>
              <div className={styles.trackOrderBottomLeftBlock}>
                <div className={styles.trackOrderBottomLeftImgBlock}>
                  <img src={item.image} alt="" className={styles.imageWidth} />
                </div>
                <div className={styles.trackOrderBottomLeftDetailsBlock}>
                  <p className={styles.orderedProductName}>{item.name}</p>
                  <p className={styles.orderedProductPricesDetails}>
                    {orderHistoryPageStrings.price}({item.quantity}) -&nbsp;
                    {order?.currency}
                    {item.total}
                  </p>
                </div>
              </div>
              <div className={styles.trackOrderBottomRightBlock}>
                <Button
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
    const buyAgainProductData = trackOrderData[0].buyAgainProductData;
    return (
      <div className={styles.buyAgainTopSection}>
        {buyAgainProductData.map((item, index) => {
          return (
            <div key={index} className={styles.OrderDetailsBlock}>
              <div className={styles.OrderDetailsLeftBlock}>
                <p className={styles.orderNo}>{item.orderNo}</p>
                <div className={styles.orderArrivingDetailsBlock}>
                  <p className={styles.orderOn}>{item.orderDate}</p>
                  <p className={styles.status}>
                    {item.orderedOn}
                    &nbsp;
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
                    &nbsp;
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
