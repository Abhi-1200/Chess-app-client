import { configureStore } from "@reduxjs/toolkit"
import pieces from "./reducers/pieces"
import selected from "./reducers/selected"
import movementIndices from "./reducers/movementIndices"
import isCheck from "./reducers/isCheck"
import turn from "./reducers/turn"
import playerRC from "./reducers/playerRC"

const store = configureStore({
    reducer : {
        turn,
        playerRC,
        pieces,
        selected,
        movementIndices,
        isCheck
    }
})

export default store