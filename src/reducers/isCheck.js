import { createSlice } from "@reduxjs/toolkit";

const isCheck = createSlice({
    name : 'check',
    initialState : false,
    reducers : {
        setIsCheck(state,action){
            return action.payload
        }
    }
})

export const {setIsCheck} = isCheck.actions
export default isCheck.reducer