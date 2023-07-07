import React from 'react';
import styles from './styles.module.css';
import {
  snohambergericon,
  snohomeicon,
  snonotefinder,
  snoproduct,
} from 'resources/Images/Images';
import Button from 'components/Button/Button';
import { strings } from 'resources/Strings/eng';
import { useLocation } from 'react-router-dom';
import UserProfile from 'components/UserProfile/UserProfile';
import Popover from 'components/PopOver/PopOver';

const SnoProductDetails = () => {
  const location = useLocation();
  const snoCodeData = location.state?.snoCodeData;

  const { snoProductDetailsStrings } = strings;

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
              <div className={styles.snoProductInfoSubBlock}>
                <div className={styles.snoProductImgBlock}>
                  <img
                    src={snoproduct}
                    alt="snoproduct"
                    className={styles.imageWidth}
                  />
                </div>
                <div className={styles.snoProductInfo}>
                  <p className={styles.productName}>
                    {snoCodeData?.product_name}
                  </p>
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
            </div>
          </div>
          <Button
            btName={snoProductDetailsStrings.contactOwnerBtnName}
            btnStyles={styles.contactOwnerBtnStyles}
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
