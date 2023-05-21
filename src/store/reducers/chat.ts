import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
  
interface chatState<T> {
    chatList: Array<T>,
    activeChat: string
}

export interface chatListElInterface {
    readonly num: string,
    myMess: Array<string>,
    guessMess: Array<string>
}

const initialState: chatState<chatListElInterface> = {
    chatList: [],
    activeChat: ''
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChatList(state, action: PayloadAction<chatListElInterface>) {
            state.chatList.push(action.payload);
        },
        setActiveChat(state, action: PayloadAction<string>) {
            state.activeChat = action.payload;
        },
        setGuessMess(state, action: PayloadAction<Array<string>>) {
            if (!action.payload.length) {
                return
            }
            if (state.chatList.filter((el) => el.num === action.payload[0]).length) { // Проверям, есть ли уже чат с данным номером, номер всегда идет с 0 индексом
               const chatIndex =  state.chatList.findIndex((el) => el.num === action.payload[0]); // Если есть, изменяем его
               state.chatList[chatIndex].guessMess.push(action.payload[1]);
               return
            }
           state.chatList.push({
                num: action.payload[0], // обрезаем последние 5 символов (@c.us)
                myMess: [],
                guessMess: [action.payload[2]]
           });
        },
        setMymess(state, action: PayloadAction<Array<string>>) { // работает по аналогии с функцией выше, не делаем проверку на то, сущетсвует ли данный чат, так как он всегда сущетсвкет
            const chatIndex =  state.chatList.findIndex((el) => el.num === action.payload[0]);
            state.chatList[chatIndex].myMess.push(action.payload[1]);
        }
    }
})

export default chatSlice.reducer;
