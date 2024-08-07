import StartButton from './StartButton/StartButton'
import RestartButton from './RestartButton/RestartButton'
import SaveRoundButton from './SaveRoundButton/SaveRoundButton'
import './GameStatusButtons.css'

export default function GameStatusButtons(){
    return(
        <div className="gameStatusContainer">
            <h3>Game Status</h3>
            <div className="buttonsContainer">
                <StartButton/>
                <RestartButton/>
            </div>
            <div className="saveRoundContainer">
                <SaveRoundButton/>
            </div>
        </div>
    )
}