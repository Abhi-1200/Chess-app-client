import { camel } from "./camel"
import { elephant } from "./elephant"

export const queen = ({x,y},color,pieces,vulnFlag) => {
    if(vulnFlag){
        let eIsCheck = elephant({x,y},color,pieces,vulnFlag)
        let cIsCheck = camel({x,y},color,pieces,vulnFlag)
        return (eIsCheck | cIsCheck) === 1
    }else{
        let emIndices = elephant({x,y},color,pieces,vulnFlag)
        let cmIndices = camel({x,y},color,pieces,vulnFlag)
        return [...emIndices,...cmIndices]
    }
}
    // let dx = x - 1;
    // while (dx >= 0) {
    //     if(!vulnFlag){
    //         if(pieces[dx][y].indicator === ''){
    //             movementIndices.push({x : dx,y})
    //             pieces[dx][y].color = 'green'
    //         }
    //         else if(pieces[dx][y].indicator.substr(0,1) !== currentPieceColor){
    //             movementIndices.push({x : dx,y})
    //             pieces[dx][y].color = 'red'
    //             break
    //         }
    //         else break;
    //     }
    //     else{
    //         if(pieces[dx][y].indicator === '') ;
    //         else if(pieces[dx][y].indicator.substr(0,1) !== currentPieceColor){
    //             vulnIndices.push({x : dx,y})
    //             if(pieces[dx][y].indicator.substr(2) === 'King')isCheck = true
    //             break;
    //         }
    //         else break;
    //     }
    //     dx = dx - 1;
    // }
    // dx = x + 1;
    // while (dx <= 7) {
    //     if(!vulnFlag){
    //         if(pieces[dx][y].indicator === ''){
    //             movementIndices.push({x : dx,y})
    //             pieces[dx][y].color = 'green'
    //         }
    //         else if(pieces[dx][y].indicator.substr(0,1) !== currentPieceColor){
    //             movementIndices.push({x : dx,y})
    //             pieces[dx][y].color = 'red'
    //             break
    //         }
    //         else break;
    //     }
    //     else{
    //         if(pieces[dx][y].indicator === '') ;
    //         else if(pieces[dx][y].indicator.substr(0,1) !== currentPieceColor){
    //             vulnIndices.push({x : dx,y})
    //             if(pieces[dx][y].indicator.substr(2) === 'King')isCheck = true
    //             break;
    //         }
    //         else break;
    //     }
    //     dx = dx+1
    // }
    // let dy = y + 1;
    // while (dy <= 7) {
    //     if(!vulnFlag){
    //         if(pieces[x][dy].indicator === ''){
    //             movementIndices.push({x,y : dy})
    //             pieces[x][dy].color = 'green'
    //         }
    //         else if(pieces[x][dy].indicator.substr(0,1) !== currentPieceColor){
    //             movementIndices.push({x,y : dy})
    //             pieces[x][dy].color = 'red'
    //             break;
    //         }
    //         else break;
    //     }
    //     else{
    //         if(pieces[x][dy].indicator === '') ;
    //         else if(pieces[x][dy].indicator.substr(0,1) !== currentPieceColor){
    //             vulnIndices.push({x,y : dy})
    //             if(pieces[x][dy].indicator.substr(2) === 'King')isCheck = true
    //             break;
    //         }
    //         else break;
    //     }
    //     dy = dy+1
    // }
    // dy = y - 1;
    // while (dy >= 0) {
    //     if(!vulnFlag){
    //         if(pieces[x][dy].indicator === ''){
    //             movementIndices.push({x,y : dy})
    //             pieces[x][dy].color = 'green'
    //         }
    //         else if(pieces[x][dy].indicator.substr(0,1) !== currentPieceColor){
    //             movementIndices.push({x,y : dy})
    //             pieces[x][dy].color = 'red'
    //             break;
    //         }
    //         else break;
    //     }
    //     else{
    //         if(pieces[x][dy].indicator === '') ;
    //         else if(pieces[x][dy].indicator.substr(0,1) !== currentPieceColor){
    //             vulnIndices.push({x,y : dy})
    //             if(pieces[x][dy].indicator.substr(2) === 'King')isCheck = true
    //             break;
    //         }
    //         else break;
    //     }
    //     dy = dy-1
    // }
    // dx = x - 1;
    // dy = y - 1;
    // while (dx >= 0 && dy >= 0) {
    //     if(!vulnFlag){
    //         if(pieces[dx][dy].indicator === ''){
    //             movementIndices.push({x : dx,y : dy})
    //             pieces[dx][dy].color = 'green'
    //         }
    //         else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
    //             movementIndices.push({x : dx,y : dy})
    //             pieces[dx][dy].color = 'red'
    //             break
    //         }
    //         else break;
    //     }
    //     else{
    //         if(pieces[dx][dy].indicator === '') ;
    //         else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
    //             vulnIndices.push({x : dx,y : dy})
    //             if(pieces[dx][dy].indicator.substr(2) === 'King')isCheck = true
    //             break;
    //         }
    //         else break;
    //     }
    //   dx = dx - 1;
    //   dy = dy - 1;
    // }
    // dx = x + 1;
    // dy = y - 1;
    // while (dx <= 7 && dy >= 0) {
    //     if(!vulnFlag){
    //         if(pieces[dx][dy].indicator === ''){
    //             movementIndices.push({x : dx,y : dy})
    //             pieces[dx][dy].color = 'green'
    //         }
    //         else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
    //             movementIndices.push({x : dx,y : dy})
    //             pieces[dx][dy].color = 'red'
    //             break
    //         }
    //         else break;
    //     }
    //     else{
    //         if(pieces[dx][dy].indicator === '') ;
    //         else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
    //             vulnIndices.push({x : dx,y : dy})
    //             if(pieces[dx][dy].indicator.substr(2) === 'King')isCheck = true
    //             break;
    //         }
    //         else break;
    //     }
    //   dx = dx + 1;
    //   dy = dy - 1;
    // }
    // dx = x - 1;
    // dy = y + 1;
    // while (dx >= 0 && dy <= 7) {
    //     if(!vulnFlag){
    //         if(pieces[dx][dy].indicator === ''){
    //             movementIndices.push({x : dx,y : dy})
    //             pieces[dx][dy].color = 'green'
    //         }
    //         else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
    //             movementIndices.push({x : dx,y : dy})
    //             pieces[dx][dy].color = 'red'
    //             break
    //         }
    //         else break;
    //     }
    //     else{
    //         if(pieces[dx][dy].indicator === '') ;
    //         else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
    //             vulnIndices.push({x : dx,y : dy})
    //             if(pieces[dx][dy].indicator.substr(2) === 'King')isCheck = true
    //             break;
    //         }
    //         else break;
    //     }
    //   dx = dx - 1;
    //   dy = dy + 1;
    // }
    // dx = x + 1;
    // dy = y + 1;
    // while (dx <= 7 && dy <= 7) {
    //     if(!vulnFlag){
    //         if(pieces[dx][dy].indicator === ''){
    //             movementIndices.push({x : dx,y : dy})
    //             pieces[dx][dy].color = 'green'
    //         }
    //         else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
    //             movementIndices.push({x : dx,y : dy})
    //             pieces[dx][dy].color = 'red'
    //             break
    //         }
    //         else break;
    //     }
    //     else{
    //         if(pieces[dx][dy].indicator === '') ;
    //         else if(pieces[dx][dy].indicator.substr(0,1) !== currentPieceColor){
    //             vulnIndices.push({x : dx,y : dy})
    //             if(pieces[dx][dy].indicator.substr(2) === 'King')isCheck = true
    //             break;
    //         }
    //         else break;
    //     }
    //   dx = dx + 1;
    //   dy = dy + 1;
    // }
    // return [movementIndices,vulnIndices,isCheck]
// }