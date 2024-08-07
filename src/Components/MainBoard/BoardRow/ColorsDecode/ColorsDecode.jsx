import ColorButton from './ColorButton/ColorButton';
// import dataColor from '/src/Components/source/data'
import './ColorsDecode.css'

export default function ColorsDecode({id}){

    return (
        <div className="Colors-container">
            <ColorButton id={id} buttonNr={1}/>
            <ColorButton id={id} buttonNr={2}/>
            <ColorButton id={id} buttonNr={3}/>
            <ColorButton id={id} buttonNr={4}/>
        </div>
    )
}