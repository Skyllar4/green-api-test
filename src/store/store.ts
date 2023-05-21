import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers/modal';
import authReducer from './reducers/auth';
import chatReducer from './reducers/chat';

export const rootReducer = combineReducers({
    modalReducer,
    authReducer,
    chatReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
