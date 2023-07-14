import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCartData } from 'networking/Apis/getCartData';
import { UserDataContext } from './UserDataProvider';

export const CartDataContext = createContext();

const CartDataProvider = (props) => {
  const { userDetails } = useContext(UserDataContext);

  const [cartData, setCartData] = useState();

  useEffect(() => {
    userDetails && handleCartData();
  }, [userDetails]);

  //   getting cart products

  const handleCartData = async () => {
    try {
      const response = await getCartData(userDetails?._id);
      if (response.data.type === 'success' && response.status === 200) {
        setCartData(response.data.data.items);
        console.log('gettingCartDataResponse', response);
        alert('getting cart data successfully');
      }
    } catch {
      console.log('error in getting cart data');
    }
  };

  return (
    <CartDataContext.Provider value={{ cartData, setCartData, handleCartData }}>
      {props.children}
    </CartDataContext.Provider>
  );
};

export default CartDataProvider;
