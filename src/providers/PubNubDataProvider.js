import { usePubNub } from 'pubnub-react';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserDataContext } from './UserDataProvider';
import { getChatList } from 'networking/Apis/getChatList';
import sendMessageSound from 'assets/Audio/notification.mp3';

export const PubNubDataContext = createContext();

const PubNubDataProvider = (props) => {
  // contexts
  const { userDetails } = useContext(UserDataContext);
  // console.log(userDetails, 'uuid');
  const pubnub = usePubNub();
  // states
  const [channels] = useState(['619cad100c52830ea6cf7631']);
  const [messages, addMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [chatList, setChatList] = useState();
  const [isSending, setIsSending] = useState(false);

  // handle chat message

  const handleMessage = (event) => {
    const message = event.message;
    console.log(message);
    // console.log(event, 'event---');
    if (
      typeof message.msg === 'string' ||
      message.image ||
      message.msg.hasOwnProperty('text')
    ) {
      // Get PubNub server's current time
      pubnub.time((status, response) => {
        if (!status.error) {
          console.log(response, 'pubunub response');
          // convert the pubnub currect time into date
          const messageSentDate = response.timetoken;
          const getTodayDate = new Date(messageSentDate / 10000);
          console.log(getTodayDate, 'getTodayDate');
          message.time = getTodayDate.toLocaleString();
          addMessages((prev) => [...prev, message]);
        } else {
          console.error('Error fetching PubNub time', status);
        }
      });
    }
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

  // message with sound

  useEffect(() => {
    if (isSending) {
      const audio = new Audio(sendMessageSound);
      audio.play();
      audio.onended = () => {
        setIsSending(false);
      };
    }
  }, [isSending]);

  // send chat  message
  const sendMessage = (message) => {
    console.log('sending message', message);
    if (message) {
      setIsSending(true);
      pubnub.publish({ channel: channels[0], message }).then(() => {
        setMessage('');
        setUploadedFile(null);
      });
    }
  };

  /*get chat list*/

  const gettingChatList = async () => {
    try {
      const gettingChatListResponse = await getChatList(userDetails?._id);
      if (
        gettingChatListResponse.data.type === 'success' &&
        gettingChatListResponse.status === 200
      ) {
        setChatList(gettingChatListResponse.data.data);
        console.log(gettingChatListResponse, 'gettingChatListResponse');
      }
    } catch {
      console.log('error in getting chat data');
    }
  };

  useEffect(() => {
    gettingChatList();
  }, [userDetails]);

  // add event listeners w.r.t events and messages

  useEffect(() => {
    const listenerParams = { message: handleMessage };
    pubnub.addListener(listenerParams);
    // pubnub.subscribe({ channels: ids });
    pubnub.subscribe({ channels });
    pubnub.setUUID(userDetails?._id + ' ');
    return () => {
      // pubnub.unsubscribe({ channels: ids });
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
        uploadedFile,
        setUploadedFile,
        chatList,
        setChatList,
      }}
    >
      {props.children}
    </PubNubDataContext.Provider>
  );
};

export default PubNubDataProvider;
