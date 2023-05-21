import React from 'react';
import './modal.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { AuthForm } from './forms/AuthForm';
import { AddChat } from './forms/AddChat';
import { modalSlice } from '../../../store/reducers/modal';


interface modalInterface {
    title: string,
    buttonValue: string
}

export function Modal({title, buttonValue}: modalInterface) {

    const {isActive} = useAppSelector(state => state.modalReducer);
    const {setActive} = modalSlice.actions;
    const dispatch = useAppDispatch();

    const handleClickParent = () => {
        dispatch(setActive(!isActive));
    }

    if (isActive) {
        return <div className='modal' onClick={handleClickParent}>
            <div className='modal__content' onClick={(event) => {event.stopPropagation()}}>
                <h2 className='modal__title'>{title}</h2>
                {title === 'Введите данные' ? <AuthForm btn={buttonValue} /> : <AddChat btn={buttonValue}/>}
            </div>
        </div>
    } else {
        return <span></span>
    }

}
