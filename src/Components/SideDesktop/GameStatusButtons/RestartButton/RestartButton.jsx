import { useContext } from 'react'
import { GameContex } from '../../../source/gameContex'
import './RestartButton.css'
import data from '../../../source/data'

export default function RestartButton(){
    const {addAnswer, handleEndGame, setIdRound, setDataGame, colors, 
           setAnswer, startGame, setActiveDecode, setFourDecodedColors, setCurrentButton} = useContext(GameContex);
    const randomNumber = () => {return Math.floor(Math.random() * colors.length)};

    async function gameLaunching() {
        const newAnswers = [];
        for (let i = 0; i < 4; i++) {
            newAnswers.push(randomNumber());
        }
        newAnswers.forEach(answer => addAnswer(answer));
        setDataGame(data);
        return 0;
    }
    async function restartingGame(){
        setIdRound(1);
        setAnswer([]);
        setFourDecodedColors(['','','','']);
        setCurrentButton(0);
        await gameLaunching();
        //handleEndGame(); //while production endGame setting are off
        setActiveDecode(false);
    }
    return (
        <button 
            onClick={startGame ? () => restartingGame() : null} 
            className="restart-button"
        >Restart Game</button>   
    )
}