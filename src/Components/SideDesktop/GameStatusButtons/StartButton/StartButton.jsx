import { useContext } from 'react'
import { GameContex } from '../../../source/gameContex'
import './StartButton.css'

export default function StartButton(){
    const {handleRound, handleStartGame, addAnswer, colors, startGame, answer} = useContext(GameContex);
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
    return(  
        <button 
            onClick={!startGame ? () => gameLaunching() : null} 
            className="start-button"
        >Start Button</button>
    )
}