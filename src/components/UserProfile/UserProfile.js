import React, { useContext, useEffect, useRef, useState } from 'react';
import PopUp from 'components/PopUp/PopUp';
import styles from './styles.module.css';
import {
  downarrowimage,
  snohambergericon,
  snohomeicon,
  userprofilecloseimg,
  userprofileimage,
  userprofileuparrow,
} from 'resources/Images/Images';
import { userProfileData } from 'constants/CommonData/CommonData';
import { UserDataContext } from 'providers/UserDataProvider';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { userDetails, handleLogout } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const userProfileSection = () => {
    return (
      <div className={styles.userProfileSubContainer}>
        <div className={styles.userProfileInfo}>
          <div className={styles.userPorfileInfoLeftBlock}>
            <div className={styles.userProfileImgBlock}>
              <img
                src={userprofileimage}
                alt="userprofileimage"
                className={styles.imageWidth}
              />
            </div>
            <p className={styles.userName}>{userDetails?.full_name}</p>
          </div>
          {showOptions ? (
            <div
              className={styles.userProfileInfoRightImgBlock}
              onClick={() => setShowOptions(!showOptions)}
            >
              <img
                src={downarrowimage}
                alt="downarrowimage"
                className={styles.imageWidth}
              />
            </div>
          ) : (
            <div
              className={styles.userProfileInfoRightImgBlock}
              onClick={() => setShowOptions(!showOptions)}
            >
              <img
                src={userprofileuparrow}
                alt="downarrowimage"
                className={styles.imageWidth}
              />
            </div>
          )}
        </div>

        {showOptions && (
          <div className={styles.userProfileFeatures}>
            {userProfileData &&
              userProfileData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={styles.userFeaturesBlock}
                    onClick={() => {
                      if (index === 2) {
                        handleLogout();
                        alert('user logedout');
                      }
                    }}
                  >
                    <div className={styles.userFeaturesImgBlock}>
                      <img
                        src={item.profileImg}
                        alt="userFeatures"
                        className={styles.imageWidth}
                      />
                    </div>
                    <p className={styles.userFeatureHeading}>
                      {item.profileDesc}
                    </p>
                  </div>
                );
              })}
          </div>
        )}
        {userProfileOptions()}
      </div>
    );
  };

  const userProfileOptions = () => {
    return (
      <div className={styles.userProfileOptions}>
        <p
          className={styles.userProfileOptionsHeading}
          onClick={() => navigate('/events')}
        >
          Events & business
        </p>
        <p
          className={styles.userProfileOptionsHeading}
          onClick={() => navigate('/products')}
        >
          Products
        </p>
        <p
          className={styles.userProfileOptionsHeading}
          onClick={() => navigate('/about')}
        >
          About
        </p>
      </div>
    );
  };

  return (
    <>
      <PopUp
        triggerElement={
          <div onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <div className={styles.userProfileHomeCloseImgBlock}>
                <div
                  className={styles.homeImgBlock}
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  <img
                    src={snohomeicon}
                    alt="homeicon"
                    className={styles.imageWidth}
                  />
                </div>
                <div className={styles.closeImgBlock}>
                  <img
                    src={userprofilecloseimg}
                    alt="closeicon"
                    className={styles.imageWidth}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.UserProfileHambergerIcon}>
                <img
                  src={snohambergericon}
                  alt="snoHambergerIcon"
                  className={styles.imageWidth}
                />
              </div>
            )}
          </div>
        }
        content={<div>{userProfileSection()}</div>}
      />
    </>
  );
};

export default UserProfile;
