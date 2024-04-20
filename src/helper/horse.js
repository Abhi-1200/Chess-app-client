import { checkMovement } from "./checkMovement"

export const horse = ({x,y},color,pieces,vulnFlag) => {
    const currentPieceColor = color
    const indices = [{x : x+2,y : y+1},{x : x+2,y : y-1},{x : x-2,y : y+1},{x : x-2,y : y-1},
        {x : x+1,y : y+2},{x : x+1,y : y-2},{x : x-1,y : y+2},{x : x-1,y : y-2}]
    let movementIndices = []
    for(let i = 0;i<8;i++){
        let newx = indices[i].x
        let newy = indices[i].y
        if(newx>=0 && newx<=7 && newy>=0 && newy<=7){
            if(!vulnFlag){
                if(pieces[newx][newy].indicator === '' && checkMovement({x,y},indices[i],currentPieceColor,pieces)){
                    movementIndices.push(indices[i])
                    pieces[newx][newy].color = 'green'
                }
                else if(pieces[newx][newy].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},indices[i],currentPieceColor,pieces)){
                    movementIndices.push(indices[i])
                    pieces[newx][newy].color = 'red'
                }
            }else{
                if(pieces[newx][newy].indicator === '');
                else if(pieces[newx][newy].indicator.substr(0,1) !== currentPieceColor){
                    if(pieces[newx][newy].indicator.substr(2) === 'King')return true;
                }
            }
        }
    }
    if(vulnFlag) return false
    return movementIndices
}

// if(pieces[newx][newy].indicator === '')upcomingVulnIndices.push(indices[i])
//                 else if(pieces[newx][newy].indicator.substr(0,1) !== currentPieceColor){
//                     hindranceVulnIndices.push(indices[i])
//                     if(pieces[newx][newy].indicator.substr(2) === 'King')isCheck = {x,y}
//                 }else{
//                     hindranceVulnIndices.push(indices[i])
//                 }