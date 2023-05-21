import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface modalInterface {
    isActive: boolean,
    modalState: string
}

const initialState: modalInterface = {
    isActive: false,
    modalState: ''
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setActive(state, action: PayloadAction<boolean>) {
            state.isActive = action.payload;
        },
        setStatus(state, action: PayloadAction<string>) {
            state.modalState = action.payload;
        }
    }
})

export default modalSlice.reducer;
