import React, { Children, createContext, useState } from "react";
import data from '../source/data'

export const GameContex = createContext();

export const GameProvider = ({children}) => {
    const [dataGame, setDataGame] = useState(data); 

    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white']; 

    const [fourDecodedColors, setFourDecodedColors] = useState(['','','','']); 
    const updatefourDecodedColors = (colorIndex, newColor) => {
        setFourDecodedColors(prevColors => {
            const newArrayColor = [...prevColors];
            newArrayColor[colorIndex] = newColor;
            return newArrayColor;
        })
    };

    const [currentButton, setCurrentButton] = useState(0); 
    const [currentIdRow, setcurrentIdRow] = useState(1); 

    const [activeDecode, setActiveDecode] = useState(false); 
    const handleActiveDecode = (condition) => setActiveDecode(condition); 

    const [IdRound, setIdRound] = useState(0); 
    const handleRound = () => setIdRound(prevRound => (prevRound < 10 ? prevRound + 1 : prevRound)); 
    const [endGame, setEndGame] = useState(false); 
    const handleEndGame = () => setEndGame(!endGame); 

    const [startGame, setStartGame] = useState(false); 
    const handleStartGame = () => setStartGame(!startGame); 

    const [answer, setAnswer] = useState([]); 
    const addAnswer = newAnswer => setAnswer(prevAnswers => [...prevAnswers, newAnswer]); 

    const [isUserColorsChecked, setIsUserColorsChecked] = useState([false, false, false, false]); 
        
    const [colorAccuracy, setColorAccuracy] = useState([0,0,0,0]); 
    const [abledSaveButton, setAbledSaveButton] = useState(false); 

    const updateDataGame = (IdRound, fourDecodedColors, colors, colorAccuracy ) => {
         setDataGame(prevData => {
            return prevData.map(item =>
                item.round === IdRound
                ? {...item, 
                    accuracy: item.accuracy.map((itemAccuracy, index) =>
                        itemAccuracy === colorAccuracy[index] ? itemAccuracy : colorAccuracy[index]
                    ),
                    saved: true, 
                    colors: item.colors.map((itemColor, index) => 
                        fourDecodedColors[index] !== undefined
                            ? colors[fourDecodedColors[index]]
                            : itemColor 
                )}
                : item
            )
        })
    }
    return (
        <GameContex.Provider value={
            {   
                handleRound, handleStartGame, handleEndGame, handleActiveDecode, addAnswer, setColorAccuracy,
                setFourDecodedColors, setCurrentButton, setIdRound, setAnswer, updatefourDecodedColors, setIsUserColorsChecked,
                setcurrentIdRow, setAbledSaveButton, updateDataGame, setDataGame, setActiveDecode, setEndGame,   
                IdRound, colors, dataGame, answer, endGame, startGame, activeDecode, colorAccuracy, 
                currentButton, fourDecodedColors, currentIdRow, abledSaveButton, isUserColorsChecked                
            }}>
            {children}
        </GameContex.Provider>
    )
}