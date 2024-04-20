import { all } from "./all"

export const checkMovement = (from,to,color,p,turn) => {
    let pieces = JSON.parse(JSON.stringify(p))
    const currentPieceColor = color
    pieces[to.x][to.y] = pieces[from.x][from.y]
    pieces[from.x][from.y] = {display : '',indicator : '',color : ''}
    for(let i = 0;i<8;i++){
        for(let j = 0;j<8;j++){
            if(pieces[i][j].indicator === '') ;
            else if(pieces[i][j].indicator.substr(0,1) !== currentPieceColor){
                const possible = all({x : i,y : j},pieces[i][j],pieces,true,turn)()
                if(possible) return false
            }
        }
    }
    return true
}

export const checkCheckMate = (color,p,turn) => {
    let pieces = JSON.parse(JSON.stringify(p))
    const currentPieceColor = color
    for(let i = 0;i<8;i++){
        for(let j = 0;j<8;j++){
            if(pieces[i][j].indicator === '') ;
            else if(pieces[i][j].indicator.substr(0,1) === currentPieceColor){
                let movementIndices = []
                if(pieces[i][j].indicator.substr(2) === "King"){
                    let arr = all({x : i,y : j},pieces[i][j],pieces,false,turn)()
                    movementIndices = arr[0]
                }
                else movementIndices = all({x : i,y : j},pieces[i][j],pieces,false,turn)()
                if(movementIndices.length !== 0){
                    console.log(pieces[i][j],movementIndices)
                    return false
                }
            }
        }
    }
    return true
}

export const checkBox = (x,y,p,color,turn) => {
    let pieces = JSON.parse(JSON.stringify(p))
    const currentPieceColor = color
    for(let i = 0;i<8;i++){
        for(let j = 0;j<8;j++){
            if(pieces[i][j].indicator === '') ;
            else if(pieces[i][j].indicator.substr(0,1) !== currentPieceColor){
                const possible = all({x : i,y : j},pieces[i][j],pieces,false,turn)()
                if(possible.findIndex(e => e.x === x && e.y === y) !== -1) return false
            }
        }
    }
    return true
}