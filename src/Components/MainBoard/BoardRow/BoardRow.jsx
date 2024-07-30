import './BoardRow.css'
import ColorsAccuracy from './ColorsAccuracy/ColorsAccuracy'
import ColorsDecode from './ColorsDecode/ColorsDecode'
import dataColor from '/Users/tomac/Documents/____Front-end/Master-Mind---Game/src/Components/source/data'
export default function BoardRow({id, round}){
    return (
        <div className={`RowContainer ${id==dataColor[round].round ? 'active' : null}`}>
            <ColorsAccuracy />
            <ColorsDecode />
        </div>
    )
}