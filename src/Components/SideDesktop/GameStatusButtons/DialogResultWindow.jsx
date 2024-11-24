import { forwardRef, useContext } from "react";
import { GameContex } from "../../source/gameContex";
import RestartButton from './RestartButton/RestartButton'
import './DialogResultWindow.css'

const DialogWindow = forwardRef(function DialogWindow({result}, ref){
    const {colors, answer, IdRound} = useContext(GameContex);

    return (
        <dialog ref={ref} className="dialog-window">
            <h1>{result}</h1>
            {!result ? <h3>You finished game at {IdRound-1} round</h3> : null}
            <h3>Coded Colors</h3>
            <div className="container-color-result">
            {
                answer.map((colorNumber, index) => (
                    <div key={index} className="color-result" style={{backgroundColor: colors[colorNumber]}}></div>
                ))
            }
            </div>
            <form method="dialog">
                <button>Ok</button>
                <RestartButton/> 
            </form>
        </dialog>
    )
})
export default DialogWindow