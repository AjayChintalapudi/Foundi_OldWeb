import React, { useState } from 'react';
import styles from './styles.module.css';
import { Strings } from 'resources/Strings/eng';
import {
  additionlogo,
  appstorelogo,
  awslogo,
  ebaylogo,
  googlelogo,
  homebglogo,
  homebgmobilelogo,
  ioslogo,
  leftarrowlogo,
  playstorelogo,
  rightarrowlogo,
  samsunglogo,
  scrolldownlogo,
  subtractionlogo,
  tagslogo,
  uprightlogo,
} from 'resources/Images/Images';
import NavBar from 'components/NavBar/Navbar';
import useWindowDimensions from 'hooks/UseWindowDimensionHook';
import Button from 'components/Button/Button';

const Home = () => {
  const { homePage } = Strings;
  const { width } = useWindowDimensions();

  //state
  const [block, setBlock] = useState(0);

  //mapping data
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
  const handleShow = (index) => {
    setBlock(index);
  };
  console.log('index', block);
  const homebannerSection = () => {
    return (
      <div className={styles.bannerSection}>
        <NavBar />
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
            />
          </div>
        </div>
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
            <img src={leftarrowlogo} alt="" className={styles.imageWidth} />
          </div>
          {purchaseMiddleSection()}
          <div className={styles.purchaseRightArrowIcon}>
            <img src={rightarrowlogo} alt="" className={styles.imageWidth} />
          </div>
          {purchaseArrowIcons()}
        </div>
      </div>
    );
  };

  const purchaseMiddleSection = () => {
    return (
      <div className={styles.purchaseMiddleSection}>
        <h2 className={styles.purchaseTopSection}>
          {homePage.purchaseHeading}
        </h2>
        <div className={styles.purchaseGapSection}>
          <div className={styles.purchaseTagsIcon}>
            <img src={tagslogo} alt="" className={styles.imageWidth} />
          </div>
          <p className={styles.purchaseDescpSection}>
            {homePage.purchaseDescp}
          </p>
        </div>
      </div>
    );
  };

  const purchaseArrowIcons = () => {
    return (
      <div className={styles.purchaseArrowSection}>
        <div className={styles.purchaseLeftArrowMobileIcon}>
          <img src={leftarrowlogo} alt="" className={styles.imageWidth} />
        </div>
        <div className={styles.purchaseRightArrowMobileIcon}>
          <img src={rightarrowlogo} alt="" className={styles.imageWidth} />
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

  const homeLearnSection = () => {
    return (
      <div className={styles.learnSection}>
        <div className={styles.insideLearnSection}>
          <div className={styles.learnTopSection}>
            <h3 className={styles.learnHeader}>{homePage.learnmoreHeading}</h3>
            <p className={styles.learnDescp}>{homePage.learnmoreDescp}</p>
          </div>
          <div className={styles.learnBottomSection}>
            <Button btName={'Learn more'} btnStyles={styles.learnBtnStyles} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {homebannerSection()}
      {homeReturnSection()}
      {homeSocialSection()}
      {homePurchaseSection()}
      {homeProductsSection()}
      {homequestionsSection()}
      {homeDownloadSection()}
      {homeLearnSection()}
    </div>
  );
};

export default Home;
