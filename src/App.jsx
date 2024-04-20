import { useSelector } from "react-redux"
import ChessBoard from "./components/ChessBoard"
import Welcome from "./components/Welcome"

const App = () => {
  const playerRC = useSelector(state => state.playerRC)

  if(!playerRC){
    return <Welcome />
  }
  return(
    <ChessBoard />
  )
}

export default App