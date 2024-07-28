import { useState } from 'react'
import MainBoard from './Components/MainBoard/MainBoard'
import SideDesktop from './Components/SideDesktop/SideDesktop'
import './App.css'

function App() {
  return (
    <div className="appWindow">
      <MainBoard />
      <SideDesktop />
    </div>
  )
}

export default App
