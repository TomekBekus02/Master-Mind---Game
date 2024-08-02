import './MainBoard.css'
import BoardRow from './BoardRow/BoardRow'

export default function MainBoard({currentRound}){
    return(
        <div className="main-board-Container">
            <div className="board">
                <div className="Rows-Container">
                    <BoardRow id={1}/>
                    <BoardRow id={2}/>
                    <BoardRow id={3}/>
                    <BoardRow id={4}/>
                    <BoardRow id={5}/>
                    <BoardRow id={6}/>
                    <BoardRow id={7}/>
                    <BoardRow id={8}/>
                    <BoardRow id={9}/>
                    <BoardRow id={10}/>
                </div>
            </div>
        </div>
    )
}