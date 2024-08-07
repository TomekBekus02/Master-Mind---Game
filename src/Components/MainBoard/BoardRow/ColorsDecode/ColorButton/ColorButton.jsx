import { useContext, useState } from 'react'
import { GameContex } from '../../../../source/gameContex'
import './ColorButton.css'

export default function ColorButton({id, buttonNr}){
    const {dataGame, IdRound, handleActiveDecode, setCurrentButton, fourDecodedColors, colors} = useContext(GameContex);

    const activationCondition = id==dataGame[IdRound > 0 ? IdRound-1 : IdRound].round && IdRound != 0;
    // const [buttonClicked, setButtonClicked] = useState(false);
    // const [currentButton, setCurrentButton] = useState(0);

    const handleColorsDecode = async(buttonNr) => {
        handleActiveDecode(true);
        setCurrentButton(buttonNr);
    }
    return(
        <button 
            className={`color-button ${activationCondition ? null : 'disabled'}`}
            style={activationCondition && fourDecodedColors[buttonNr] != 'undefined' ? {backgroundColor: colors[fourDecodedColors[buttonNr]]} : null} 
            onClick={activationCondition ? () => handleColorsDecode(buttonNr) : null}
        ></button> 
    )
}