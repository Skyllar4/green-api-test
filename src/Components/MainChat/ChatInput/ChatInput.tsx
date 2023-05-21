import React from 'react';
import './chatInput.scss';
import sendMessage from '../../../utils/sendMessage';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { chatSlice } from '../../../store/reducers/chat';

export function ChatInput() {

    const [message, setMessage] = React.useState('');

    const {IdInstance, ApiTokenInstance} = useAppSelector(state => state.authReducer);
    const {setMymess} = chatSlice.actions;
    const {activeChat} = useAppSelector(state => state.chatReducer);
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const mess = {
            chatId: `${activeChat}@c.us`,
            message: message
        }
        dispatch(setMymess([activeChat, message]));
        setMessage('');
        sendMessage(mess, IdInstance, ApiTokenInstance);
    }

    return <form action="#" method='POST' onSubmit={handleSubmit} className='message-form'>
                <input type="text"  placeholder='Введите сообщение...' value={message} onChange={handleChange} className='message-form__input'/>
                <button type='submit' className='message-form__submit-btn'></button>
            </form>

}