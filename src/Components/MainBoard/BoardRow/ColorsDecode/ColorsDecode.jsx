import { useContext } from 'react'
import { GameContex } from '../../../source/gameContex'
// import dataColor from '/src/Components/source/data'
import './ColorsDecode.css'

export default function ColorsDecode({id}){

    const {dataGame, IdRound} = useContext(GameContex);
    return (
        <div className="Colors-container">
            <button className={`color-button ${id==dataGame[IdRound>0 ? IdRound-1 : IdRound].round && IdRound != 0 ? null : 'disabled'}`}></button>
            <button className={`color-button ${id==dataGame[IdRound>0 ? IdRound-1 : IdRound].round && IdRound != 0 ? null : 'disabled'}`}></button>
            <button className={`color-button ${id==dataGame[IdRound>0 ? IdRound-1 : IdRound].round && IdRound != 0 ? null : 'disabled'}`}></button>
            <button className={`color-button ${id==dataGame[IdRound>0 ? IdRound-1 : IdRound].round && IdRound != 0 ? null : 'disabled'}`}></button>
        </div>
    )
}