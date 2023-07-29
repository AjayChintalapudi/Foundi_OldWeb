import React, { useContext, useEffect, useRef, useState } from 'react';
import UserProfile from 'components/UserProfile/UserProfile';
import {
  backwardlogo,
  chataddlogo,
  downarrowimage,
  messagesendlogo,
  threevectorlogo,
  userprofileuparrow,
} from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import styles from './styles.module.css';
import { PubNubDataContext } from 'providers/PubNubDataProvider';
import { useLocation } from 'react-router-dom';
import { snoCode } from 'networking/Apis/snoCode';
import { UserDataContext } from 'providers/UserDataProvider';

const Chat = () => {
  /*strings*/
  const { chatPageStrings } = strings;

  /*uselocation to fetch sno product details*/
  const location = useLocation();

  /*state*/
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [snoCodeData, setSnoCodeData] = useState([location?.state]);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isInputFocussed, setIsInputFocussed] = useState(false);
  // console.log(snoCodeData, 'snoCodeData');

  /*context*/
  const { sendMessage, setMessage, message, messages } =
    useContext(PubNubDataContext);
  const { userDetails } = useContext(UserDataContext);

  /* input focus change*/

  const handleInputFocusChange = (focused) => {
    setIsInputFocussed(focused);
  };

  /*scroll and send message will appear first instead all messages*/
  const chatRef = useRef(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;

      const handleScroll = () => {
        if (chatRef.current.scrollTop >= 10) {
          setShowScrollToTop(false);
        } else {
          setShowScrollToTop(true);
        }
      };

      chatRef.current.addEventListener('scroll', handleScroll);

      return () => {
        chatRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [messages, selectedProduct]);

  const handleScrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
      setShowScrollToTop(false);
    }
  };

  /*send message*/

  const handleSendMessage = (msgText) => {
    const msgObj = {
      userDetails: { _id: userDetails._id },
      type: 'sender',
      msg: msgText,
    };
    sendMessage(msgObj);
  };

  /* formatted time:*/

  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  const emptyChatSection = () => {
    return (
      <div className={styles.chatSectionStyles}>
        {chatNavBarSection()}
        {/* {emptyMessageListSection()} */}
        {chatListSection()}
      </div>
    );
  };

  const chatNavBarSection = () => {
    return (
      <div className={styles.topSectionStyles}>
        <div className={styles.messageSectionStyles}>
          <div className={styles.backwardImgStyles}>
            <img src={backwardlogo} className={styles.imageWidth} />
          </div>
          <h3 className={styles.messageHeaderStyles}>
            {chatPageStrings.chatHeading}
          </h3>
        </div>
        <div>
          <UserProfile />
        </div>
      </div>
    );
  };

  const emptyMessageListSection = () => {
    return (
      <div className={styles.bottomSectionStyles}>
        <p className={styles.chatDescpStyles}>{chatPageStrings.chatDescp}</p>
      </div>
    );
  };

  const chatListSection = () => {
    return (
      <div className={styles.chatListStyles}>
        {chatLeftSection()}
        {chatRightSection()}
      </div>
    );
  };

  const chatLeftSection = () => {
    const handleItemClick = (item) => {
      setSelectedProduct(item);
      console.log(item);
    };
    return (
      <div className={styles.chatLeftSection}>
        <div className={styles.chatLeftSectionStyles}>
          {snoCodeData?.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.individualMessagesStyles}
                onClick={() => handleItemClick(item)}
              >
                <div className={styles.gapSectionStyles}>
                  <div className={styles.chatListImageStyles}>
                    <img
                      src={item?.product_image}
                      className={styles.imageWidth}
                    />
                  </div>
                  <div className={styles.chatListTextStyles}>
                    <h3 className={styles.chatListHeadersStyles}>
                      {/* {item.snoTag} */}
                      SNO no. &nbsp;{item?.sno}
                    </h3>
                    <p className={styles.chatlistDescpStyles}>{item?.descp}</p>
                  </div>
                </div>
                <div className={styles.chatListtimeSectionStyles}>
                  <p className={styles.chattingTimeStyles}>
                    date:
                    {/* {item.date} */}
                  </p>
                  <div className={styles.chatListCountStyles}>
                    <p className={styles.chatListNumber}>
                      1{/* {item.count} */}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const chatRightSection = () => {
    return (
      <>
        {selectedProduct ? (
          <div className={styles.inBoxSection}>
            {selectedProduct && (
              <div className={styles.inBoxSnoStyles}>
                <div className={styles.inBoxSnoLeftStyles}>
                  <div className={styles.inboxSnoImageStyles}>
                    <img
                      src={selectedProduct?.product_image}
                      className={styles.imageWidth}
                    />
                  </div>
                  <p className={styles.inBoxTextStyles}>
                    {selectedProduct?.product_name}
                  </p>
                </div>
                <div className={styles.inBoxSnoRightStyles}>
                  <img
                    src={threevectorlogo}
                    alt=""
                    className={styles.imageWidth}
                  />
                </div>
              </div>
            )}

            <div className={styles.inBoxChatStyles} ref={chatRef}>
              {messages.map((item, index) => {
                const currentMessageDate = new Date(item.time);
                const prevMessageDate =
                  index > 0 ? new Date(messages[index - 1].time) : undefined;
                const showDate =
                  !prevMessageDate ||
                  currentMessageDate - prevMessageDate >= 48 * 60 * 60 * 1000;
                console.log(messages, 'messages');
                return (
                  <div key={index}>
                    {showDate && (
                      <div className={styles.inBoxDayText}>
                        <p className={styles.inBoxDayStyles}>
                          {formatDate(currentMessageDate)}
                        </p>
                      </div>
                    )}
                    <div className={styles.inBoxGapSection}>
                      <div
                        className={
                          userDetails?._id === item?.userDetails?._id
                            ? styles.inBoxSenderSection
                            : styles.inBoxFinderSection
                        }
                      >
                        <p
                          className={
                            userDetails?._id === item?.userDetails?._id
                              ? styles.inBoxSenderStyles
                              : styles.inBoxFinderStyles
                          }
                        >
                          {item?.msg}

                          {userDetails?._id === item?.userDetails?._id
                            ? 'Founer typing'
                            : 'owner typing'}
                        </p>
                        <p
                          className={
                            userDetails?._id === item?.userDetails?._id
                              ? styles.inBoxSendertimeStyles
                              : styles.inBoxFindertimeStyles
                          }
                        >
                          {currentMessageDate.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.chatInputSection}>
              <div className={styles.inputGapSection}>
                <div className={styles.chatAddIconStyles}>
                  <img src={chataddlogo} alt="" className={styles.imageWidth} />
                </div>
                <Input
                  type="text"
                  name="message"
                  value={message}
                  onFocus={() => handleInputFocusChange(true)}
                  onBlur={() => handleInputFocusChange(false)}
                  onKeyDown={(e) => {
                    if (e.key !== 'Enter') return;
                    handleSendMessage(message);
                    // sendMessage(message);
                  }}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here"
                  customInputStyles={styles.messageInputStyles}
                />
              </div>
              <div
                className={styles.chatMessageIconStyles}
                onClick={() => handleSendMessage(message)}
              >
                <img
                  src={messagesendlogo}
                  alt=""
                  className={styles.imageWidth}
                />
              </div>
            </div>

            {showScrollToTop && (
              <div
                className={styles.scrollToTopBlock}
                onClick={handleScrollToBottom}
              >
                <img src={downarrowimage} className={styles.imageWidth} />
              </div>
            )}
          </div>
        ) : (
          <div className={styles.chatRightSectionStyles}>
            <p className={styles.chatStartMessageStyles}>
              Select a chat to start messaging
            </p>
          </div>
        )}
      </>
    );
  };

  return <div>{emptyChatSection()}</div>;
};

export default Chat;
