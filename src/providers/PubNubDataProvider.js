import { usePubNub } from 'pubnub-react';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserDataContext } from './UserDataProvider';
import { EcomProducts } from 'networking/Apis/ecomproducts';

export const PubNubDataContext = createContext();

const PubNubDataProvider = (props) => {
  // contexts
  const { userDetails } = useContext(UserDataContext);
  // console.log(userDetails, 'uuid');
  const pubnub = usePubNub();
  // states
  const [channels] = useState(['product-chat']);
  const [messages, addMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [productDetails, setProductDetails] = useState();
  const [ids, setIds] = useState([]);

  // handle chat message

  const handleMessage = (event) => {
    const message = event.message;
    console.log(event, 'event---');
    if (typeof message === 'string' || message.hasOwnProperty('text')) {
      const text = message.text || message;
      // Get PubNub server's current time
      pubnub.time((status, response) => {
        if (!status.error) {
          const currentDate = new Date(response.timetoken / 10000);
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
        } else {
          console.error('Error fetching PubNub time', status);
        }
      });
    }
  };
  // console.log(messages, 'messages');

  // same day

  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

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

  // send chat  message
  const sendMessage = (message, channelId) => {
    if (message) {
      pubnub
        .publish({ channel: channelId, message })
        .then(() => setMessage(''));
    }
  };

  // getting chatlist

  useEffect(() => {
    handleGettingChatList();
  }, []);

  const handleGettingChatList = async () => {
    try {
      const chatListResponse = await EcomProducts();
      if (
        chatListResponse.data.type === 'success' &&
        chatListResponse.status === 200
      ) {
        const productData = chatListResponse.data.data;
        const allIds = productData.map((item) => item._id);
        setIds(allIds);
        setProductDetails(productData);
        console.log(allIds);
        console.log(chatListResponse, 'chatListResponse');
      }
    } catch {
      console.log('error in chatlist response');
    }
  };

  // add event listeners w.r.t events and messages

  useEffect(() => {
    const listenerParams = { message: handleMessage };
    pubnub.addListener(listenerParams);
    pubnub.subscribe({ channels: ids });
    pubnub.setUUID(userDetails?._id + ' ');
    return () => {
      pubnub.unsubscribe({ channels: ids });
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
        productDetails,
        ids,
      }}
    >
      {props.children}
    </PubNubDataContext.Provider>
  );
};

export default PubNubDataProvider;
