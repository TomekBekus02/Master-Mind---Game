import './BoardRow.css'
import ColorsAccuracy from './ColorsAccuracy/ColorsAccuracy'
import ColorsDecode from './ColorsDecode/ColorsDecode'
export default function BoardRow(){
    return (
        <div className="RowContainer">
            <ColorsAccuracy />
            <ColorsDecode />
        </div>
    )
}