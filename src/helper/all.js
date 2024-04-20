import {camel} from "./camel"
import {elephant} from "./elephant"
import {queen} from "./queen"
import {king} from "./king"
import {pawn}  from "./pawn"
import {horse} from "./horse"

export const all = ({x,y},piece,pieces,vulnFlag,turn) => {
    const color = piece.indicator.substr(0,1)
    const map = {
        'Elephant' : () => {return (elephant({x,y},color,pieces,vulnFlag,turn))},
        'Horse' : () => {return (horse({x,y},color,pieces,vulnFlag,turn))},
        'Camel' : () => {return (camel({x,y},color,pieces,vulnFlag,turn))},
        'Queen' : () => {return (queen({x,y},color,pieces,vulnFlag,turn))},
        'Pawn' : () => {return (pawn({x,y},color,pieces,vulnFlag,turn))},
        'King' : () => {return (king({x,y},color,pieces,vulnFlag,turn))}
    }
    return map[piece.indicator.substr(2)]
}