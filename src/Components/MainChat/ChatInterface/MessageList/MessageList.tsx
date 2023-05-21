import React from 'react';
import './messageList.scss';
import { useAppSelector } from '../../../../hooks/redux';
import concatArr from '../../../../utils/concatArr';

interface message {
    id: number,
    message: string
}

export function MessageList() {

    let chatListElements: Array<message> = [];

    const {activeChat, chatList} = useAppSelector(state => state.chatReducer);
    if (activeChat) {
        const chatMess = chatList.filter((el) => el.num === activeChat);
        chatListElements = concatArr(chatMess[0].myMess, chatMess[0].guessMess);
    }

    const messageElements = chatListElements.map((el, index) => {
        return <div key={index} className={el.id % 2 === 1 ? 'message-container__my-message' : 'message-container__guess-message'}>
                <div className={el.id % 2 === 0 ? 'my-message': 'guess-message'}>
                {el.message}
                    <span></span>
                </div>
        </div>
    })

    if (activeChat) {
        return <>{messageElements}</>
    } else {
        return <div className='no-chats'>У вас нет активных чатов, напишите кому-нибудь</div>
    }

}
