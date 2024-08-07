import { useContext } from 'react'
import { GameContex } from '../../../source/gameContex';
import './RestartButton.css'

export default function RestartButton(){
    const {addAnswer, handleEndGame, setIdRound, setAnswer, startGame, setActiveDecode} = useContext(GameContex);
    function restartingGame(){
        setIdRound(1);
        setAnswer([]);
        const newAnswers = [];
        for (let i = 0; i < 4; i++) {
            newAnswers.push(randomNumber());
        }
        newAnswers.forEach(answer => addAnswer(answer));
        handleEndGame();
        setActiveDecode();
    }
    return (
        <button 
            onClick={startGame ? () => restartingGame() : null} 
            className="restart-button"
        >Restart Game</button>   
    )
}