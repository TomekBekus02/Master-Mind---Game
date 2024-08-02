import { useContext } from 'react'
import { GameContex } from '../../source/gameContex'
import './StartButton.css'

export default function StartButton(){
    const {IdRound} = useContext(GameContex);

    return(  
        <button className="start-button">Start Button</button>
    )
}