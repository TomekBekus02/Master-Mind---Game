import { useContext, useState } from 'react'
import { GameContex } from '../../../../source/gameContex'
import './ColorButton.css'

export default function ColorButton({id, buttonNr}){
    const {dataGame, IdRound, handleActiveDecode, setCurrentButton, fourDecodedColors, colors, setcurrentIdRow, currentButton} = useContext(GameContex);

    const activationCondition = id==IdRound && IdRound != 0;
    // const [buttonClicked, setButtonClicked] = useState(false);
    // const [currentButton, setCurrentButton] = useState(0);

    const handleColorsDecode = async(buttonNr, id) => {
        handleActiveDecode(true);
        setCurrentButton(buttonNr);
        setcurrentIdRow(id);
    }
    return(
        
        <button 
            className={`color-button 
                ${activationCondition 
                ? buttonNr == currentButton 
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