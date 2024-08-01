import React, { Children, createContext, useState } from "react";
import data from '../source/data'

export const GameContex = createContext();

export const GameProvider = ({children}) => {
    const [dataGame, setDataGame] = useState(data); // dataGame from 
    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white']; // possible colors in this game

    const [IdRound, setIdRound] = useState(0); // show and set current round 1-10
    const handleRound = () => setIdRound(prevRound => (prevRound < 10 ? prevRound + 1 : prevRound)); // function that handles rounds


    const [endGame, setEndGame] = useState(true); //value if game should end or not
    const handleEndGame = () => setEndGame(!endGame); //sets status of the game

    const [answer, setAnswer] = useState([]); // array of 4 generated colors to decode
    const addAnswer = newAnswer => setAnswer([...answer, newAnswer]); // adding colors to array


    return (
        <GameContex.Provider value={{IdRound, handleRound, colors, dataGame, addAnswer, answer, handleEndGame, endGame}}>
            {children}
        </GameContex.Provider>
    )
}