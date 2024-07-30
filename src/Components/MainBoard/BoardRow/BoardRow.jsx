import './BoardRow.css'
import ColorsAccuracy from './ColorsAccuracy/ColorsAccuracy'
import ColorsDecode from './ColorsDecode/ColorsDecode'
import dataColor from '/src/Components/source/data'

export default function BoardRow({id, round}){
    return (
        <div className={`RowContainer ${id==dataColor[round-1].round ? 'active' : null}`}>
            <ColorsAccuracy />
            <ColorsDecode id={id} round={round}/>
        </div>
    )
}