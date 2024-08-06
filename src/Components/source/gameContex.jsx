import React, { Children, createContext, useState } from "react";
import data from '../source/data'

export const GameContex = createContext();

export const GameProvider = ({children}) => {
    const [dataGame, setDataGame] = useState(data); // dataGame from 
    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white']; // possible colors in this game

    const [IdRound, setIdRound] = useState(2); // show and set current round 1-10
    const handleRound = () => setIdRound(prevRound => (prevRound < 10 ? prevRound + 1 : prevRound)); // function that handles rounds


    const [endGame, setEndGame] = useState(false); //value if game has started or finished
    const handleEndGame = () => setEndGame(!endGame); //sets status of the game

    const [startGame, setStartGame] = useState(false); //value if game has started or finished
    const handleStartGame = () => setStartGame(!startGame); //sets status of the game

    const [answer, setAnswer] = useState([]); // array of 4 generated colors to decode
    const addAnswer = newAnswer => setAnswer(prevAnswers => [...prevAnswers, newAnswer]); // adding colors to array


    return (
        <GameContex.Provider value={
            {   
                handleRound, handleStartGame, handleEndGame, addAnswer, setIdRound, setAnswer,           //functions
                IdRound, colors, dataGame, answer, endGame, startGame               // variables
            }}>
            {children}
        </GameContex.Provider>
    )
}