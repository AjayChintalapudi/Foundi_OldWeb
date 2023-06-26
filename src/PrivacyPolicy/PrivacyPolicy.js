import React from 'react';
import styles from './styles.module.css';
import { privacyLocklogo, privacyMobilelogo } from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';
import useWindowDimensions from 'hooks/UseWindowDimensionHook';

const PrivacyPolicy = () => {
  const { privacyPolicyStrings } = strings;
  const { width } = useWindowDimensions();

  const privacyPolicyTopSection = () => {
    return (
      <div className={styles.topSection}>
        <div className={styles.insideTopSection}>
          <div className={styles.leftIconSection}>
            <img
              src={width > 867 ? privacyLocklogo : privacyMobilelogo}
              alt=""
              className={styles.imageWidthStyles}
            />
          </div>
          <div className={styles.rightTextSection}>
            <h3 className={styles.topHeader}>
              {privacyPolicyStrings.topHeading}
            </h3>
            <div className={styles.topDescp}>
              <p className={styles.topDescpOne}>
                {privacyPolicyStrings.topDescpOne}
              </p>
              <p className={styles.topDescpTwo}>
                {privacyPolicyStrings.topDescpTwo}
              </p>
              <p className={styles.topDescpThree}>
                {privacyPolicyStrings.topDescpThree}
              </p>
              <p className={styles.topDescpFour}>
                {privacyPolicyStrings.topDescpFour}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const privacyPolicyBottomSection = () => {
    return (
      <div className={styles.bottomSection}>
        <div className={styles.insideBottomSection}>
          {privacySection()}
          {dataControllerSection()}
          {aboutFoundiSection()}
          {personalDataSection()}
          {purpose()}
          {dataRetention()}
          {employmentApplications()}
          {thirdParties()}
          {cookiesSection()}
          {cyberSecuritySection()}
          {yourRightsSection()}
          {changesToViljeTech()}
          {contactInformation()}
        </div>
      </div>
    );
  };

  const privacySection = () => {
    return (
      <div className={styles.privacySection}>
        <h3 className={styles.privacyHeader}>{privacyPolicyStrings.privacy}</h3>
        <p className={styles.privacyDescp}>
          {privacyPolicyStrings.privacyTime}
          <span className={styles.privacyDate}>
            {privacyPolicyStrings.privacyDate}
          </span>
          <span className={styles.privacyReview}>
            {privacyPolicyStrings.privacyReview}
          </span>
          <span className={styles.privacyDate}>
            {privacyPolicyStrings.privacyDateTwo}
          </span>
        </p>
      </div>
    );
  };

  const dataControllerSection = () => {
    return (
      <div className={styles.controllerSection}>
        <h3 className={styles.controllerHeader}>
          {privacyPolicyStrings.dataControllerHeading}
        </h3>
        <div className={styles.controllerDescp}>
          <p className={styles.controllerTopDescp}>
            {privacyPolicyStrings.dataControllerTopDescp}
          </p>
          <div className={styles.controllerMiddleDescp}>
            <p className={styles.controllerMiddleDescpOne}>
              -&nbsp;
              <span className={styles.controllerMiddleSpan}>
                {privacyPolicyStrings.controllerMiddleSpan}
              </span>
              {privacyPolicyStrings.controllerMiddleDescpOne}
            </p>
            <p className={styles.controllerMiddleDescpTwo}>
              -&nbsp;
              {privacyPolicyStrings.controllerMiddleDescpTwo}
            </p>
            <p className={styles.controllerMiddleDescpThree}>
              -&nbsp;
              {privacyPolicyStrings.controllerMiddleDescpThree}
            </p>
          </div>
          <p className={styles.controllerBottomDescp}>
            {privacyPolicyStrings.dataControllerBottomDescp}
          </p>
        </div>
      </div>
    );
  };

  const aboutFoundiSection = () => {
    return (
      <div className={styles.aboutFoundiSection}>
        <h3 className={styles.aboutFoundiHeader}>
          {privacyPolicyStrings.aboutFoundiHeading}
        </h3>
        <div className={styles.aboutFoundiDescpSection}>
          <p className={styles.aboutFoundiDescpOne}>
            {privacyPolicyStrings.aboutFoundiDescpOne}
          </p>
          <p className={styles.aboutFoundiDescpTwo}>
            {privacyPolicyStrings.aboutFoundiDescpTwo}
          </p>
        </div>
      </div>
    );
  };

  const personalDataSection = () => {
    return (
      <div className={styles.personalDataSection}>
        <h3 className={styles.personalDataHeader}>
          {privacyPolicyStrings.personalDataHeading}
        </h3>
        <div className={styles.personalDataDescpSection}>
          <p className={styles.personalDataTopDescp}>
            {privacyPolicyStrings.personalDataTopDescp}
          </p>
          <div className={styles.personalDataMiddleSection}>
            <p className={styles.personalName}>
              - &nbsp;{privacyPolicyStrings.personalName}
            </p>
            <p className={styles.personalPostalAddress}>
              - &nbsp;{privacyPolicyStrings.personalPostalAddress}
            </p>
            <p className={styles.personalEmail}>
              - &nbsp;{privacyPolicyStrings.personalEmail}
            </p>
            <p className={styles.personalSubmittedData}>
              - &nbsp;{privacyPolicyStrings.personalSubmittedData}
            </p>
            <p className={styles.personalDevice}>
              - &nbsp;{privacyPolicyStrings.personalDevice}
            </p>
            <p className={styles.personalTelePhone}>
              - &nbsp;{privacyPolicyStrings.personalTelePhone}
            </p>
            <p className={styles.personalFeedback}>
              - &nbsp;{privacyPolicyStrings.personalFeedback}
            </p>
            <p className={styles.personalCookie}>
              - &nbsp;{privacyPolicyStrings.personalCookie}
            </p>
            <p className={styles.personalPaymentInformation}>
              - &nbsp;{privacyPolicyStrings.personalPaymentInformation}
            </p>
          </div>
          <p className={styles.personalBottomDescp}>
            {privacyPolicyStrings.personalBottomDescp}
          </p>
          <p className={styles.personalBottomDescpOne}>
            {privacyPolicyStrings.personalBottomDescpOne}
          </p>
        </div>
      </div>
    );
  };

  const purpose = () => {
    return (
      <div className={styles.purposeSection}>
        <h3 className={styles.purposeHeader}>
          {privacyPolicyStrings.purposeHeading}
        </h3>

        <div className={styles.purposeDescpSection}>
          <p className={styles.purposeTopDescp}>
            {privacyPolicyStrings.purposeTopDescp}
          </p>
          <p className={styles.purposeMiddleDescp}>
            {privacyPolicyStrings.purposeMiddleDescp}
          </p>
          <div className={styles.purposeBottomDescpSection}>
            <p className={styles.purposeBottomDescpOne}>
              - &nbsp;{privacyPolicyStrings.purposeBottomDescpOne}
            </p>
            <p className={styles.purposeBottomDescpTwo}>
              - &nbsp;{privacyPolicyStrings.purposeBottomDescpTwo}
            </p>
            <p className={styles.purposeBottomDescpThree}>
              - &nbsp;{privacyPolicyStrings.purposeBottomDescpThree}
            </p>
            <p className={styles.purposeBottomDescpFour}>
              - &nbsp;{privacyPolicyStrings.purposeBottomDescpFour}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const dataRetention = () => {
    return (
      <div className={styles.dataRetentionSection}>
        <h3 className={styles.dataRetentionHeader}>
          {privacyPolicyStrings.dataRetentionHeading}
        </h3>
        <div className={styles.dataRetentionDescpSection}>
          <p className={styles.dataRetentionTopDescp}>
            {privacyPolicyStrings.dataRetentionTopDescp}
          </p>
          <p className={styles.dataRetentionBottomDescp}>
            {privacyPolicyStrings.dataRetentionBottomDescp} &nbsp;
            <span className={styles.dataRetentionSpan}>
              {privacyPolicyStrings.dataRetentionSpan}
            </span>
          </p>
        </div>
      </div>
    );
  };

  const employmentApplications = () => {
    return (
      <div className={styles.employmentApplicationsSection}>
        <h3 className={styles.employmentApplicationsHeader}>
          {privacyPolicyStrings.employmentApplicationsHeading}
        </h3>
        <p className={styles.employmentApplicationsTopDescp}>
          {privacyPolicyStrings.employmentApplicationsTopDescp}
        </p>
      </div>
    );
  };

  const thirdParties = () => {
    return (
      <div className={styles.thirdPartiesSection}>
        <h3 className={styles.thirdPartiesHeader}>
          {privacyPolicyStrings.thirdPartiesHeading}
        </h3>
        <div className={styles.thirdPartiesDescpSection}>
          <p className={styles.thirdPartiesTopDescp}>
            {privacyPolicyStrings.thirdPartiesTopDescp}
          </p>
          <div className={styles.thirdPartiesMiddleSection}>
            <p className={styles.cloudStorage}>
              - &nbsp;{privacyPolicyStrings.cloudStorage}
            </p>
            <p className={styles.processingPayments}>
              - &nbsp;{privacyPolicyStrings.processingPayments}
            </p>
            <p className={styles.productDevelopment}>
              - &nbsp;{privacyPolicyStrings.productDevelopment}
            </p>
            <p className={styles.appDevelopment}>
              - &nbsp;{privacyPolicyStrings.appDevelopment}
            </p>
            <p className={styles.cyberSecurity}>
              - &nbsp;{privacyPolicyStrings.cyberSecurity}
            </p>
            <p className={styles.marketReSearch}>
              - &nbsp;{privacyPolicyStrings.marketReSearch}
            </p>
            <p className={styles.advertisments}>
              - &nbsp;{privacyPolicyStrings.advertisments}
            </p>
            <p className={styles.communicating}>
              - &nbsp;{privacyPolicyStrings.communicating}
            </p>
            <p className={styles.legalConsultancy}>
              - &nbsp;{privacyPolicyStrings.legalConsultancy}
            </p>
            <p className={styles.customerRelationShip}>
              - &nbsp;{privacyPolicyStrings.customerRelationShip}
            </p>
            <p className={styles.support}>
              - &nbsp;{privacyPolicyStrings.support}
            </p>
          </div>
          <p className={styles.thirdPartiesBottomDescp}>
            {privacyPolicyStrings.thirdPartiesBottomDescp}
          </p>
          <p className={styles.thirdPartiesBottomDescpOne}>
            {privacyPolicyStrings.thirdPartiesBottomDescpOne}
          </p>
          <p className={styles.thirdPartiesBottomDescpTwo}>
            {privacyPolicyStrings.thirdPartiesBottomDescpTwo} &nbsp;
            <span className={styles.thirdPartiesSpan}>
              {privacyPolicyStrings.thirdPartiesSpan}
            </span>
          </p>
        </div>
      </div>
    );
  };

  const cookiesSection = () => {
    return (
      <div className={styles.cookiesSection}>
        <h3 className={styles.cookiesHeader}>
          {privacyPolicyStrings.cookiesHeading}
        </h3>

        <div className={styles.cookiesDescpSection}>
          <p className={styles.cookiesTopDescp}>
            {privacyPolicyStrings.cookiesTopDescp}
          </p>
          <p className={styles.cookiesMiddleDescpOne}>
            {privacyPolicyStrings.cookiesMiddleDescpOne}
          </p>
          <p className={styles.cookiesMiddleDescpTwo}>
            {privacyPolicyStrings.cookiesMiddleDescpTwo}
          </p>
          <p className={styles.cookiesMiddleDescpThree}>
            {privacyPolicyStrings.cookiesMiddleDescpThree}&nbsp;
            <span className={styles.cookiesMiddleSpan}>
              {privacyPolicyStrings.cookiesMiddleSpan}
            </span>
          </p>

          <div className={styles.cookiesBottomDescpSection}>
            <p className={styles.cookiesBottomDescpOne}>
              - &nbsp;{privacyPolicyStrings.cookiesBottomDescpOne}
            </p>
            <p className={styles.cookiesBottomDescpTwo}>
              - &nbsp;{privacyPolicyStrings.cookiesBottomDescpTwo}
            </p>
            <p className={styles.cookiesBottomDescpThree}>
              - &nbsp;{privacyPolicyStrings.cookiesBottomDescpThree}
            </p>
            <p className={styles.cookiesBottomDescpFour}>
              - &nbsp;{privacyPolicyStrings.cookiesBottomDescpFour}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const cyberSecuritySection = () => {
    return (
      <div className={styles.cyberSecuritySection}>
        <h3 className={styles.cyberSecurityHeader}>
          {privacyPolicyStrings.cyberSecurityHeading}
        </h3>
        <p className={styles.cyberSecurityTopDescp}>
          {privacyPolicyStrings.cyberSecurityTopDescp}
        </p>
      </div>
    );
  };

  const yourRightsSection = () => {
    return (
      <div className={styles.yourRightsSection}>
        <h3 className={styles.yourRightsHeader}>
          {privacyPolicyStrings.yourRightsHeading}
        </h3>
        <div className={styles.yourRightsDescpSection}>
          <p className={styles.yourRightsTopDescp}>
            {privacyPolicyStrings.yourRightsTopDescp}
          </p>
          <div className={styles.yourRightsMiddleSection}>
            <p className={styles.yourRightsMiddleOne}>
              - &nbsp;{privacyPolicyStrings.yourRightsMiddleOne}
            </p>
            <p className={styles.yourRightsMiddleTwo}>
              - &nbsp;{privacyPolicyStrings.yourRightsMiddleTwo}
            </p>
            <p className={styles.yourRightsMiddleThree}>
              - &nbsp;{privacyPolicyStrings.yourRightsMiddleThree}
            </p>
            <p className={styles.yourRightsMiddleFour}>
              - &nbsp;{privacyPolicyStrings.yourRightsMiddleFour}
            </p>
            <p className={styles.yourRightsMiddleFive}>
              - &nbsp;{privacyPolicyStrings.yourRightsMiddleFive}
            </p>
            <p className={styles.yourRightsMiddleSix}>
              - &nbsp;{privacyPolicyStrings.yourRightsMiddleSix}
            </p>
            <p className={styles.yourRightsMiddleSeven}>
              - &nbsp;{privacyPolicyStrings.yourRightsMiddleSeven}
            </p>
          </div>
          <p className={styles.yourRightsBottomDescpOne}>
            {privacyPolicyStrings.yourRightsBottomDescpOne}
            &nbsp;
            <span className={styles.yourRightsBottomSpan}>
              {privacyPolicyStrings.yourRightsBottomSpan}
            </span>
          </p>
          <p className={styles.yourRightsBottomDescpTwo}>
            {privacyPolicyStrings.yourRightsBottomDescpTwo}
          </p>
          <p className={styles.yourRightsBottomDescpThree}>
            {privacyPolicyStrings.yourRightsBottomDescpThree}
            &nbsp;
            <span className={styles.yourRightsBottomSpanOne}>
              {privacyPolicyStrings.yourRightsBottomSpanOne}
            </span>
            &nbsp;
            <span className={styles.yourRightsBottomSpanTwo}>
              {privacyPolicyStrings.yourRightsBottomSpanTwo}
            </span>
            &nbsp;
            <span className={styles.yourRightsBottomSpanThree}>
              {privacyPolicyStrings.yourRightsBottomSpanThree}
            </span>
          </p>
        </div>
      </div>
    );
  };

  const changesToViljeTech = () => {
    return (
      <div className={styles.changesToViljeTechSection}>
        <h3 className={styles.changesToViljeTechHeader}>
          {privacyPolicyStrings.changesToViljeTechHeading}
        </h3>
        <p className={styles.changesToViljeTechTopDescp}>
          {privacyPolicyStrings.changesToViljeTechTopDescp}
        </p>
      </div>
    );
  };

  const contactInformation = () => {
    return (
      <div className={styles.contactInformationSection}>
        <h3 className={styles.contactInformationHeader}>
          {privacyPolicyStrings.contactInformationHeading}
        </h3>
        <p className={styles.contactInformationTopDescp}>
          {privacyPolicyStrings.contactInformationTopDescp}&nbsp;
          <span className={styles.contactSpan}>
            {privacyPolicyStrings.contactSpan}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div>
      {privacyPolicyTopSection()}
      {privacyPolicyBottomSection()}
    </div>
  );
};

export default PrivacyPolicy;
