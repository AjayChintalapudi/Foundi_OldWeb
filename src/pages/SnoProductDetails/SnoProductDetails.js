import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { snonotefinder, snoproduct } from 'resources/Images/Images';
import Button from 'components/Button/Button';
import { strings } from 'resources/Strings/eng';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfile from 'components/UserProfile/UserProfile';
import Modal from 'components/Modal/Modal';
import Input from 'components/Input/Input';
import { guestLogin } from 'networking/Apis/guestLogin';
import { useFormik } from 'formik';
import { EmailValidationSchema, emailValidationSchema } from 'validators/Validators';

const SnoProductDetails = () => {
  // navigation

  const navigate = useNavigate();

  // onload the page page return to the top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get snocode details
  const location = useLocation();
  const snoCodeData = location.state?.snoCodeData;
  // string values

  const { snoProductDetailsStrings } = strings;

  // handle userexisting message

  const [showMessage, setShowMessage] = useState();

  // handle modal

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    // based on token display modal response and navigate to chat page
    const authToken = localStorage.getItem('authToken');
    authToken ? alert('navigate to chat page') : setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // handle guestlogin

  const handleguestLogin = async (values) => {
    console.log(values);
    try {
      const guestResponse = await guestLogin(values);
      if (
        guestResponse.data.type === 'success' &&
        guestResponse.status === 200
      ) {
        localStorage.setItem('guest_email', values.email);
        alert('welcome to chat page');
        navigate('/chat');
      } else {
        setShowMessage(guestResponse.data.message);
        console.log('some error in response handling');
      }
      console.log(guestResponse);
    } catch (error) {
      console.log(error.toString(), 'some error in guest login');
    }
  };

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: emailValidationSchema,
    onSubmit: handleguestLogin,
  });

  const snoItemHeaderSection = () => {
    return (
      <div className={styles.snoItemHeaderBlock}>
        <h5 className={styles.itemInfoHeading}>
          {snoProductDetailsStrings.itemInfoHeading}
        </h5>
        <div className={styles.hambergerIconBlock}>
          <UserProfile />
        </div>
      </div>
    );
  };

  const snoProductDetailsSection = () => {
    return (
      <div className={styles.snoProductDetailsBlock}>
        <div className={styles.snoProductLeftImgBlock}>
          <img alt="" className={styles.imageWidth} />
        </div>
        <div className={styles.snoProductRightDetailsBlock}>
          <div className={styles.snoProductOverViewBlock}>
            <p className={styles.overViewHeading}>
              {snoProductDetailsStrings.overViewHeading}
            </p>
            <div className={styles.snoProductInfoBlock}>
              {snoProductInfoSection()}
              {noteFinderInfoSection()}
            </div>
          </div>
          {contactOwnerBtnSection()}
        </div>
      </div>
    );
  };

  const snoProductInfoSection = () => {
    return (
      <div className={styles.snoProductInfoSubBlock}>
        <div className={styles.snoProductImgBlock}>
          <img
            src={snoproduct}
            alt="snoproduct"
            className={styles.imageWidth}
          />
        </div>
        <div className={styles.snoProductInfo}>
          <p className={styles.productName}>{snoCodeData?.product_name}</p>
          <div>
            <p className={styles.productSerialNumber}>
              {snoProductDetailsStrings.snoNumber} &nbsp;
              {snoCodeData?.sno}
            </p>
            <p className={styles.productItemCategory}>
              {snoProductDetailsStrings.itemCategory} &nbsp;
              {snoCodeData?.category?.title}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const noteFinderInfoSection = () => {
    return (
      <div className={styles.noteFinderInfoBlock}>
        <div className={styles.snoProductImgBlock}>
          <img
            src={snonotefinder}
            alt="snonotefinder"
            className={styles.imageWidth}
          />
        </div>
        <div className={styles.noteFinder}>
          <p className={styles.noteFinderHeading}>
            {snoProductDetailsStrings.noteFinderHeading}
          </p>
          <p className={styles.noteFinderDesc}>{snoCodeData?.note}</p>
        </div>
      </div>
    );
  };

  const contactOwnerBtnSection = () => {
    return (
      <>
        <Button
          btName={snoProductDetailsStrings.contactOwnerBtnName}
          btnStyles={styles.contactOwnerBtnStyles}
          onClick={handleOpenModal}
        />
        <Modal open={modalOpen} onClose={handleCloseModal}>
          {userLoggedInSection()}
        </Modal>
      </>
    );
  };

  const userLoggedInSection = () => {
    return (
      <div className={styles.userNotLoggedInBlock}>
        <div className={styles.userNotLoggedInfo}>
          <p className={styles.notLoggedHeading}>
            {snoProductDetailsStrings.notLoggedHeading}
          </p>
          <p className={styles.notLoggedDesc}>
            {snoProductDetailsStrings.notLoggedDesc}
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className={styles.inputAndButtonBlock}
        >
          <Input
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            customInputStyles={styles.emailInputStyles}
            error={formik.touched.email && formik.errors.email}
          />
          <Button
            btName="Continue"
            btnStyles={styles.continueBtnStyles}
            type="submit"
          />
          {showMessage && (
            <p className={styles.existingUserMessage}>{showMessage}</p>
          )}
        </form>
        <div className={styles.loginAndSignUpText}>
          <p className={styles.loginText} onClick={() => navigate('/login')}>
            {snoProductDetailsStrings.loginText}
          </p>
          <p className={styles.orText}>{snoProductDetailsStrings.orText}</p>
          <p className={styles.signUpText} onClick={() => navigate('/signup')}>
            {snoProductDetailsStrings.signUpText}
          </p>
        </div>
        <div className={styles.dividerAndDownloadBtnBlock}>
          <div className={styles.divider}></div>
          <Button
            btName="Download app"
            btnStyles={styles.downloadAppBtnStyles}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.snoItemDetailsMainContainer}>
      <div className={styles.snoItemDetailsContainer}>
        {snoItemHeaderSection()}
        {snoProductDetailsSection()}
      </div>
    </div>
  );
};

export default SnoProductDetails;
