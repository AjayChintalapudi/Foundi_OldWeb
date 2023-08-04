import React, { createContext, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const showToast = (message, data) => {
    toast.success(
      <>
        <p>{message}</p>
        {data?.msg && <p>{data.msg}</p>}
        {data?.image && <img src={data.image} alt="Sent" />}
      </>,
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
