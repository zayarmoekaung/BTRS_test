import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface inputSliceState{
    message: string
}

const initialState:inputSliceState = {
    message: ""
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

    }),
    selectors:{
        selectMessage: input=>input.message
    }
})

export const {setMessage} = inputSlice.actions
export const {selectMessage} = inputSlice.selectors