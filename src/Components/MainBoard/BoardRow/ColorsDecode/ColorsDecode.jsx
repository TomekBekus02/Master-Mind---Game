import './ColorsDecode.css'
import dataColor from '/src/Components/source/data'
export default function ColorsDecode({id, round}){
    return (
        <div className="Colors-container">
            <button className={`color-button ${id==dataColor[round-1].round ? null : 'disabled'}`}></button>
            <button className={`color-button ${id==dataColor[round-1].round ? null : 'disabled'}`}></button>
            <button className={`color-button ${id==dataColor[round-1].round ? null : 'disabled'}`}></button>
            <button className={`color-button ${id==dataColor[round-1].round ? null : 'disabled'}`}></button>
        </div>
    )
}