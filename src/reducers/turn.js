import { createSlice } from "@reduxjs/toolkit";

const turnSlice = createSlice({
    name : 'turn',
    initialState : 'W',
    reducers : {
        setTurn(state,action){
            return action.payload
        }
    }
})

export const {setTurn} = turnSlice.actions
export default turnSlice.reducer