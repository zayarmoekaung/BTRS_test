import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface inputSliceState{
    message: string|null
}

const initialState:inputSliceState = {
    message: ""
}
export const inputSlice = createAppSlice({
    name:"input",
    initialState,
    reducers: create =>({

    }),
    selectors:{
        selectMessage: input=>input.message
    }
})

export const {} = inputSlice.actions
export const {} = inputSlice.selectors