import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { store } from "../../app/store"

export interface inputSliceState{
    message: string
}

const initialState:inputSliceState = {
    message: ""
}
interface messages {
    messages:[
        {
            username: string|null
            message: string

        }
    ]
}
export const inputSlice = createAppSlice({
    name:"input",
    initialState,
    reducers: create =>({
        setMessage: create.reducer(
            (state, action: PayloadAction<string>)=>{
                state.message = action.payload
            },
        ),
        sendMessage: create.reducer(
            (state)=>{
                const rdStore = store.getState()
                const message = state.message
                const username = rdStore.user.name
                const raw_messages = localStorage.getItem('chatMessages') 
                if (raw_messages) {
                    const messages = JSON.parse(raw_messages) as messages
                    const new_message = { username: username, message: message }
                    messages.messages.push(new_message)
                    localStorage.setItem('chatMessages',JSON.stringify(messages))
                }
            }
        )

    }),
    selectors:{
        selectMessage: input=>input.message
    }
})

export const {setMessage,sendMessage} = inputSlice.actions
export const {selectMessage} = inputSlice.selectors