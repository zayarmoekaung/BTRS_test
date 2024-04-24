import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface UserSliceState {
    name: string | null
}
const initialState: UserSliceState = {
    name: null
}
export const userSlice = createAppSlice({
    name: "user",
    initialState,
    reducers: create => ({
        setUsername: create.reducer(
            (state, action: PayloadAction<string>) => {
                state.name = action.payload
            },)
    }),
    selectors: {
        selectUserName: user => user.name
    }
})
export const { setUsername} = userSlice.actions
export const { selectUserName } = userSlice.selectors