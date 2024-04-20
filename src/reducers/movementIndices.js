import { createSlice } from "@reduxjs/toolkit";

const movementIndicesSlice = createSlice({
    name : 'movementIndics',
    initialState : [],
    reducers : {
        setMovementIndices(state,action){
            return action.payload
        }
    }
})

export const {setMovementIndices} = movementIndicesSlice.actions
export default movementIndicesSlice.reducer