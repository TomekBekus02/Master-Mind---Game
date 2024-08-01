
import BotAnswer from './BotAnswer/BotAnswer'
import StartButton from './StartButton/StartButton'
import RestartButton from './RestartButton/RestartButton'
import './SideDesktop.css'

export default function SideDesktop(){
    return (
        <div className="side-desktop">
            <div className="titleContainer">
                <h1>Master Mind</h1>
                <h2>Game</h2>
            </div>
            <div className="welcomeContainer">
                <h1>Welcome to Master Mind</h1>
                <h3>To start click 'Start Game' button, if you want restart game, please click 'Restart Game' button. good luck :)</h3>
            </div>
            <div className="gameStatusContainer">
                <h3>Game Status</h3>
                <div className="buttonsContainer">
                    <StartButton/>
                    <RestartButton/>
                </div>


            </div>
            <div className="botAnswerContainer">
                <BotAnswer />
            </div>
        </div>
    )
}