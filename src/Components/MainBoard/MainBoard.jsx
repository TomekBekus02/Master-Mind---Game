import './MainBoard.css'
import BoardRow from './BoardRow/BoardRow'

export default function MainBoard(){
    return(
        <div className="main-board-Container">
            <div className="board">
                <div className="Rows-Container">
                    <BoardRow />
                    <BoardRow />
                    <BoardRow />
                    <BoardRow />
                    <BoardRow />
                    <BoardRow />
                    <BoardRow />
                    <BoardRow />
                    <BoardRow />
                    <BoardRow />
                </div>
            </div>
        </div>
    )
}