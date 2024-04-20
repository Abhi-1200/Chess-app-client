import {checkMovement} from "./checkMovement"

export const camel = ({x,y},color,pieces,vulnFlag) => {
    const currentPieceColor = color
    let movementIndices = []
    let dx = x - 1;
    let dy = y - 1;
    while (dx >= 0 && dy >= 0) {
        if(!vulnFlag){
            if(pieces[dx][dy].indicator === '' && checkMovement({x,y},{x : dx,y : dy},currentPieceColor,pieces)){
                movementIndices.push({x : dx,y : dy})
                pieces[dx][dy].color = 'green'
            }
            else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},{x : dx,y : dy},currentPieceColor,pieces)){
                movementIndices.push({x : dx,y : dy})
                pieces[dx][dy].color = 'red'
                break;
            }
            else break;
        }
        else{
            if(pieces[dx][dy].indicator === '') ;
            else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
                if(pieces[dx][dy].indicator.substr(2) === 'King')return true
                else break
            }else break;
        }
      dx = dx - 1;
      dy = dy - 1;
    }
    dx = x + 1;
    dy = y - 1;
    while (dx <= 7 && dy >= 0) {
        if(!vulnFlag){
            if(pieces[dx][dy].indicator === '' && checkMovement({x,y},{x : dx,y : dy},currentPieceColor,pieces)){
                movementIndices.push({x : dx,y : dy})
                pieces[dx][dy].color = 'green'
            }
            else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},{x : dx,y : dy},currentPieceColor,pieces)){
                movementIndices.push({x : dx,y : dy})
                pieces[dx][dy].color = 'red'
                break
            }
            else break;
        }
        else{
            if(pieces[dx][dy].indicator === '') ;
            else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
                if(pieces[dx][dy].indicator.substr(2) === 'King')return true
                else break
            }else break;
        }
      dx = dx + 1;
      dy = dy - 1;
    }
    dx = x - 1;
    dy = y + 1;
    while (dx >= 0 && dy <= 7) {
        if(!vulnFlag){
            if(pieces[dx][dy].indicator === '' && checkMovement({x,y},{x : dx,y : dy},currentPieceColor,pieces)){
                movementIndices.push({x : dx,y : dy})
                pieces[dx][dy].color = 'green'
            }
            else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},{x : dx,y : dy},currentPieceColor,pieces)){
                movementIndices.push({x : dx,y : dy})
                pieces[dx][dy].color = 'red'
                break
            }
            else break;
        }
        else{
            if(pieces[dx][dy].indicator === '') ;
            else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
                if(pieces[dx][dy].indicator.substr(2) === 'King')return true
                else break
            }else break;
        }
      dx = dx - 1;
      dy = dy + 1;
    }
    dx = x + 1;
    dy = y + 1;
    while (dx <= 7 && dy <= 7) {
        if(!vulnFlag){
            if(pieces[dx][dy].indicator === '' && checkMovement({x,y},{x : dx,y : dy},currentPieceColor,pieces)){
                movementIndices.push({x : dx,y : dy})
                pieces[dx][dy].color = 'green'
            }
            else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor && checkMovement({x,y},{x : dx,y : dy},currentPieceColor,pieces)){
                movementIndices.push({x : dx,y : dy})
                pieces[dx][dy].color = 'red'
                break
            }
            else break;
        }
        else{
            if(pieces[dx][dy].indicator === '') ;
            else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
                if(pieces[dx][dy].indicator.substr(2) === 'King')return true
                else break
            }else break;
        }
      dx = dx + 1;
      dy = dy + 1;
    }
    if(vulnFlag) return false
    return movementIndices
}


// if(pieces[dx][dy].indicator === '')upcomingVulnIndices.push({x : dx,y : dy});
            // else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
            //     hindranceVulnIndices.push({x : dx,y : dy})
            //     if(pieces[dx][dy].indicator.substr(2) === 'King')isCheck = {x,y}
            //     break;
            // }
            // else{
            //     hindranceVulnIndices.push({x : dx,y : dy})
            //     break;
            // }