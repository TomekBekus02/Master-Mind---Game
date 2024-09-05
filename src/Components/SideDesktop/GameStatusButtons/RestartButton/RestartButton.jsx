import { useContext } from 'react'
import { GameContex } from '../../../source/gameContex'
import './RestartButton.css'
import data from '../../../source/data'

export default function RestartButton(){
    const {addAnswer, handleEndGame, setIdRound, setDataGame, colors,setEndGame,
           setAnswer, startGame, setActiveDecode, setFourDecodedColors, setCurrentButton} = useContext(GameContex);
    const randomNumber = () => {return Math.floor(Math.random() * colors.length)};

    async function gameLaunching() {
        for (let i = 0; i < 4; i++) {
            addAnswer(randomNumber())
        }
        setDataGame(data);
        return 0;
    }
    async function restartingGame(){
        setIdRound(1);
        setAnswer([]);
        setEndGame(false);
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