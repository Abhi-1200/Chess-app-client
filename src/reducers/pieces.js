import { createSlice } from "@reduxjs/toolkit";

const pieceSlice = createSlice({
    name : 'pieces',
    initialState : [
        [{display : '♖',indicator : 'B Elephant',color : ''},
        {display : '♘',indicator : 'B Horse',color : ''},
        {display : '♗',indicator : 'B Camel',color : ''},
        {display : '♕',indicator : 'B Queen',color : ''},
        {display : '♔',indicator : 'B King',color : ''},
        {display : '♗',indicator : 'B Camel',color : ''},
        {display : '♘',indicator : 'B Horse',color : ''},
        {display : '♖',indicator : 'B Elephant',color : ''}],
        Array(8).fill({display : '♙',indicator : 'B Pawn',color : ''}),
        Array(8).fill({display : '',indicator : '',color : ''}),
        Array(8).fill({display : '',indicator : '',color : ''}),
        Array(8).fill({display : '',indicator : '',color : ''}),
        Array(8).fill({display : '',indicator : '',color : ''}),
        Array(8).fill({display : '♟',indicator : 'W Pawn',color : ''}),
        [{display : '♜',indicator : 'W Elephant',color : ''},
        {display : '♞',indicator : 'W Horse',color : ''},
        {display : '♝',indicator : 'W Camel',color : ''},
        {display : '♛',indicator : 'W Queen',color : ''},
        {display : '♚',indicator : 'W King',color : ''},
        {display : '♝',indicator : 'W Camel',color : ''},
        {display : '♞',indicator : 'W Horse',color : ''},
        {display : '♜',indicator : 'W Elephant',color : ''}]
    ],
    reducers : {
        setPieces(state,action){
            return action.payload
        }
    }
})

export const {setPieces} = pieceSlice.actions
export default pieceSlice.reducer