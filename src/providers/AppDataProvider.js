import React, { createContext, useState } from 'react';

export const AppDataContext = createContext();

export const AppDataProvider = (props) => {
  const [cartData, setCartData] = useState([]);

  console.log(cartData, 'cartdata....');

  return (
    <AppDataContext.Provider value={{ cartData, setCartData }}>
      {props.children}
    </AppDataContext.Provider>
  );
};
