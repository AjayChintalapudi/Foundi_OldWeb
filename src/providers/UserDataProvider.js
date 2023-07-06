import React, { createContext, useEffect, useState } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
  const [userDetails, setUserDetails] = useState(null);

  //   set user details
  const setUserData = (data) => {
    console.log('signUpResponse', data);
    setUserDetails(data.user);
    localStorage.setItem('user', JSON.stringify(data.user));
  };

  // onload the page getting userdata

  useEffect(() => {
    let userDetails = localStorage.getItem('user');
    if (userDetails) {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);

  // log out user
  const handleLogout = () => {
    setUserDetails(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  };

  return (
    <UserDataContext.Provider
      value={{ userDetails, setUserData, handleLogout }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};
