import React from 'react';
import '../AddNumber/addNumber.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { modalSlice } from '../../../../store/reducers/modal';

export function AddNumber() {

    const {isActive} = useAppSelector(state => state.modalReducer);
    const {setActive, setStatus} = modalSlice.actions;
    const dispatch = useAppDispatch();


    const handleClick = () => {
        dispatch(setStatus('addChat'));
        dispatch(setActive(!isActive));
    }

    return <button className='chat-list__add-btn' onClick={handleClick}>
            <span className='add-btn__plus'>+</span>
            Добавить чат
        </button>

}
