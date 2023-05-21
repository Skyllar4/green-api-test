import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    IdInstance: '',
    ApiTokenInstance: '',
    userNumber: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIdInstance(state, action: PayloadAction<string>) {
            state.IdInstance = action.payload;
        },
        setApiTokenInstance(state, action: PayloadAction<string>) {
            state.ApiTokenInstance = action.payload;
        },
        setuserNumber(state, action: PayloadAction<string>) {
            state.userNumber = action.payload;
        }
    }
})

export default authSlice.reducer;
