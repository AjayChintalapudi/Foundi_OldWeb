import { usePubNub } from 'pubnub-react';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserDataContext } from './UserDataProvider';

export const PubNubDataContext = createContext();

const PubNubDataProvider = (props) => {
  const { userDetails } = useContext(UserDataContext);
  // console.log(userDetails, 'uuid');
  const pubnub = usePubNub();
  const [channels] = useState(['product-chat']);
  const [messages, addMessages] = useState([]);
  const [message, setMessage] = useState('');

  // handle chat message

  const handleMessage = (event) => {
    const message = event.message;
    console.log(event, 'event---');
    if (typeof message === 'string' || message.hasOwnProperty('text')) {
      const text = message.text || message;
      const currentDate = new Date();
      console.log(currentDate, 'currentDate');
      const formattedTime = currentDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      console.log(formattedTime, 'formattedTime');
      const isToday = isSameDay(
        currentDate,
        new Date(messages[messages.length - 1]?.timestamp)
      );
      console.log(isToday, 'isToday');
      const messageData = { text, time: formattedTime };
      console.log(messageData, 'messageData');
      addMessages((prev) => [...prev, messageData]);
    }
  };
  console.log(messages, 'messages');

  /****save chat messages in to local storage****/

  useEffect(() => {
    // Load messages from localStorage when the component mounts
    const msgs = JSON.parse(localStorage.getItem('messages'));
    if (msgs && msgs.length > 0) {
      addMessages(msgs);
    }
  }, []);

  useEffect(() => {
    // Save messages to localStorage whenever the 'messages' state changes
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  // same day

  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
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
    pubnub.getUUID();
    return () => {
      pubnub.unsubscribe({ channels });
      pubnub.removeListener(listenerParams);
    };
  }, [pubnub, channels, userDetails]);

  return (
    <PubNubDataContext.Provider
      value={{
        sendMessage,
        setMessage,
        message,
        messages,
      }}
    >
      {props.children}
    </PubNubDataContext.Provider>
  );
};

export default PubNubDataProvider;
