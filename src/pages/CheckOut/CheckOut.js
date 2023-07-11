import React, { useEffect, useState } from 'react';
import {
  checkoutcheckmark,
  checkoutleftarrow,
  checkouttickmark,
  checkoutuncheckmark,
} from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';
import styles from './styles.module.css';
import { Schema, string } from 'yup';
import {
  checkOutData,
  orderedDetailsData,
  priceDetailsData,
} from 'constants/CommonData/CommonData';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { useFormik } from 'formik';
import {
  CardHolderNameValidationSchema,
  CityValidationSchema,
  CvvValidationSchema,
  DebitAndCreditValidationSchema,
  DoorAndAddressValidationSchema,
  EmailValidationSchema,
  FirstNameValidationSchema,
  LastNameValidationSchema,
  MonthAndYearValidationSchema,
  PhoneNumberValidationSchema,
  StateAndCountryValidationSchema,
  ZipCodeValidationSchema,
} from 'validators/Validators';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const { checkOutPageStrings } = strings;

  // navigation

  const navigate = useNavigate();

  // Title Section Tab Change [contact-address-payment]

  const [tab, setTab] = useState('contact');
  const [showContent, setShowContent] = useState(true);

  // Keep Validation Schemas while changing the Tabs

  const [schema, setSchema] = useState(
    FirstNameValidationSchema.concat(LastNameValidationSchema)
      .concat(EmailValidationSchema)
      .concat(PhoneNumberValidationSchema)
  );
  // console.log('schema', schema);
  useEffect(() => {
    if (tab === 'contact') {
      setSchema(
        FirstNameValidationSchema.concat(LastNameValidationSchema)
          .concat(EmailValidationSchema)
          .concat(PhoneNumberValidationSchema)
      );
    }
    if (tab === 'address') {
      setSchema(
        schema
          .concat(DoorAndAddressValidationSchema)
          .concat(CityValidationSchema)
          .concat(ZipCodeValidationSchema)
          .concat(StateAndCountryValidationSchema)
      );
    }
    if (tab === 'payment') {
      setSchema(
        schema
          .concat(CardHolderNameValidationSchema)
          .concat(DebitAndCreditValidationSchema)
          .concat(MonthAndYearValidationSchema)
          .concat(CvvValidationSchema)
      );
    }
  }, [tab]);

  // handling checkout and buying of product

  const handleCheckOut = async (values) => {
    try {
      handleButtonClick();
      if (tab === 'payment') {
        console.log(values);
      }
    } catch (error) {}
    // console.log("subbmited")
  };

  // formik handling

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      doorAndAddress: '',
      city: '',
      zipCode: '',
      stateAndCountry: '',
      cardHolderName: '',
      debitAndCredit: '',
      expiryDate: '',
      cvv: '',
    },
    validationSchema: schema,
    onSubmit: handleCheckOut,
  });

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
        <div
          className={styles.checkOutBackArrow}
          onClick={() => navigate('/productreview')}
        >
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
          <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
            {tab === 'contact' && checkOutPageLeftContactInputsSection()}
            {tab === 'address' && checkOutPageLeftAddressInputsSection()}
            {tab === 'payment' && checkOutPageLeftPaymentInputsSection()}
            {checkOutLeftButtonSection()}
          </form>
        )}
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
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            // onFocus=""
            onChange={formik.handleChange}
            error={formik.touched.firstName && formik.errors.firstName}
            placeholder={checkOutPageStrings.firstNamePlaceHolderText}
            customInputStyles={styles.firstNameinputStyles}
          />
        </div>
        <div className={styles.lastNameContainer}>
          <p className={styles.lastName}>{checkOutPageStrings.lastName}</p>
          <Input
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            // onFocus=""
            onChange={formik.handleChange}
            error={formik.touched.lastName && formik.errors.lastName}
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
          name="email"
          type="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          // onFocus=""
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
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
        {/* <div className={styles.phoneNumberTexts}> */}
        {/* <p className={styles.phoneCode}>+42</p>
          <span className={styles.phoneRightBorder}></span> */}
        <Input
          name="phoneNumber"
          type="tel"
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
          // onFocus=""
          onChange={formik.handleChange}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          placeholder={checkOutPageStrings.phoneNumberPlaceHolderText}
          customInputStyles={styles.phoneNumberInputStyles}
        />
        {/* </div> */}
      </div>
    );
  };

  // handle button click to change the tab[contact -address- payment]

  const handleButtonClick = () => {
    if (tab === 'contact') {
      setTab('address');
    } else if (tab === 'address') {
      setTab('payment');
    } else {
    }
  };
  const checkOutLeftButtonSection = () => {
    return (
      <Button
        btName={
          tab === 'contact'
            ? checkOutPageStrings.continueBtnName
            : tab === 'address'
            ? checkOutPageStrings.continueBtnName
            : checkOutPageStrings.purchaseBtnName
        }
        btnStyles={styles.continueBtnStyles}
        type="submit"
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
          name="doorAndAddress"
          type="text"
          value={formik.values.doorAndAddress}
          onBlur={formik.handleBlur}
          // onFocus=""
          onChange={formik.handleChange}
          error={formik.touched.doorAndAddress && formik.errors.doorAndAddress}
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
            name="city"
            type="text"
            value={formik.values.city}
            onBlur={formik.handleBlur}
            // onFocus=""
            onChange={formik.handleChange}
            error={formik.touched.city && formik.errors.city}
            placeholder={checkOutPageStrings.cityNamePlaceHolderText}
            customInputStyles={styles.cityNameinputStyles}
          />
        </div>
        <div className={styles.zipContainer}>
          <p className={styles.zipCodeName}>
            {checkOutPageStrings.zipCodeName}
          </p>
          <Input
            name="zipCode"
            type="text"
            value={formik.values.zipCode}
            onBlur={formik.handleBlur}
            // onFocus=""
            onChange={formik.handleChange}
            error={formik.touched.zipCode && formik.errors.zipCode}
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
          name="stateAndCountry"
          type="text"
          value={formik.values.stateAndCountry}
          onBlur={formik.handleBlur}
          // onFocus=""
          onChange={formik.handleChange}
          error={
            formik.touched.stateAndCountry && formik.errors.stateAndCountry
          }
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
          name="cardHolderName"
          type="text"
          value={formik.values.cardHolderName}
          onBlur={formik.handleBlur}
          // onFocus=""
          onChange={formik.handleChange}
          error={formik.touched.cardHolderName && formik.errors.cardHolderName}
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
          name="debitAndCredit"
          type="text"
          value={formik.values.debitAndCredit}
          onBlur={formik.handleBlur}
          // onFocus=""
          onChange={formik.handleChange}
          error={formik.touched.debitAndCredit && formik.errors.debitAndCredit}
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
            name="expiryDate"
            type="text"
            value={formik.values.expiryDate}
            onBlur={formik.handleBlur}
            // onFocus=""
            onChange={formik.handleChange}
            error={formik.touched.expiryDate && formik.errors.expiryDate}
            placeholder={checkOutPageStrings.expiryMonthPlaceHolderText}
            customInputStyles={styles.monthInputStyles}
          />
        </div>
        <div className={styles.cvvContainer}>
          <p className={styles.cvv}>{checkOutPageStrings.cvvCode}</p>
          <Input
            name="cvv"
            type="text"
            value={formik.values.cvv}
            onBlur={formik.handleBlur}
            // onFocus=""
            onChange={formik.handleChange}
            error={formik.touched.cvv && formik.errors.cvv}
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
