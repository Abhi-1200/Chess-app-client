import { checkBox, checkMovement } from "./checkMovement"

export const king = ({x,y},color,pieces,vulnFlag,turn) => {
    const currentPieceColor = color
    let movementIndices = []
    let isCancellation = false;
    for(let i = -1;i<=1;i++){
        for(let j = -1;j<=1;j++){
            if(i === 0 && j === 0)continue;
            let newx = x + i
            let newy = y + j
            if(newx >= 0 && newx <=7 && newy >=0 && newy <= 7){
                if(!vulnFlag){
                    if(pieces[newx][newy].indicator === '' && checkMovement({x,y},{x : newx,y : newy},currentPieceColor,pieces)){
                        movementIndices.push({x : newx,y : newy})
                        pieces[newx][newy].color = 'green'
                    }else if(pieces[newx][newy].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},{x : newx,y : newy},currentPieceColor,pieces)){
                        movementIndices.push({x : newx,y : newy})
                        pieces[newx][newy].color = 'red'
                    }
                }else{
                    if(pieces[newx][newy].indicator.substr(0,1) === '');
                    else if(pieces[newx][newy].indicator.substr(0,1) !== currentPieceColor){
                        if(pieces[newx][newy].indicator.substr(2) === 'King')return true
                    }
                }
            }
        }
    }
    if(!vulnFlag && turn === currentPieceColor){
        if(currentPieceColor === 'W'){
            if(x === 7 && y === 4){
                if(pieces[7][0].display === '♜'){
                    let newy = y-1;
                    while(newy >=0 && pieces[x][newy].display === '' && checkBox(x,newy,pieces,currentPieceColor))newy--;
                    if(newy === 0){
                        movementIndices.push({x,y : 0});
                        isCancellation = true
                        pieces[x][newy].color = 'green'
                    }
                }
                if(pieces[7][7].display === '♜'){
                    let newy = y+1;
                    while(newy <=7 && pieces[x][newy].display === '' && checkBox(x,newy,pieces,currentPieceColor))newy++;
                    if(newy === 7){
                        movementIndices.push({x,y : 7});
                        isCancellation = true
                        pieces[x][newy].color = 'green'
                    }
                }
            }
        }else if(currentPieceColor === 'B'){
            if(x === 0 && y === 4){
                if(pieces[0][0].display === '♖'){
                    let newy = y-1;
                    while(newy >=0 && pieces[x][newy].display === '' && checkBox(x,y,pieces,currentPieceColor))newy--;
                    if(newy === 0){
                        movementIndices.push({x,y : 0});
                        isCancellation = true
                        pieces[x][newy].color = 'green'
                    }
                }
                if(pieces[0][7].display === '♖'){
                    let newy = y+1;
                    while(newy <=7 && pieces[x][newy].display === '' && checkBox(x,y,pieces,currentPieceColor))newy++;
                    if(newy === 7){
                        movementIndices.push({x,y : 7});
                        isCancellation = true
                        pieces[x][newy].color = 'green'
                    }
                }
            }
        }
    }
    if(vulnFlag) return false
    return [movementIndices,isCancellation]
}

// if(pieces[newx][newy].indicator.substr(0,1) === '')upcomingVulnIndices.push({x : newx,y : newy})
//                     else if(pieces[newx][newy].indicator.substr(0,1) !== currentPieceColor){
//                         hindranceVulnIndices.push({x : newx,y : newy})
//                         if(pieces[newx][newy].indicator.substr(2) === 'King')isCheck = {x ,y}
//                     }
//                     else{
//                         hindranceVulnIndices.push({x : newx,y : newy})
//                     }