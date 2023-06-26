import React, { useState } from 'react';
import {
  checkoutcheckmark,
  checkoutleftarrow,
  checkouttickmark,
  checkoutuncheckmark,
} from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';
import styles from './styles.module.css';
import { string } from 'yup';
import {
  checkOutData,
  orderedDetailsData,
  priceDetailsData,
} from 'constants/CommonData/CommonData';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const CheckOut = () => {
  const { checkOutPageStrings } = strings;

  // Title Section Tab Change [contact-address-payment]

  const [tab, setTab] = useState('contact');
  const [showContent, setShowContent] = useState(true);

  const checkOutPageSection = () => {
    return (
      <div className={styles.checkoutPageContainer}>
        {checkOutPageTitleSection()}
        {checkOutPageDetailsSection()}
      </div>
    );
  };

  const checkOutPageTitleSection = () => {
    return (
      <div className={styles.checkOutPageTitleBlock}>
        <div className={styles.checkOutBackArrow}>
          <img src={checkoutleftarrow} alt=" " className={styles.imageWidth} />
        </div>
        <h3 className={styles.checkOutTitle}>
          {checkOutPageStrings.checkOutTitle}
        </h3>
      </div>
    );
  };

  const checkOutPageDetailsSection = () => {
    return (
      <div className={styles.checkOutPageDetailsBlock}>
        {checkOutPageDetailsLeftSection()}
        {checkOutPageDetailsRightSection()}
      </div>
    );
  };

  const checkOutPageDetailsLeftSection = () => {
    return (
      <div className={styles.checkOutPageDetailsLeftBlock}>
        {checkOutPageLeftHeadingsSection()}
        {showContent && (
          <>
            {tab === 'contact' && checkOutPageLeftContactInputsSection()}
            {tab === 'address' && checkOutPageLeftAddressInputsSection()}
            {tab === 'payment' && checkOutPageLeftPaymentInputsSection()}
          </>
        )}
        {checkOutLeftButtonSection()}
      </div>
    );
  };

  const checkOutPageLeftHeadingsSection = () => {
    return (
      <div className={styles.checkOutPageLeftHeadingsContainer}>
        <div className={styles.checkOutPageLeftHeadingsBlock}>
          {checkOutData &&
            checkOutData.map((item, index) => {
              return (
                <div
                  className={styles.headingCheckBlock}
                  key={index}
                  onClick={() => {
                    setTab(item.value);
                    setShowContent(true);
                  }}
                >
                  <div className={styles.checkOutCheckMarkImgBlock}>
                    {tab === item.value ? (
                      <img
                        src={checkoutcheckmark}
                        alt="checkmark"
                        className={styles.imageWidth}
                      />
                    ) : (
                      <img
                        src={checkoutuncheckmark}
                        alt="uncheckmark"
                        className={styles.imageWidth}
                      />
                    )}
                  </div>
                  <p
                    className={`${styles.checkoutHeading} ${
                      tab === item.value ? styles.selectedHeading : ''
                    }`}
                    onClick={() => setTab(item.value)}
                  >
                    {item.checkoutHeading}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  // Contact Section Start

  const checkOutPageLeftContactInputsSection = () => {
    return (
      <div className={styles.checkOutPageLeftInputsBlock}>
        <p className={styles.contactTitle}>
          {checkOutPageStrings.contactTitle}
        </p>
        <div className={styles.contactInputsContainer}>
          {firstAndLastNameInputSection()}
        </div>
        {emailInputSection()}
        {phoneNumberInputSection()}
      </div>
    );
  };

  const firstAndLastNameInputSection = () => {
    return (
      <div className={styles.fisrtAndLastNameContainer}>
        <div className={styles.firstNameContainer}>
          <p className={styles.firstName}>{checkOutPageStrings.firstName}</p>
          <Input
            placeholder={checkOutPageStrings.firstNamePlaceHolderText}
            customInputStyles={styles.firstNameinputStyles}
          />
        </div>
        <div className={styles.lastNameContainer}>
          <p className={styles.lastName}>{checkOutPageStrings.lastName}</p>
          <Input
            placeholder={checkOutPageStrings.lastNamePlaceHolderText}
            customInputStyles={styles.lastNameinputStyles}
          />
        </div>
      </div>
    );
  };

  const emailInputSection = () => {
    return (
      <div className={styles.emailInputContainer}>
        <p className={styles.emailAddress}>
          {checkOutPageStrings.emailAddress}
        </p>
        <Input
          placeholder={checkOutPageStrings.emailPlaceHolderText}
          image={checkouttickmark}
          customInputStyles={styles.emailInputStyles}
        />
      </div>
    );
  };

  const phoneNumberInputSection = () => {
    return (
      <div className={styles.phoneNumberContainer}>
        <p className={styles.phoneNumber}>{checkOutPageStrings.phoneNumber}</p>
        <div className={styles.phoneNumberTexts}>
          <p className={styles.phoneCode}>+42</p>
          <span className={styles.phoneRightBorder}></span>
          <Input
            placeholder={checkOutPageStrings.phoneNumberPlaceHolderText}
            customInputStyles={styles.phoneNumberInputStyles}
          />
        </div>
      </div>
    );
  };

  const checkOutLeftButtonSection = () => {
    const handleButtonClick = () => {
      if (tab === 'contact') {
        setTab('address');
      } else if (tab === 'address') {
        setTab('payment');
      } else {
        // setTab('contact');
      }
      setShowContent(true);
    };

    return (
      <Button
        // btName={checkOutPageStrings.continueBtnText}
        btName={
          tab === 'contact'
            ? checkOutPageStrings.continueBtnName
            : tab === 'address'
            ? checkOutPageStrings.continueBtnName
            : checkOutPageStrings.purchaseBtnName
        }
        btnStyles={styles.continueBtnStyles}
        onClick={handleButtonClick}
      />
    );
  };

  // Contact Section End

  // Address Section Start

  const checkOutPageLeftAddressInputsSection = () => {
    return (
      <div className={styles.checkOutPageLeftInputsBlock}>
        <p className={styles.addressTitle}>
          {checkOutPageStrings.addressTitle}
        </p>
        <div className={styles.addressInputsContainer}>
          {addressInputSection()}
        </div>
        {cityAndZipCodeInputSection()}
        {stateAndCountryInputSection()}
      </div>
    );
  };

  const addressInputSection = () => {
    return (
      <div className={styles.addressInputContainer}>
        <p className={styles.doorAddress}>{checkOutPageStrings.doorAddress}</p>
        <Input
          placeholder={checkOutPageStrings.doorAddressPlaceHolderText}
          customInputStyles={styles.doorNoInputStyles}
        />
      </div>
    );
  };

  const cityAndZipCodeInputSection = () => {
    return (
      <div className={styles.cityAndZipCodeContainer}>
        <div className={styles.cityContainer}>
          <p className={styles.cityName}>{checkOutPageStrings.cityName}</p>
          <Input
            placeholder={checkOutPageStrings.cityNamePlaceHolderText}
            customInputStyles={styles.cityNameinputStyles}
          />
        </div>
        <div className={styles.zipContainer}>
          <p className={styles.zipCodeName}>
            {checkOutPageStrings.zipCodeName}
          </p>
          <Input
            placeholder={checkOutPageStrings.zipCodePlaceHolderText}
            customInputStyles={styles.zipCodeinputStyles}
          />
        </div>
      </div>
    );
  };

  const stateAndCountryInputSection = () => {
    return (
      <div className={styles.stateInputContainer}>
        <p className={styles.stateAndCity}>
          {checkOutPageStrings.stateAndCountry}
        </p>
        <Input
          placeholder={checkOutPageStrings.stateAndCityPlaceHolderText}
          customInputStyles={styles.stateAndCityInputStyles}
        />
      </div>
    );
  };

  // Address Section End

  // Payment Section Start
  const checkOutPageLeftPaymentInputsSection = () => {
    return (
      <div className={styles.checkOutPageLeftInputsBlock}>
        <p className={styles.paymentTitle}>
          {checkOutPageStrings.paymentTitle}
        </p>
        <div className={styles.paymentInputsContainer}>
          {cardHolderInputSection()}
        </div>
        {cardNumberInputSection()}
        {monthAndYearInputSection()}
      </div>
    );
  };

  const cardHolderInputSection = () => {
    return (
      <div className={styles.paymentInputContainer}>
        <p className={styles.payment}>{checkOutPageStrings.cardHolderName}</p>
        <Input
          placeholder={checkOutPageStrings.cardPlaceHolderText}
          customInputStyles={styles.cardHolderInputStyles}
        />
      </div>
    );
  };

  const cardNumberInputSection = () => {
    return (
      <div className={styles.cardInputContainer}>
        <p className={styles.cardDesc}>{checkOutPageStrings.debitCardName}</p>
        <Input
          placeholder={checkOutPageStrings.debitCardNamePlaceHolderText}
          customInputStyles={styles.cardInputStyles}
        />
      </div>
    );
  };

  const monthAndYearInputSection = () => {
    return (
      <div className={styles.monthAndDateNameContainer}>
        <div className={styles.monthContainer}>
          <p className={styles.month}>{checkOutPageStrings.expiryDate}</p>
          <Input
            placeholder={checkOutPageStrings.expiryMonthPlaceHolderText}
            customInputStyles={styles.monthInputStyles}
          />
        </div>
        <div className={styles.dateContainer}>
          <p className={styles.date}>{checkOutPageStrings.cvvCode}</p>
          <Input
            placeholder={checkOutPageStrings.cvvCodePlaceHolderText}
            customInputStyles={styles.dateNameinputStyles}
          />
        </div>
      </div>
    );
  };

  // Payment Section End

  // Order Summary Section Start

  const checkOutPageDetailsRightSection = () => {
    return (
      <div className={styles.checkOutPageDetailsRightBlock}>
        <div className={styles.orderSummarySection}>
          <p className={styles.orderSummaryHeading}>
            {checkOutPageStrings.orderSummaryHeading}
          </p>
          {orderDetailsSection()}
        </div>
        {orderInputButtonSection()}
        {orderPriceDetailsSection()}
        {totalPriceSection()}
      </div>
    );
  };

  const orderDetailsSection = () => {
    return (
      <div className={styles.orderDetails}>
        {orderedDetailsData &&
          orderedDetailsData.map((item, index) => {
            return (
              <div key={index} className={styles.orderedProductContainer}>
                <div className={styles.orderdProductLeftImgBlock}>
                  <img
                    src={item.orderProductImg}
                    alt=""
                    className={styles.imageWidth}
                  />
                </div>
                <div className={styles.orderProductInfoBlock}>
                  <p className={styles.orderProductHeading}>
                    {item.orderProductHeading}
                  </p>
                  <p className={styles.orderProductPrice}>
                    {item.orderProductPrice}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  const orderInputButtonSection = () => {
    return (
      <div className={styles.orderInputButtonSection}>
        <Input
          placeholder={checkOutPageStrings.enterDiscountCode}
          customInputStyles={styles.disCountInputStyles}
        />
        <Button
          btName={checkOutPageStrings.applyBtnName}
          btnStyles={styles.applyBtnStyles}
        />
      </div>
    );
  };

  const orderPriceDetailsSection = () => {
    return (
      <div className={styles.orderPriceDetails}>
        {priceDetailsData &&
          priceDetailsData.map((item, index) => {
            return (
              <div key={index} className={styles.pricesBlock}>
                <p className={styles.productChargeDesc}>
                  {item.productChargeDesc}
                </p>
                <p className={styles.price}>{item.price}</p>
              </div>
            );
          })}
      </div>
    );
  };

  const totalPriceSection = () => {
    return (
      <div className={styles.totalPriceBlock}>
        <p className={styles.totalPrice}>{checkOutPageStrings.totalPrice}</p>
        <p className={styles.totalPriceDesc}>
          {checkOutPageStrings.totalPriceDesc}
        </p>
      </div>
    );
  };

  // Order Summary Section End

  return (
    <div className={styles.checkOutPageMainContainer}>
      {checkOutPageSection()}
    </div>
  );
};

export default CheckOut;
