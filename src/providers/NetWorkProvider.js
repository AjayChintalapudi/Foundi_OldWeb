import React, { createContext, useEffect, useState } from 'react';

export const NetworkStatusContext = createContext();

export const NetWorkProvider = (props) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const handleNetwork = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        setShowMessage(true);

        const timer = setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        return () => {
          clearTimeout(timer);
        };
      }
    };

    window.addEventListener('online', handleNetwork);
    window.addEventListener('offline', handleNetwork);

    return () => {
      window.removeEventListener('online', handleNetwork);
      window.removeEventListener('offline', handleNetwork);
    };
  }, []);

  const networkStatusValue = {
    isOnline: isOnline,
    showMessage: showMessage,
  };
  return (
    <NetworkStatusContext.Provider value={networkStatusValue}>
      {props.children}
    </NetworkStatusContext.Provider>
  );
};
