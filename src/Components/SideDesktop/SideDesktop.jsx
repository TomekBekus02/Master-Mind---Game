import { useContext } from 'react'
import { GameContex } from '../source/gameContex'
import BotAnswer from './BotAnswer/BotAnswer'
import GameStatusButtons from './GameStatusButtons/GameStatusButtons'
import PossibleColors from './PossibleColors/PossibleColors'
import './SideDesktop.css'

export default function SideDesktop(){
    const {activeDecode} = useContext(GameContex);
    return (
        <div className="side-desktop">
            <div className="titleContainer">
                <h1>Master Mind</h1>
                <h2>Game</h2>
            </div>
            <div className="welcomeContainer">
                <h1>Welcome to Master Mind</h1>
                <h3>To start click 'Start Game' button, if you want restart game, please click 'Restart Game' button. good luck</h3>
            </div>
            <GameStatusButtons/>

            {
                activeDecode
                ? <div className="PossibleColorsContainer"> <PossibleColors/> </div>
                : null
            }

            <div className="botAnswerContainer">
                <BotAnswer />
            </div>
        </div>
    )
}