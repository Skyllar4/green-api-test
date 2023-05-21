import React from 'react';
import './froms.scss';
import { authSlice } from '../../../../store/reducers/auth';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { modalSlice } from '../../../../store/reducers/modal';

interface modalInputInterface {
    btn: string,
}

/* 
    Компонент регистрирует в приложении instnce и apiToken
*/

export function AuthForm({btn}: modalInputInterface) {

    const {isActive} = useAppSelector(state => state.modalReducer);
    const {setActive} = modalSlice.actions;
    const {setApiTokenInstance, setIdInstance} = authSlice.actions;

    const [idInstance, setidInstance] = React.useState('');
    const [apiTokenInstance, setApiToken] = React.useState('');
    const [error, serError] = React.useState(false);
    
    const dispatch = useAppDispatch();

    const handleChangeIdInstance = (event: React.ChangeEvent<HTMLInputElement>) => {
        setidInstance(event.target.value);
    }

    const handleChangeApiTokenInstance = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApiToken(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (idInstance === '') { // Проверка на неккоректно заполненную форму
            serError(true);
            setApiToken('');
            return
        }
        dispatch(setApiTokenInstance(apiTokenInstance.trim()));
        dispatch(setIdInstance(idInstance.trim()));
        setidInstance('');
        setApiToken('');
        dispatch(setActive(!isActive));
    }

    return <form action="#" method='POST' onSubmit={handleSubmit}>
            <input type="text" className='modal__fields' placeholder='IdInstance' value={idInstance} onChange={handleChangeIdInstance} />
            <input type="text" className='modal__fields' placeholder='ApiTokenInstance' value={apiTokenInstance} onChange={handleChangeApiTokenInstance} />
            {error ? <p className='error-text'>Заполните все поля</p>: ''}
            <button type='submit' className='modal__submit'>{btn}</button>
        </form>

}
