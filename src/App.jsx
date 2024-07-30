import { useState } from 'react'
import MainBoard from './Components/MainBoard/MainBoard'
import SideDesktop from './Components/SideDesktop/SideDesktop'
import data from './Components/source/data'
import './App.css'

function App() {
  const [round, setRound] = useState(1); // show and set current round 1-10
  const handleRound = () => setRound(round => round+1); // function that handles rounds
  const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white']; // possible colors in this game
  return (
    <div className="appWindow">
      <MainBoard currentRound={round} />
      <SideDesktop currentRound={round} handleRound={handleRound} colorsPool={colors}/>
    </div>
  )
}

export default App
