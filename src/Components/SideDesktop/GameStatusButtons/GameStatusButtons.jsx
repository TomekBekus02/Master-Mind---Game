import StartButton from './StartButton/StartButton'
import RestartButton from './RestartButton/RestartButton'
import SaveRoundButton from './SaveRoundButton/SaveRoundButton'
import './GameStatusButtons.css'
import { useRef, useState } from 'react'
import DialogWindow from './DialogResultWindow'


export default function GameStatusButtons(){
    const dialogWindowRef = useRef();
    const [gameResult, setGameResult] = useState(false);

    return(
        <div className="gameStatusContainer">
            <h3>Game Status</h3>
            <div className="buttonsContainer">
                <StartButton/>
                <RestartButton/>
            </div>
            <div className="saveRoundContainer">
                <SaveRoundButton setGameResult={setGameResult} ref={dialogWindowRef}/>
            </div>
            <DialogWindow ref={dialogWindowRef} result={gameResult ? 'Victory!' : 'Game Over!'}/>
        </div>
    )
}