import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
interface Message {
    
        username: string|null
        message: string

}
export  interface chatsSliceState {
    messages:Message[];
   
}
const initialState:chatsSliceState ={
    messages:[],
   
}

export const chatsSlice = createAppSlice({
    name:"chats",
    initialState,
    reducers:create =>({
        fetchMessages:create.reducer(
            (state)=>{
                const raw_messages = localStorage.getItem('chatMessages')
                if (raw_messages) {
                    const messages = JSON.parse(raw_messages) as chatsSliceState
                    state.messages = messages.messages
                    
                }
                console.log(state.messages,"fetch")
            }
        ),
       
    }),
    selectors:{
        selectMessages:chats=>chats.messages
    }
}) 
export const { fetchMessages } = chatsSlice.actions
export const { selectMessages } = chatsSlice.selectors