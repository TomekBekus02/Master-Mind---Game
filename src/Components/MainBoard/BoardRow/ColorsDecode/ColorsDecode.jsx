import { useContext } from 'react'
import { GameContex } from '../../../source/gameContex'
// import dataColor from '/src/Components/source/data'
import './ColorsDecode.css'

export default function ColorsDecode({id}){

    const {dataGame, IdRound} = useContext(GameContex);
    const activationCondition = id==dataGame[IdRound > 0 ? IdRound-1 : IdRound].round && IdRound != 0
    function handleColorsDecode(){
        
    }

    return (
        <div className="Colors-container">
            <button className={`color-button ${activationCondition ? null : 'disabled'}`} onClick={activationCondition ? () => handleColorsDecode(1) : null}></button>
            <button className={`color-button ${activationCondition ? null : 'disabled'}`} onClick={activationCondition ? () => handleColorsDecode(2) : null}></button>
            <button className={`color-button ${activationCondition ? null : 'disabled'}`} onClick={activationCondition ? () => handleColorsDecode(3) : null}></button>
            <button className={`color-button ${activationCondition ? null : 'disabled'}`} onClick={activationCondition ? () => handleColorsDecode(4) : null}></button>
        </div>
    )
}