import React, { useState } from 'react';
import UserProfile from 'components/UserProfile/UserProfile';
import {
  backwardlogo,
  chataddlogo,
  messagesendlogo,
  threevectorlogo,
} from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import styles from './styles.module.css';
import useWindowDimensions from 'hooks/UseWindowDimensionHook';

const Chat = () => {
  const { chatPageStrings } = strings;
  const [showChat, setShowChat] = useState(false);

  const mapData = [
    {
      snoTag: 'SNO no. 1076069',
      descp: '   Hi, have you reached?',
      date: '19:20',
      count: '1',
    },
    {
      snoTag: 'SNO no. 1076069',
      descp: '   Lorem ipsum dolor sit amet cskdjnsdkjawqlndd sqjjnjjnadadclnc',
      date: 'May 08',
      count: '2',
    },
    {
      snoTag: 'SNO no. 1076069',
      descp: '   Lorem ipsum dolor sit amet cskdjnsdkjawqlndd sqjjnjjnadadclnc',
      date: 'May 08',
      count: '2',
    },
    {
      snoTag: 'SNO no. 1076069',
      descp: '   Lorem ipsum dolor sit amet cskdjnsdkjawqlndd sqjjnjjnadadclnc',
      date: 'May 08',
      count: '2',
    },
    {
      snoTag: 'SNO no. 1076069',
      descp: '   Lorem ipsum dolor sit amet cskdjnsdkjawqlndd sqjjnjjnadadclnc',
      date: 'May 08',
      count: '2',
    },
  ];

  const chatData = [
    {
      user: 'sender',
      message: 'hi',
      time: '07:20',
    },
    {
      user: 'owner',
      message: 'hi',
      time: '07:26',
    },

    {
      user: 'sender',
      message: 'slnsjgnsgjjns',
      time: '07:30',
    },
    {
      user: 'owner',
      message:
        'ljnjjhasfuihwejifoewjfoewjiofjioewjfoweiofewjfjowejfffljnefjnffqwdlnqflnelfnenfhi',
      time: '07:31',
    },
    {
      user: 'sender',
      message: 'hllknflnwgwpkrnwrpgnpgnpwrng',
      time: '07:32',
    },
    {
      user: 'sender',
      message: 'wwrrgjjngwngvfmmff',
      time: '07:33',
    },
    {
      user: 'owner',
      message: 'ok',
      time: '07:55',
    },
    {
      user: 'sender',
      message: 'lenfljenfoenfanroqn',
      time: '07:56',
    },
    {
      user: 'owner',
      message: 'hqkefkbfkbefewlnneflenfi',
      time: '07:56',
    },
    {
      user: 'owner',
      message: 'w;erjwfepjwpjwpjwewkkeelkkeglkenglknnhi',
      time: '07:58',
    },
  ];

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
    return (
      <div className={styles.chatLeftSection}>
        <div className={styles.chatLeftSectionStyles}>
          {mapData.map((item, index) => {
            return (
              <div key={index} className={styles.individualMessagesStyles}>
                <div className={styles.gapSectionStyles}>
                  <div className={styles.chatListImageStyles}>
                    <img src="" />
                  </div>
                  <div className={styles.chatListTextStyles}>
                    <h3 className={styles.chatListHeadersStyles}>
                      {item.snoTag}
                    </h3>
                    <p className={styles.chatlistDescpStyles}>{item.descp}</p>
                  </div>
                </div>
                <div className={styles.chatListtimeSectionStyles}>
                  <p className={styles.chattingTimeStyles}>{item.date}</p>
                  <div className={styles.chatListCountStyles}>
                    <p className={styles.chatListNumber}>{item.count}</p>
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
        {/* <div className={styles.chatRightSectionStyles}>
          <p className={styles.chatStartMessageStyles}>
            Select a chat to start messaging
          </p>
        </div> */}

        <div className={styles.inBoxSection}>
          <div className={styles.inBoxSnoStyles}>
            <div className={styles.inBoxSnoLeftStyles}>
              <div className={styles.inboxSnoImageStyles}>
                <img src="" />
              </div>
              <p className={styles.inBoxTextStyles}>SNO no. 1076069</p>
            </div>
            <div className={styles.inBoxSnoRightStyles}>
              <img src={threevectorlogo} alt="" className={styles.imageWidth} />
            </div>
          </div>
          <div className={styles.inBoxChatStyles}>
            {chatData.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles.inBoxDayText}>
                    <p className={styles.inBoxDayStyles}>Today</p>
                  </div>
                  <div className={styles.inBoxGapSection}>
                    <div
                      className={
                        item.user === 'sender'
                          ? styles.inBoxFinderSection
                          : styles.inBoxSenderSection
                      }
                    >
                      <p
                        className={
                          item.user === 'sender'
                            ? styles.inBoxFinderStyles
                            : styles.inBoxSenderStyles
                        }
                      >
                        {item.message}
                      </p>
                      <p
                        className={
                          item.user === 'sender'
                            ? styles.inBoxFindertimeStyles
                            : styles.inBoxSendertimeStyles
                        }
                      >
                        {item.time}
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
                name="message"
                customInputStyles={styles.messageInputStyles}
                type="text"
                placeholder="Type your message here"
              />
            </div>
            <div className={styles.chatMessageIconStyles}>
              <img src={messagesendlogo} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
      </>
    );
  };

  return <div>{emptyChatSection()}</div>;
};

export default Chat;
