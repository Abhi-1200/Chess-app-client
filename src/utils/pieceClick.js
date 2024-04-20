import { all } from "../helper/all"

export const doCancellation = (x,y,pieces,selected) => {
    if(selected.y < y){
        pieces[x][selected.y +2] = pieces[x][selected.y]
        pieces[x][selected.y +1] = pieces[x][y]
        pieces[x][selected.y] = {display : '',indicator : '',color : ''}
        pieces[x][y] = {display : '',indicator : '',color : ''}
    }else{
        pieces[x][selected.y -2] = pieces[x][selected.y]
        pieces[x][selected.y -1] = pieces[x][y]
        pieces[x][selected.y] = {display : '',indicator : '',color : ''}
        pieces[x][y] = {display : '',indicator : '',color : ''}
    }
}

export const pieceClick = (x,y,pieces,selected,movementIndices,isCheck,playerRC,turn,cancellation) => {
    if(selected === null){
        if(pieces[x][y].indicator === ''){
            alert('Click on piece')
            return;
        }else if(pieces[x][y].indicator.substr(0,1) !== playerRC.color){
            alert("Not allowed")
            return;
        }
        selected = {
            x,
            y,
            piece : pieces[x][y]
        }
        if(pieces[x][y].indicator.substr(2) === "King"){
            let arr = all({x,y},pieces[x][y],pieces,false,turn)();
            movementIndices = arr[0];
            cancellation.possible = arr[1];
        }
        else movementIndices = all({x,y},pieces[x][y],pieces,false,turn)()
        if(movementIndices.length === 0){
            alert('Selected piece has no movement')
            selected = null
        }
        return [selected,movementIndices,isCheck,turn]
    }else{
        if(movementIndices.find(e => e.x === x && e.y === y)){
            if(pieces[x][y].indicator.substr(2) === 'Elephant' && cancellation.possible){
                console.log('triggering cancellation')
                if(selected.piece.indicator.substr(2) === 'King')doCancellation(x,y,pieces,selected);
                else{
                    pieces[x][y] = selected.piece
                    pieces[selected.x][selected.y] = {display : '',indicator : '',color : ''}
                }
                cancellation.possible = false;
            }
            else{
                pieces[x][y] = selected.piece
                pieces[selected.x][selected.y] = {display : '',indicator : '',color : ''}
            }
            
            movementIndices.forEach(e => {
                pieces[e.x][e.y].color = ''
            })
            
            movementIndices = []
            selected = null
            isCheck = false
            turn = playerRC.color === 'W' ? 'B' : 'W'
        }else{
            if(selected.x === x && selected.y === y){
                movementIndices.forEach(e => {
                    pieces[e.x][e.y].color = ''
                })
                movementIndices = []
                selected = null
            }
            else {
                alert('Click on Green or Red Boxes!')
            }
        }
        return [selected,movementIndices,isCheck,turn]
    }
}