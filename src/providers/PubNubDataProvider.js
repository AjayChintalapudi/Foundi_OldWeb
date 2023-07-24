import { usePubNub } from 'pubnub-react';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserDataContext, UserDataProvider } from './UserDataProvider';

export const PubNubDataContext = createContext();

const PubNubDataProvider = (props) => {
  const { userDetails } = useContext(UserDataContext);
  // console.log(userDetails, 'uuid');
  const pubnub = usePubNub();
  const [channels] = useState(['awesome-channel']);
  const [messages, addMessage] = useState([]);
  const [message, setMessage] = useState('');

  // handle chat message

  const handleMessage = (event) => {
    const message = event.message;
    if (message === ' string' || message.hasownProperty('text')) {
      const text = message.text || message;
      addMessage((messages) => [...messages, text]);
    }
  };
  // send chat  message
  const sendMessage = (message) => {
    if (message) {
      pubnub
        .publish({ channel: channels[0], message })
        .then(() => setMessage(''));
    }
  };

  // add event listeners w.r.t events and messages

  useEffect(() => {
    const listenerParams = { message: handleMessage };
    pubnub.addListener(listenerParams);
    pubnub.subscribe({ channels });
    pubnub.setUUID(userDetails?._id + ' ');
    return () => {
      pubnub.unsubscribe({ channels });
      pubnub.removeListener(listenerParams);
    };
  }, [pubnub, channels, userDetails]);

  return (
    <PubNubDataContext.Provider value={{ sendMessage, setMessage, message }}>
      {props.children}
    </PubNubDataContext.Provider>
  );
};

export default PubNubDataProvider;
