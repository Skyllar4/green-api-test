import React from 'react';
import './chatListEl.scss';
import { chatSlice } from '../../../../store/reducers/chat';
import { useAppDispatch } from '../../../../hooks/redux';

interface chatListEl {
    guessNum: string,
    lastmsg: string
}

export function ChatListEl({guessNum, lastmsg}: chatListEl) {

    const {setActiveChat} = chatSlice.actions;
    const dispatch = useAppDispatch();

    return <li className='chat-list-el' onClick={(event) => dispatch(setActiveChat(guessNum))}>
            <p>{guessNum}</p>
            {lastmsg}
        </li>

}