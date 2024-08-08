import { useContext } from 'react'
import { GameContex } from '../../../source/gameContex';
import './RestartButton.css'

export default function RestartButton(){//po nacisnieciu restart button gra sie restartuje, ale coded answer sie nie wczytuje
    const {addAnswer, handleEndGame, setIdRound, setAnswer, startGame, setActiveDecode, setFourDecodedColors, setCurrentButton} = useContext(GameContex);
    const randomNumber = () => {return Math.floor(Math.random() * colors.length)};

    function gameLaunching() {
        const newAnswers = [];
        for (let i = 0; i < 4; i++) {
            newAnswers.push(randomNumber());
        }
        newAnswers.forEach(answer => addAnswer(answer));
        handleRound(); 
        handleStartGame();
    }
    function restartingGame(){
        setIdRound(1);
        setAnswer([]);
        setFourDecodedColors(['','','','']);
        setCurrentButton(1);
        gameLaunching();
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