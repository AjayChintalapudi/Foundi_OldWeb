import React, { createContext, useEffect, useState } from 'react';

export const UserLoginContext = createContext({
  userDetails: null,
});

export const UserDataProvider = (props) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    let userDetails = localStorage.getItem('user');
    if (userDetails) {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);

  const setUserData = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUserDetails(user);
  };
  return (
    <UserLoginContext.Provider value={{ setUserData, userDetails }}>
      {props.children}
    </UserLoginContext.Provider>
  );
};
