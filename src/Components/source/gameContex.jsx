import React, { Children, createContext, useState } from "react";
import data from '../source/data'

export const GameContex = createContext();

export const GameProvider = ({children}) => {
    const [dataGame, setDataGame] = useState(data); // dataGame from data.js
    const updateDataGame = () => {//updates Data Game in data.js file

    }

    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white']; // possible colors in this game

    const [fourDecodedColors, setFourDecodedColors] = useState(['','','','']); // array for 4 choosen colors to update in data
    const updatefourDecodedColors = (colorIndex, newColor) => {
        setFourDecodedColors(prevColors => {
            const newArrayColor = [...prevColors];
            newArrayColor[colorIndex] = newColor;
            return newArrayColor;
        })
    };

    const [currentButton, setCurrentButton] = useState(1); //current color Decode to sets value from pool of colors

    const [activeDecode, setActiveDecode] = useState(false); // shows container with possible colors to decode
    const handleActiveDecode = (condition) => setActiveDecode(condition); 

    const [IdRound, setIdRound] = useState(0); // show and set current round 1-10
    const handleRound = () => setIdRound(prevRound => (prevRound < 10 ? prevRound + 1 : prevRound)); // function that handles rounds

    const [endGame, setEndGame] = useState(true); //value if game has started or finished
    const handleEndGame = () => setEndGame(!endGame); //sets status of the game

    const [startGame, setStartGame] = useState(false); //value if game has started or finished
    const handleStartGame = () => setStartGame(!startGame); //sets status of the game

    const [answer, setAnswer] = useState([]); // array of 4 generated colors to decode
    const addAnswer = newAnswer => setAnswer(prevAnswers => [...prevAnswers, newAnswer]); // adding colors to array


    return (
        <GameContex.Provider value={
            {   
                handleRound, handleStartGame, handleEndGame, addAnswer, setCurrentButton,             
                setIdRound, setAnswer, handleActiveDecode, updatefourDecodedColors,                 
                IdRound, colors, dataGame, answer, endGame, startGame, activeDecode, 
                currentButton, fourDecodedColors                
            }}>
            {children}
        </GameContex.Provider>
    )
}