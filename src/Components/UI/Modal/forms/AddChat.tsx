import React from 'react';
import './froms.scss';
import { authSlice } from '../../../../store/reducers/auth';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { modalSlice } from '../../../../store/reducers/modal';
import { chatListElInterface, chatSlice } from '../../../../store/reducers/chat';
import checkContact from '../../../../utils/checkContact';

interface addChat {
    btn: string
}

/* 
    Компонет добавляет новый чат по введенному номеру
*/

export function AddChat({btn}: addChat) {

    const {isActive} = useAppSelector(state => state.modalReducer);
    const {IdInstance, ApiTokenInstance} = useAppSelector(state => state.authReducer);
    const {setActive} = modalSlice.actions;
    const {setChatList, setActiveChat} = chatSlice.actions;
    const [guestNum, setGuessNum] = React.useState('');
    const [error, serError] = React.useState(false);
    const {setuserNumber} = authSlice.actions;
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGuessNum(event.target.value);
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (guestNum === '') { // Проверка на пустую форму
            serError(true);
            return
        }

        let checkWA  = await checkContact(IdInstance, ApiTokenInstance, guestNum);
        if (!checkWA) {
            serError(true); // Проверка на то, есть ли номер в WA
            return
        }

        const newChat: chatListElInterface = {
            num: guestNum,
            myMess: [], // Формируем объект, чтобы запушить его в глобльный стэйт
            guessMess: []
        }
        dispatch(setChatList(newChat));
        dispatch(setuserNumber(guestNum.trim()));
        dispatch(setActiveChat(guestNum.trim()));
        setGuessNum('');
        dispatch(setActive(!isActive));
    }

    return <form action="#" method='POST' onSubmit={handleSubmit}>
                <input type="text" placeholder='+7XXXXXXXXXX' value={guestNum} onChange={handleChange} className='modal__fields' />
                {error ? <p className='error-text'>Введите номер</p>: ''}
                <button type='submit' className='modal__submit'>{btn}</button>
        </form>

}
