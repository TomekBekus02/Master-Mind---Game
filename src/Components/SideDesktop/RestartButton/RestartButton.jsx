import { useContext } from 'react'
import { GameContex } from '../../source/gameContex'
import './RestartButton.css'

export default function RestartButton(){
    const {addAnswer, handleEndGame, handleStartGame, setIdRound, setAnswer} = useContext(GameContex);
    function restartingGame(){
        setIdRound(1);
        setAnswer([]);
        const newAnswers = [];
        for (let i = 0; i < 4; i++) {
            newAnswers.push(randomNumber());
        }
        newAnswers.forEach(answer => addAnswer(answer));
        handleStartGame();
        handleEndGame();
    }
    return (
        <button onClick={() => restartingGame()} className="restart-button">Restart Game</button>   
    )
}