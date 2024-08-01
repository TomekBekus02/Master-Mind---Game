import { useContext } from 'react'
import { GameContex } from '../../source/gameContex'
import './RestartButton.css'

export default function RestartButton(){
    const {IdRound} = useContext(GameContex);

    return (
        <div>
            <button className="restart-button">Restart Game</button>
        </div>
    )
}