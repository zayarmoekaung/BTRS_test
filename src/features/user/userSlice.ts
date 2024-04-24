import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface UserSliceState {
    name : string|null
}
const initialState:UserSliceState ={
    name:null
} 
export const counterSlice = createAppSlice({
    name: "user",
    initialState,
    reducers: create =>({

    }),
    selectors:{
        selectUserName: user=>user.name
    }
})