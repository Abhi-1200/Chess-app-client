import { createSlice } from "@reduxjs/toolkit";

const selectedSLice = createSlice({
    name : 'selected',
    initialState : null,
    reducers : {
        setSelected(state,action){
            return action.payload
        }
    }
})

export const {setSelected} = selectedSLice.actions
export default selectedSLice.reducer