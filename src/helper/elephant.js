import { checkMovement } from "./checkMovement"

export const elephant = ({x,y},color,pieces,vulnFlag,turn) => {
    const currentPieceColor = color
    let movementIndices = []
    let dx = x-1
    while(dx>=0){
        if(!vulnFlag){
            if(pieces[dx][y].indicator === '' && checkMovement({x,y},{x : dx,y},currentPieceColor,pieces,turn)){
                movementIndices.push({x : dx,y})
                pieces[dx][y].color = 'green'
            }
            else if(pieces[dx][y].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},{x : dx,y},currentPieceColor,pieces,turn)){
                movementIndices.push({x : dx,y})
                pieces[dx][y].color = 'red'
                break
            }
            else break;
        }
        else{
            if(pieces[dx][y].indicator === '');
            else if(pieces[dx][y].indicator.substr(0,1) !== currentPieceColor){
                if(pieces[dx][y].indicator.substr(2) === 'King')return true
                else break
            }else break;
        }
        dx = dx-1
    }
    dx = x+1
    while(dx<=7){
        if(!vulnFlag){
            if(pieces[dx][y].indicator === '' && checkMovement({x,y},{x : dx,y},currentPieceColor,pieces,turn)){
                movementIndices.push({x : dx,y})
                pieces[dx][y].color = 'green'
            }
            else if(pieces[dx][y].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},{x : dx,y},currentPieceColor,pieces,turn)){
                movementIndices.push({x : dx,y})
                pieces[dx][y].color = 'red'
                break
            }
            else break;
        }
        else{
            if(pieces[dx][y].indicator === '') ;
            else if(pieces[dx][y].indicator.substr(0,1) !== currentPieceColor){
                if(pieces[dx][y].indicator.substr(2) === 'King')return true
                else break
            }else break;
        }
        dx = dx+1
    }
    let dy = y+1
    while(dy<=7){
        if(!vulnFlag){
            if(pieces[x][dy].indicator === '' && checkMovement({x,y},{x,y : dy},currentPieceColor,pieces,turn)){
                movementIndices.push({x,y : dy})
                pieces[x][dy].color = 'green'
            }
            else if(pieces[x][dy].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},{x,y : dy},currentPieceColor,pieces,turn)){
                movementIndices.push({x,y : dy})
                pieces[x][dy].color = 'red'
                break;
            }
            else break;
        }
        else{
            if(pieces[x][dy].indicator === '') ;
            else if(pieces[x][dy].indicator.substr(0,1) !== currentPieceColor){
                if(pieces[x][dy].indicator.substr(2) === 'King')return true
                else break
            }else break;
        }
        dy = dy+1
    }
    dy = y-1
    while(dy>=0){
        if(!vulnFlag){
            if(pieces[x][dy].indicator === '' && checkMovement({x,y},{x,y : dy},currentPieceColor,pieces,turn)){
                movementIndices.push({x,y : dy})
                pieces[x][dy].color = 'green'
            }
            else if(pieces[x][dy].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},{x,y : dy},currentPieceColor,pieces,turn)){
                movementIndices.push({x,y : dy})
                pieces[x][dy].color = 'red'
                break;
            }
            else break;
        }
        else{
            if(pieces[x][dy].indicator === '') ;
            else if(pieces[x][dy].indicator.substr(0,1) !== currentPieceColor){
                if(pieces[x][dy].indicator.substr(2) === 'King')return true
                else break
            }else break;
        }
        dy = dy-1
    }
    if(vulnFlag) return false;
    return movementIndices
}


            // if(pieces[dx][y].indicator === '')upcomingVulnIndices.push({x : dx,y}) ;
            // else if(pieces[dx][y].indicator.substr(0,1) !== currentPieceColor){
            //     hindranceVulnIndices.push({x : dx,y})
            //     if(pieces[dx][y].indicator.substr(2) === 'King')isCheck = {x,y}
            //     break;
            // }
            // else{
            //     hindranceVulnIndices.push({x : dx,y})
            //     break;
            // }