import React, { createContext, useEffect, useState } from 'react';
export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
  const [userData, setUserData] = useState();

  //   get user details
  const handleUserData = (data) => {
    setUserData(data.user);
    localStorage.setItem('userdata', JSON.stringify(data.user));
    localStorage.setItem('auth', data.accessToken);
  };

  // onload the page getting userdata

  useEffect(() => {
    let userDetails = localStorage.getItem('userdata');
    if (userDetails) {
      setUserData(JSON.parse(userDetails));
    }
  }, []);

  // log out user

  const handleLogout = () => {
    setUserData(null);
    localStorage.setItem('userdata');
    localStorage.setItem('auth');
  };

  return (
    <UserDataContext.Provider
      value={{ userData, handleUserData, handleLogout }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};
