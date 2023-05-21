import React from 'react';
import './chatheader.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { modalSlice } from '../../../store/reducers/modal';

/* 
    хедер чата, отображает вход, если пользователь не ввел свои данные,
    если данные введены, отображает instance
    Также выводит номер активного чата
    Все работает на основе зависимотей из стора
*/

export function ChatHeader() {

    const {activeChat} = useAppSelector(state => state.chatReducer);
    const {isActive} = useAppSelector(state => state.modalReducer);
    const {IdInstance} = useAppSelector(state => state.authReducer);
    const {setActive, setStatus} = modalSlice.actions;
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setStatus('auth'));
        dispatch(setActive(!isActive));
    }

    return <div className='chat-header'>
                <p className='chat-header__guess-number'>{activeChat}</p>
                {IdInstance === '' ? <button 
                onClick={handleClick} className='chat-header__auth-btn'>Войдите
                </button>
                : <p className='chat-header__guess-number'>{IdInstance}</p>}
        </div>

}
