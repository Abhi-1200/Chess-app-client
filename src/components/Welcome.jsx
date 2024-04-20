import { useDispatch } from "react-redux"
import {setPlayerRC} from "../reducers/playerRC"

const Welcome = () => {
    const dispatch = useDispatch()

    const handleWelcome = (e) => {
        e.preventDefault()
        dispatch(setPlayerRC({
            'room' : Number(e.target.room.value),
            'color' : e.target.color.value.substr(0,1)
        }))
        e.target.room.value = ''
        e.target.color.value = ''
    }

    return(
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Chess Game</h1>
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-80">
        <form onSubmit={handleWelcome}>
        Room : <input type="text" placeholder="Enter Room No" className="input mb-2" name = 'room'/><br />
        Color : <select name = 'color' className="input mb-2">
          <option value="White">White</option>
          <option value="Black">Black</option>
        </select> <br />
        <button type = "submit" className="btn bg-slate-600 rounded-lg mt-4 mb-2 pr-4 pl-4">
          Join
        </button>
        </form>
      </div>
    </div>
    )

}

export default Welcome
