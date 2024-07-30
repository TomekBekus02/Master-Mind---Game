import './MainBoard.css'
import BoardRow from './BoardRow/BoardRow'

export default function MainBoard({currentRound}){
    return(
        <div className="main-board-Container">
            <div className="board">
                <div className="Rows-Container">
                    <BoardRow id={1} round ={currentRound}/>
                    <BoardRow id={2} round ={currentRound}/>
                    <BoardRow id={3} round ={currentRound}/>
                    <BoardRow id={4} round ={currentRound}/>
                    <BoardRow id={5} round ={currentRound}/>
                    <BoardRow id={6} round ={currentRound}/>
                    <BoardRow id={7} round ={currentRound}/>
                    <BoardRow id={8} round ={currentRound}/>
                    <BoardRow id={9} round ={currentRound}/>
                    <BoardRow id={10} round ={currentRound}/>
                </div>
            </div>
        </div>
    )
}