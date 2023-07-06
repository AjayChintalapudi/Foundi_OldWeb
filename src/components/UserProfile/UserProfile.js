import React, { useContext, useState } from 'react';
import PopUp from 'components/PopUp/PopUp';
import styles from './styles.module.css';
import {
  downarrowimage,
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
                        alert('hello');
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
                    <p className={styles.userFaetureHeading}>
                      {item.profileDesc}
                    </p>
                  </div>
                );
              })}
          </div>
        )}
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
      </div>
    );
  };

  return (
    <>
      <PopUp
        triggerElement={<div className={styles.UserProfileContainer}>X</div>}
        content={<>{userProfileSection()}</>}
      />
    </>
  );
};

export default UserProfile;
