import { checkMovement } from "./checkMovement"

export const pawn = ({x,y},color,pieces,vulnFlag) => {
    const currentPieceColor = color
    let movementIndices = []
    if(currentPieceColor === 'W'){
        //handle last case changing powers
        if(!vulnFlag){
            if(pieces[x-1][y].indicator === '' && checkMovement({x,y},{x : x-1,y},currentPieceColor,pieces)){
                movementIndices.push({x : x-1,y})
                pieces[x-1][y].color = 'green'
            }
            if(x-1 >=0 && y-1 >=0 && pieces[x-1][y-1].indicator !=='' && pieces[x-1][y-1].indicator.substr(0,1) === 'B' 
            && checkMovement({x,y},{x : x-1,y : y-1},currentPieceColor,pieces)){
                movementIndices.push({x : x-1,y : y-1})
                pieces[x-1][y-1].color = 'red'
            }
            if(x-1 >=0 && y+1 <=7 && pieces[x-1][y+1].indicator !=='' && pieces[x-1][y+1].indicator.substr(0,1) === 'B'
            && checkMovement({x,y},{x : x-1,y : y+1},currentPieceColor,pieces)){
                movementIndices.push({x : x-1,y : y+1})
                pieces[x-1][y+1].color = 'red'
            }
            if(x === 6 && pieces[x-1][y].indicator === '' && pieces[x-2][y].indicator === ''
            && checkMovement({x,y},{x : x-2,y},currentPieceColor,pieces)){
                movementIndices.push({x : x-2,y})
                pieces[x-2][y].color = 'green'
            }
        }else{
            if(x-1 >=0 && y-1 >=0){
                if(pieces[x-1][y-1].indicator === '');
                else if(pieces[x-1][y-1].indicator.substr(0,1) === 'B'){
                    if(pieces[x-1][y-1].indicator.substr(2) === 'King')return true
                }
            }
            if(x-1 >=0 && y+1 <=7){
                if(pieces[x-1][y+1].indicator === '');
                else if(pieces[x-1][y+1].indicator.substr(0,1) === 'B'){
                    if(pieces[x-1][y+1].indicator.substr(2) === 'King')return true
                }
            }
        }
        
    }else{
        if(!vulnFlag){
            if(pieces[x+1][y].indicator === '' && checkMovement({x,y},{x : x+1,y},currentPieceColor,pieces)){
                movementIndices.push({x : x+1,y})
                pieces[x+1][y].color = 'green'
            }
            if(x+1 <=7 && y-1 >=0 && pieces[x+1][y-1].indicator.substr(0,1) === 'W'
            && checkMovement({x,y},{x : x+1,y : y-1},currentPieceColor,pieces)){
                movementIndices.push({x : x+1,y : y-1})
                pieces[x+1][y-1].color = 'red'
            }
            if(x+1 <=7 && y+1 <=7 && pieces[x+1][y+1].indicator.substr(0,1) === 'W'
            && checkMovement({x,y},{x : x+1,y : y+1},currentPieceColor,pieces)){
                movementIndices.push({x : x+1,y : y+1})
                pieces[x+1][y+1].color = 'red'
            }
            if(x === 1 && pieces[x+1][y].indicator === '' && pieces[x+2][y].indicator === ''
            && checkMovement({x,y},{x : x+2,y},currentPieceColor,pieces)){
                movementIndices.push({x : x+2,y})
                pieces[x+2][y].color = 'green'
            }
        }
        else{
            if(x+1 <=7 && y-1 >=0){
                if(pieces[x+1][y-1].indicator === '');
                else if(pieces[x+1][y-1].indicator.substr(0,1) === 'W'){
                    if(pieces[x+1][y-1].indicator.substr(2) === 'King')return true
                }
            }
            if(x+1 <=7 && y+1 <=7){
                if(pieces[x+1][y+1].indicator === '');
                else if(pieces[x+1][y+1].indicator.substr(0,1) === 'W'){
                    if(pieces[x+1][y+1].indicator.substr(2) === 'King')return true
                }
            }
        }
        
    }
    if(vulnFlag) return false
    return movementIndices;
}

// if(x-1 >=0 && y-1 >=0){
                
//     if(pieces[x-1][y-1].indicator === '')upcomingVulnIndices.push({x : x-1,y : y-1})
//     else if(pieces[x-1][y-1].indicator.substr(0,1) === 'B'){
//         hindranceVulnIndices.push({x : x-1,y : y-1})
//         if(pieces[x-1][y-1].indicator.substr(2) === 'King')isCheck = {x,y}
//     }
//     else{
//         hindranceVulnIndices.push({x : x-1,y : y-1})
//     }
// }
// if(x-1 >=0 && y+1 <=7){
//     if(pieces[x-1][y+1].indicator === '')upcomingVulnIndices.push({x : x-1,y : y+1})
//     else if(pieces[x-1][y+1].indicator.substr(0,1) === 'B'){
//         hindranceVulnIndices.push({x : x-1,y : y+1})
//         if(pieces[x-1][y+1].indicator.substr(2) === 'King')isCheck = {x,y}
//     }
//     else{
//         hindranceVulnIndices.push({x : x-1,y : y+1})
//     }
// }