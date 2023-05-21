import React from 'react';
import './chatList.scss';
import { AddNumber } from './AddNumber/AddNumber';
import { useAppSelector } from '../../../hooks/redux';
import { chatListElInterface } from '../../../store/reducers/chat';
import { ChatListEl } from './ChatListEl/ChatListEl';

export function ChatList() {

    const {chatList} = useAppSelector(state => state.chatReducer);

    const chatListItems = chatList.map((el: chatListElInterface) => {
        return <ChatListEl key={el.num} lastmsg={el.myMess[0]} guessNum={el.num} />
    });

    return <div className='chat-list'>
            <ul>
                {chatListItems}
            </ul>
            <AddNumber />
        </div>

}
