import {useDispatch,useSelector} from "react-redux"
import Piece from "./Piece"
import {useMutation, useSubscription} from "@apollo/client"

import { setPieces } from "../reducers/pieces"
import { setSelected } from "../reducers/selected"
import { setMovementIndices } from "../reducers/movementIndices"
import { setIsCheck } from "../reducers/isCheck"
import { doCancellation, pieceClick } from "../utils/pieceClick"
import {PIECE_SUBSCRIPTION, PIECE_UPDATION} from "../queries"
import { useEffect } from "react"
import { setTurn } from "../reducers/turn"
import { all } from "../helper/all"
import { checkCheckMate } from "../helper/checkMovement"

let cancellation = {
  possible : false
}

const ChessBoard = () => {
    const dispatch = useDispatch()
    const original_pieces = useSelector(state => state.pieces)
    const original_selected = useSelector(state => state.selected)
    const original_isCheck = useSelector(state => state.isCheck)
    const original_movementIndices = useSelector(state => state.movementIndices)
    const turn = useSelector(state => state.turn)
    const playerRC = useSelector(state => state.playerRC)

    let pieces = JSON.parse(JSON.stringify(original_pieces))
    let selected = JSON.parse(JSON.stringify(original_selected))
    let isCheck = JSON.parse(JSON.stringify(original_isCheck))
    let movementIndices = JSON.parse(JSON.stringify(original_movementIndices))

    const result = useSubscription(PIECE_SUBSCRIPTION,{
      variables : {room : playerRC.room}
    })
    const [addMessage] = useMutation(PIECE_UPDATION)

    useEffect(() => {
      if(result.data){
        if(result.data.message.color === playerRC.color) return;
        const x = result.data.message.to.x
        const y = result.data.message.to.y

        let temp1 = pieces[result.data.message.from.x][result.data.message.from.y]
        let temp2 = pieces[x][y]
        if(temp1.indicator.substr(0,1) === temp2.indicator.substr(0,1) && temp1.indicator.substr(2) === 'King' 
        && temp2.indicator.substr(2) === 'Elephant'){
          doCancellation(x,y,pieces,result.data.message.from)
        }
       else{
        pieces[result.data.message.from.x][result.data.message.from.y] = {display : '',indicator : '',color : ''}
        pieces[result.data.message.to.x][result.data.message.to.y] = temp1
        let checkIsCheck = all({x,y},pieces[x][y],pieces,true,turn)()
        if(checkIsCheck){
          let cCMate = checkCheckMate(playerRC.color,pieces)
          if(cCMate)alert('checkMate')
          else alert('check')
          dispatch(setIsCheck(true))
        }
       }
        dispatch(setPieces(pieces)) 
        dispatch(setTurn(playerRC.color))
      }
    },[result])

    const handlePieceClick = (x,y) => {
      if(turn !== playerRC.color)return ;
      const arr = pieceClick(x,y,pieces,selected,movementIndices,isCheck,playerRC,turn,cancellation);
      if(arr){
        if(arr[3] !== turn){
          addMessage({
            variables : {
              fromX : selected.x,
              fromY : selected.y,
              toX : x,
              toY : y,
              room : playerRC.room,
              color : playerRC.color
            }
          })
          dispatch(setTurn(arr[3]))
        }
        dispatch(setPieces(pieces))
        dispatch(setSelected(arr[0]))
        dispatch(setMovementIndices(arr[1]))
        dispatch(setIsCheck(arr[2]))
      }
    }

    return(
        <div className="min-h-screen flex items-center justify-center">
              <div className="grid grid-cols-8 grid-rows-8 gap-0">
                {Array(8)
                  .fill()
                  .map((_, x_index) => {
                    return Array(8).fill().map((_,y_index) => (
                      <div
                        key={x_index*8 + y_index}
                        className={`h-16 w-16 flex items-center justify-center ${
                          (x_index + y_index) % 2 === 0 ? 'bg-gray-400' : 'bg-black'
                        } border text-white`}
                        onClick={() => handlePieceClick(x_index,y_index)}
                      >
                        <Piece display={pieces[x_index][y_index].display} color={pieces[x_index][y_index].color}/>
                      </div> 
                    ))
                  })}
              </div>
            </div>
      )
}

export default ChessBoard