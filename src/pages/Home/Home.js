import React, { useState } from 'react';
import { strings } from 'resources/Strings/eng';
import {
  additionlogo,
  appstorelogo,
  awslogo,
  ebaylogo,
  findertaglogo,
  googlelogo,
  homebglogo,
  homebgmobilelogo,
  ioslogo,
  leftarrowlogo,
  locationlogo,
  messagelogo,
  phonelogo,
  playstorelogo,
  qrcodetaglogo,
  returncloseicon,
  rightarrowlogo,
  samsunglogo,
  scrolldownlogo,
  smiletaglogo,
  subtractionlogo,
  tagslogo,
  uprightlogo,
} from 'resources/Images/Images';
import NavBar from 'components/NavBar/Navbar';
import useWindowDimensions from 'hooks/UseWindowDimensionHook';
import Button from 'components/Button/Button';
import Footer from 'components/Footer/Footer';
import Input from 'components/Input/Input';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import styles from './styles.module.css';
import { useFormik } from 'formik';
import { SnoCodeValidationSchema } from 'validators/Validators';
import { snoCode } from 'networking/Apis/snoCode';

const Home = () => {
  const { homePage } = strings;
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  //state
  const [block, setBlock] = useState(0);
  const [indexNo, setIndexNo] = useState(0);

  // return section close icon

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  // sno error message handling

  const [errorMessage, setErrorMessage] = useState('');

  //mapping data

  //Purchase Data
  const purchaseData = [
    {
      header: '01 - Purchase tags',
      image: tagslogo,
      descp:
        'Purchase physical Foundi tags from our app or the website. These tags will allow you to register your belongings within our database.',
    },
    {
      header: '02 - Register belongings',
      image: qrcodetaglogo,
      descp:
        'To add or register your belongings in our database, simply scan the QR or enter the SNO number present on the tags you purchased.',
    },
    {
      header: '03 - Connect with finders',
      image: findertaglogo,
      descp:
        'If you lost your registered item, finders can scan the tag attached to it and can text you via our in-built messenger while keeping your privacy intact.',
    },
    {
      header: '04 - Recover lost items',
      image: smiletaglogo,
      descp:
        'Conversing with finders you can work a way out to recover your beloved items back.',
    },
  ];

  //Question Answer Data
  const questionAnswerData = [
    {
      question: homePage.questionOne,
      answer: homePage.answerOne,
    },
    {
      question: homePage.questionTwo,
      answer: homePage.answerOne,
    },
    {
      question: homePage.questionThree,
      answer: homePage.answerOne,
    },
    {
      question: homePage.questionFour,
      answer: homePage.answerOne,
    },
  ];

  //Contact Data
  const contactData = [
    {
      image: locationlogo,
      text: homePage.contactLocation,
    },
    {
      image: phonelogo,
      text: homePage.contactNumber,
    },
    {
      image: messagelogo,
      text: homePage.contactMail,
    },
  ];

  const handleShow = (index) => {
    setBlock(index);
  };

  const handleLeftClick = () => {
    if (indexNo === 0) {
      setIndexNo(purchaseData.length - 1);
    } else {
      setIndexNo(indexNo - 1);
    }
  };

  const handleRightClick = () => {
    if (purchaseData.length === indexNo + 1) {
      setIndexNo(0);
    } else {
      setIndexNo(indexNo + 1);
    }
  };

  // handle snocode response

  const handleSnoCodeResponse = async (values) => {
    try {
      const snoCodeData = { sno: values.snoCode };
      const snoCodeResponse = await snoCode(snoCodeData);
      if (
        snoCodeResponse.status === 200 &&
        snoCodeResponse.data.type === 'success'
      ) {
        navigate('/lostproduct', {
          state: { snoCodeData: snoCodeResponse.data.data },
        });
      } else {
        setErrorMessage(snoCodeResponse.data.message);
      }
      console.log(snoCodeResponse, 'snoCodeResponse');
    } catch (error) {
      console.log(error.toString(), 'some error');
    }
  };

  const formik = useFormik({
    initialValues: { snoCode: '' },
    validationSchema: SnoCodeValidationSchema,
    onSubmit: handleSnoCodeResponse,
  });

  const homebannerSection = () => {
    return (
      <div className={styles.bannerSection}>
        <div className={styles.insideBannerSection}>
          {bannerTopSection()}
          {bannerBottomSection()}
        </div>
      </div>
    );
  };

  const bannerTopSection = () => {
    return (
      <div className={styles.insideBannerTopSection}>
        <div className={styles.bannerLeftSection}>
          <h2 className={styles.bannerHeader}>{homePage.bannerHeading}</h2>
          <p className={styles.bannerDescp}>{homePage.bannerDescription}</p>
        </div>
        <div className={styles.bannerRightSection}>
          <div className={styles.ellipseSection}>
            <span className={styles.ellipseOne}></span>
            <span className={styles.ellipseTwo}></span>
          </div>
          <div className={styles.scrollSection}>
            <p className={styles.scrollDesc}>{homePage.scrollText}</p>
            <div className={styles.downArrowIcon}>
              <img src={scrolldownlogo} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const bannerBottomSection = () => {
    return (
      <div className={styles.bottomSection}>
        <img
          src={width < 428 ? homebgmobilelogo : homebglogo}
          alt=""
          className={styles.imageWidth}
        />
      </div>
    );
  };

  const homeReturnSection = () => {
    return (
      <div className={styles.returnSection}>
        <div className={styles.insideReturnSection}>
          <div className={styles.returnLeftSection}>
            <h3 className={styles.returnHeader}>{homePage.returnHeading}</h3>
            <p className={styles.returnDescp}>{homePage.returnDescp}</p>
          </div>
          <div className={styles.returnRightSection}>
            <Button
              btName={'Return item'}
              btnStyles={styles.returnBtnStyles}
              image={uprightlogo}
              imageWrapperStyles={styles.returnWrappperStyles}
              onClick={handleOpenModal}
            />
            <Modal open={modalOpen} onClose={handleCloseModal}>
              <div className={styles.returnModalContainer}>
                {snoTitleSection()}
                {snoInputAndButtonSection()}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  };

  // return modal section contents

  const snoTitleSection = () => {
    return (
      <div className={styles.snoTopSection}>
        <div className={styles.snoTopInfoBlock}>
          <div className={styles.snoTitleBlock}>
            <p className={styles.snoTitle}>{homePage.snoTitle}</p>
            <p className={styles.enterSnoCode}>{homePage.enterSnoCode}</p>
          </div>
          <div className={styles.snoCloseImgBlock} onClick={handleCloseModal}>
            <img src={returncloseicon} alt="" className={styles.imageWidth} />
          </div>
        </div>
      </div>
    );
  };

  const snoInputAndButtonSection = () => {
    return (
      <form
        onSubmit={formik.handleSubmit}
        className={styles.snoInputButtonBlock}
      >
        {snoNumberInputTextSection()}

        {errorMessage && (
          <p className={styles.snoErrorMessage}>{errorMessage}</p>
        )}
        {snoBottomButtonSection()}
      </form>
    );
  };

  const snoNumberInputTextSection = () => {
    return (
      <div className={styles.snoNumberInputTextBlock}>
        <p className={styles.serialNumber}>{homePage.serialNumber}</p>
        <Input
          type="text"
          placeholder={homePage.enterSnoNumber}
          value={formik.values.snoCode}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          onFocus={() => setErrorMessage('')}
          name="snoCode"
          customInputStyles={styles.returnInputStyles}
          error={formik.touched.snoCode && formik.errors.snoCode}
        />
      </div>
    );
  };

  const snoBottomButtonSection = () => {
    return (
      <div className={styles.snoBottomButtonSection}>
        <Button
          btName="Search"
          btnStyles={styles.snoCodeBtnStyles}
          type="submit"
        />
      </div>
    );
  };

  const homeSocialSection = () => {
    return (
      <div className={styles.socialSection}>
        <div className={styles.insideSocialSection}>
          <div className={styles.ebaySection}>
            <img src={ebaylogo} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.samsungSection}>
            <img src={samsunglogo} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.awsSection}>
            <img src={awslogo} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.iosSection}>
            <img src={ioslogo} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.googleSection}>
            <img src={googlelogo} alt="" className={styles.imageWidth} />
          </div>
        </div>
      </div>
    );
  };

  const homePurchaseSection = () => {
    return (
      <div className={styles.purchaseSection}>
        <div className={styles.insidePurchaseSection}>
          <div className={styles.purchaseLeftArrowIcon}>
            <img
              onClick={() => handleLeftClick()}
              src={leftarrowlogo}
              alt=""
              className={styles.imageWidth}
            />
          </div>
          {purchaseMiddleSection()}
          <div className={styles.purchaseRightArrowIcon}>
            <img
              onClick={() => handleRightClick()}
              src={rightarrowlogo}
              alt=""
              className={styles.imageWidth}
            />
          </div>
          {purchaseArrowIcons()}
        </div>
      </div>
    );
  };

  const purchaseMiddleSection = () => {
    return (
      <React.Fragment>
        {purchaseData.map((item, index) => {
          return (
            indexNo === index && (
              <div key={index} className={styles.purchaseMiddleSection}>
                <h2 className={styles.purchaseTopSection}>{item.header}</h2>
                <div className={styles.purchaseGapSection}>
                  <div className={styles.purchaseTagsIcon}>
                    <img
                      src={item.image}
                      alt=""
                      className={styles.imageWidth}
                    />
                  </div>
                  <p className={styles.purchaseDescpSection}>{item.descp}</p>
                </div>
              </div>
            )
          );
        })}
      </React.Fragment>
    );
  };

  const purchaseArrowIcons = () => {
    return (
      <div className={styles.purchaseArrowSection}>
        <div className={styles.purchaseLeftArrowMobileIcon}>
          <img
            onClick={() => handleLeftClick()}
            src={leftarrowlogo}
            alt=""
            className={styles.imageWidth}
          />
        </div>
        <div className={styles.purchaseRightArrowMobileIcon}>
          <img
            onClick={() => handleRightClick()}
            src={rightarrowlogo}
            alt=""
            className={styles.imageWidth}
          />
        </div>
      </div>
    );
  };

  const homeProductsSection = () => {
    return (
      <div className={styles.productsSection}>
        <div className={styles.insideProductsSection}>
          <div className={styles.productsTopSection}>
            <h3 className={styles.productsHeader}>
              {homePage.productsHeading}
            </h3>
            <p className={styles.productsDescp}>{homePage.productsDescp}</p>
          </div>
          <div className={styles.productsButtonSection}>
            <Button
              btName={'View products'}
              btnStyles={styles.productsBtnStyles}
            />
          </div>
        </div>
      </div>
    );
  };

  const homequestionsSection = () => {
    return (
      <div className={styles.questionSection}>
        <div className={styles.insideQuestionSection}>
          <div className={styles.questionTopSection}>
            <h3 className={styles.questionHeading}>
              {homePage.questionandanswerHeading}
            </h3>
            <p className={styles.questionsDescp}>
              {homePage.questionandanswerDescp}
            </p>
          </div>
          {questionBottomSection()}
        </div>
      </div>
    );
  };

  const questionBottomSection = () => {
    return (
      <div className={styles.questionBottomSection}>
        {questionAnswerData.map((item, index) => {
          return (
            <div
              key={index}
              className={
                width > 867
                  ? block === index
                    ? styles.questionAnswerSection
                    : styles.showQuestionAnswerSection
                  : styles.questionAnswerSection
              }
              onClick={() => {
                handleShow(index);
              }}
            >
              <div className={styles.questionLeftSection}>
                <h3
                  className={
                    block === index
                      ? styles.questionText
                      : styles.showQuestionText
                  }
                >
                  {item.question}
                </h3>
                {width > 867 ? (
                  block === index && (
                    <p className={styles.answerText}>{item.answer}</p>
                  )
                ) : (
                  <p className={styles.answerText}>{item.answer}</p>
                )}
              </div>
              <div className={styles.questionRightSection}>
                <img
                  src={block === index ? subtractionlogo : additionlogo}
                  alt=""
                  className={styles.imageWidth}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const homeDownloadSection = () => {
    return (
      <div className={styles.downloadSection}>
        <div className={styles.insideDownloadSection}>
          <div className={styles.downloadTopSection}>
            <h3 className={styles.downloadHeader}>
              {homePage.downloadHeading}
            </h3>
            <p className={styles.downloadDescp}>{homePage.downloadingDescp}</p>
          </div>
          <div className={styles.downloadBottomSection}>
            <div className={styles.appStoreSection}>
              <img
                src={appstorelogo}
                alt=""
                className={styles.imageStoreStyles}
              />
            </div>
            <div className={styles.playStoreSection}>
              <img
                src={playstorelogo}
                alt=""
                className={styles.imageStoreStyles}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const homeContactSection = () => {
    return (
      <div className={styles.contactSection}>
        <div className={styles.insideContactSection}>
          {contactLeftSection()}
          {contactRightSection()}
        </div>
      </div>
    );
  };

  const contactLeftSection = () => {
    return (
      <div className={styles.contactLeftSection}>
        <div className={styles.contactLeftTopSection}>
          <h3 className={styles.contactHeader}>{homePage.contactHeading}</h3>
          <p className={styles.contactDescp}>{homePage.contactDescp}</p>
        </div>
        <div className={styles.contactLeftBottomSection}>
          {contactData.map((item, index) => {
            return (
              <div key={index} className={styles.contactLocationSection}>
                <div className={styles.locationImg}>
                  <img src={item.image} alt="" className={styles.imageWidth} />
                </div>
                <p className={styles.locationText}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const contactRightSection = () => {
    return (
      <div className={styles.contactRightSection}>
        <div className={styles.contactInputSection}>
          <div className={styles.nameSection}>
            <p className={styles.nameText}>{homePage.contactName}</p>

            <Input
              customInputStyles={styles.nameInputStyles}
              type="text"
              placeholder={homePage.placeHolderName}
            />
          </div>

          <div className={styles.emailSection}>
            <p className={styles.emailText}>{homePage.contactMailId}</p>
            <Input
              customInputStyles={styles.emailInputStyles}
              type="text"
              placeholder={homePage.placeHolderMail}
            />
          </div>

          <div className={styles.messageSection}>
            <p className={styles.messageText}>{homePage.contactMessage}</p>
            <textarea
              className={styles.messageInputStyles}
              placeholder={homePage.placeHolderMessage}
            />
          </div>
        </div>
        <div className={styles.contactButtonSection}>
          <Button
            btName={homePage.sendBtnName}
            btnStyles={styles.sendBtnStyles}
          />
        </div>
      </div>
    );
  };

  const homeLearnSection = () => {
    return (
      <div className={styles.learnSection}>
        <div className={styles.insideLearnSection}>
          <div className={styles.learnTopSection}>
            <h3 className={styles.learnHeader}>{homePage.learnmoreHeading}</h3>
            <p className={styles.learnDescp}>{homePage.learnmoreDescp}</p>
          </div>
          <div className={styles.learnBottomSection}>
            <Button
              btName={'Learn more'}
              btnStyles={styles.learnBtnStyles}
              onClick={() => navigate('/sustainability')}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {homebannerSection()}
      {homeReturnSection()}
      {homeSocialSection()}
      {homePurchaseSection()}
      {homeProductsSection()}
      {homequestionsSection()}
      {homeDownloadSection()}
      {homeContactSection()}
      {homeLearnSection()}
      <Footer />
    </div>
  );
};

export default Home;
