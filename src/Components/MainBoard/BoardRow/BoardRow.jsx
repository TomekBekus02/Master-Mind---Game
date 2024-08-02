import { useContext } from 'react'
import { GameContex } from '../../source/gameContex'
import ColorsAccuracy from './ColorsAccuracy/ColorsAccuracy'
import ColorsDecode from './ColorsDecode/ColorsDecode'
import './BoardRow.css'
// import dataColor from '/src/Components/source/data'



export default function BoardRow({id}){
    const {dataGame, IdRound} = useContext(GameContex);

    return (
        <div className={`RowContainer ${id==dataGame[IdRound>0 ? IdRound-1 : IdRound].round && IdRound != 0 ? 'active' : null}`}>
            <ColorsAccuracy />
            <ColorsDecode id={id}/>
        </div>
    )
}