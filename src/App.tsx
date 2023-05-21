import React from 'react';
import './Styles/main.scss';
import { Layout } from './Components/Layout/Layout';
import { ChatList } from './Components/MainChat/ChatList/ChatList';
import { ChatInterface } from './Components/MainChat/ChatInterface/ChatInterface';
import { ChatInput } from './Components/MainChat/ChatInput/ChatInput';
import { ChatHeader } from './Components/MainChat/Chatheader/ChatHeader';
import { Modal } from './Components/UI/Modal/Modal';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { MessageList } from './Components/MainChat/ChatInterface/MessageList/MessageList';
import getMessages from "./utils/getMessages";
import { chatSlice } from './store/reducers/chat';
import { responseChatList } from './utils/getMessages';

function App() {

  setInterval(async () => {
    updateChatList(await getMessages(IdInstance, ApiTokenInstance))
  }, 5000); // запрос на получение новых сообщений
  const {IdInstance, ApiTokenInstance} = useAppSelector(state => state.authReducer);
  const {modalState, isActive} = useAppSelector(state => state.modalReducer);
  const {setGuessMess} = chatSlice.actions;
  const dispatch = useAppDispatch();
 

  const updateChatList = (notificatinsArr: Array<responseChatList>) => {
      if (!notificatinsArr.length) {
          return
      }

      dispatch(setGuessMess([notificatinsArr[0].guessNumber, notificatinsArr[0].textMessage]));
      notificatinsArr.shift();
      updateChatList(notificatinsArr)

        // for (let i of notificatinsArr) {
        //   dispatch(setGuessMess([i.guessNumber, i.textMessage]));
        // }
 
  }

  return (
    <>
      <div className="app">
          <Layout>
              <ChatList />
              <div className='tech-block'>
                <ChatHeader />
                <ChatInterface>
                    <MessageList />
                    <ChatInput />
                </ChatInterface>
              </div>
          </Layout>
      </div>
      {modalState === 'auth' && isActive ? <Modal title={'Введите данные'} buttonValue='Войти'/> : ''}
      {modalState === 'addChat' && isActive ? <Modal title={'Введите номер'} buttonValue='Добавить'/> : ''}
    </>
  );
}

export default App;
