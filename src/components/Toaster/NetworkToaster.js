import React, { useContext } from 'react';
import styles from './styles.module.css';
import { NetworkStatusContext } from 'providers/NetWorkProvider';

const NetworkToaster = () => {
  const { isOnline, showMessage } = useContext(NetworkStatusContext);

  if (showMessage) {
    return (
      <div
        className={`${styles.networkToaster} ${
          isOnline ? styles.onLine : styles.offLine
        }`}
      >
        <p>{isOnline ? 'You are online' : 'You are offline'}</p>
      </div>
    );
  }

  return null;
};

export default NetworkToaster;
