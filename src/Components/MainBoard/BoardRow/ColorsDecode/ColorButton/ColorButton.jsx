import { useContext, useState } from 'react'
import { GameContex } from '../../../../source/gameContex'
import './ColorButton.css'

export default function ColorButton({id, buttonNr}){
    const {dataGame, IdRound, handleActiveDecode, setCurrentButton, fourDecodedColors, colors, setcurrentIdRow, currentButton, endGame, setAbledSaveButton} = useContext(GameContex);

    const activationCondition = id==IdRound && IdRound != 0;

    const handleColorsDecode = (buttonNr, id) => {
        handleActiveDecode(true);
        setCurrentButton(buttonNr);
        setcurrentIdRow(id);
    }
    setAbledSaveButton(true);
    fourDecodedColors.forEach(element => {
        if(element === ''){setAbledSaveButton(false);}
    });
    return(
        
        <button 
            className={`color-button 
                ${activationCondition 
                ? buttonNr == currentButton && !endGame
                    ? 'active-button'
                    : null
                : 'disabled'}`
            }
            style={dataGame[id-1].saved 
                    ? {backgroundColor: dataGame[id-1].colors[buttonNr]}
                    : activationCondition && fourDecodedColors[buttonNr] != 'undefined' 
                        ? {backgroundColor: colors[fourDecodedColors[buttonNr]]}
                        : null} 
            onClick={activationCondition ? () => handleColorsDecode(buttonNr,id) : null}
        ></button> 
    )
}