import React, { createContext, useState } from 'react';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

export const SpinnerContext = createContext();

const SpinnerProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SpinnerContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingSpinner />}
      {props.children}
    </SpinnerContext.Provider>
  );
};

export default SpinnerProvider;
