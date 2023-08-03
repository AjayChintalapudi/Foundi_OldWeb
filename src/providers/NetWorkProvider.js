import NetworkToaster from 'components/Toaster/NetworkToaster';
import React, { createContext, useEffect, useState } from 'react';

export const NetworkStatusContext = createContext();

export const NetWorkProvider = (props) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleNetwork = () => {
      setIsOnline(navigator.onLine);
      console.log(navigator.onLine, 'navigator.onLine');
      if (navigator.onLine) {
        setShowMessage(true);

        const timer = setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        return () => {
          clearTimeout(timer);
        };
      } else {
        setShowMessage(true);
      }
    };

    window.addEventListener('online', () => handleNetwork());
    window.addEventListener('offline', () => handleNetwork());
    return () => {
      window.removeEventListener('online', () => handleNetwork());
      window.removeEventListener('offline', () => handleNetwork());
    };
  }, []);

  const networkStatusValue = {
    isOnline: isOnline,
    showMessage: showMessage,
  };

  return (
    <NetworkStatusContext.Provider value={networkStatusValue}>
      {props.children}
      <NetworkToaster />
    </NetworkStatusContext.Provider>
  );
};
