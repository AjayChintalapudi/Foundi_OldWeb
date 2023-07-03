import React, { createContext, useEffect, useState } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
  const [userDetails, setUserDetails] = useState(null);

  // onload the page getting userdata

  useEffect(() => {
    let userDetails = localStorage.getItem('user');
    if (userDetails) {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);

  //   set user details
  const setUserData = (user) => {
    setUserDetails(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

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
