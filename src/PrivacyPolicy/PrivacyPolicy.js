import React from 'react';
import styles from './styles.module.css';
import { privacyLocklogo } from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';

const PrivacyPolicy = () => {
  const { privacyPolicyStrings } = strings;

  const privacyPolicyTopSection = () => {
    return (
      <div className={styles.topSection}>
        <div className={styles.insideTopSection}>
          <div className={styles.leftIconSection}>
            <img
              src={privacyLocklogo}
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

  return (
    <div>
      {privacyPolicyTopSection()}
      {privacyPolicyBottomSection()}
    </div>
  );
};

export default PrivacyPolicy;
