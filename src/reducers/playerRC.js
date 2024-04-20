import { createSlice } from "@reduxjs/toolkit";

const playerRCSlice = createSlice({
    name : 'playerRC',
    initialState : null,
    reducers : {
        setPlayerRC(state,action){
            return action.payload
        }
    }
})

export const {setPlayerRC} = playerRCSlice.actions
export default playerRCSlice.reducer