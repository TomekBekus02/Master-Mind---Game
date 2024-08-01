import { useState } from 'react'
import { GameProvider } from './Components/source/gameContex'
import MainBoard from './Components/MainBoard/MainBoard'
import SideDesktop from './Components/SideDesktop/SideDesktop'
import data from './Components/source/data'
import './App.css'

function App() {
  return (
    <GameProvider>
      <div className="appWindow">
        <MainBoard />
        <SideDesktop />
      </div>
    </GameProvider>
  )
}

export default App
