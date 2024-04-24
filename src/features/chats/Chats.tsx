import { useEffect, useState, useRef } from 'react';
import styles from './chats.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMessages, selectMessages } from './chatsSlice';
import { selectUserName } from '../user/userSlice';

export const Chats = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const username = useAppSelector(selectUserName);
  const [count, setCount] = useState(25);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {
    const channel = new BroadcastChannel('messageChannel');
    channel.onmessage = () => {
      dispatch(fetchMessages());
    };
    return () => channel.close();
  }, []);

  const handleScroll = (e:any) => {
    const target = e.target;
    if (target.scrollTop === 0) {
      setCount((prevCount) => prevCount + 25);
    }
  };

  const chatHistory = () => {
    return messages
      .slice(-count) 
      .map((message, index) => (
        <div
          key={index}
          className={`${styles.chat} ${message.username === username ? styles.out : styles.in}`}
        >
          <span>
            <i>{message.username}</i>
            <p>{message.message}</p>
          </span>
        </div>
      ));
  };

  return (
    <div className={styles.chats} onScroll={handleScroll} ref={chatContainerRef}>
      <div className={styles.chatsInner}>
        {messages && messages.length > 0 ? (
          chatHistory()
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}></div>
            <p className={styles.emptyTitle}>You have no new messages</p>
          </div>
        )}
      </div>
    </div>
  );
};
