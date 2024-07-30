import './SideDesktop.css'
import BotAnswer from './BotAnswer/BotAnswer'
export default function SideDesktop({currentRound}){
    return (
        <div className="side-desktop">
            <div className="titleContainer">
                <h1>Master Mind</h1>
                <h2>Game</h2>
            </div>
            <div className="botAnswerContainer">
                <BotAnswer currentRound={currentRound}/>
            </div>
        </div>
    )
}