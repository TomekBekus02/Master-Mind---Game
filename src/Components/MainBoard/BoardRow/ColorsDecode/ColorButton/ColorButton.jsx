import { useContext, useState } from 'react'
import { GameContex } from '../../../../source/gameContex'
import './ColorButton.css'

export default function ColorButton({id, buttonNr}){
    const {dataGame, IdRound, handleActiveDecode, setCurrentButton, fourDecodedColors, colors, setcurrentIdRow} = useContext(GameContex);

    const activationCondition = id==dataGame[IdRound > 0 ? IdRound-1 : IdRound].round && IdRound != 0;
    // const [buttonClicked, setButtonClicked] = useState(false);
    // const [currentButton, setCurrentButton] = useState(0);

    const handleColorsDecode = async(buttonNr, id) => {
        handleActiveDecode(true);
        setCurrentButton(buttonNr);
        setcurrentIdRow(id);
    }
    return(
        <button 
            className={`color-button ${activationCondition ? null : 'disabled'}`}
            style={dataGame[id-1].saved 
                    ? {backgroundColor: dataGame[id-1].colors[buttonNr-1]}
                    : activationCondition && fourDecodedColors[buttonNr] != 'undefined' 
                        ? {backgroundColor: colors[fourDecodedColors[buttonNr]]}
                        : null} 
            onClick={activationCondition ? () => handleColorsDecode(buttonNr,id) : null}
        ></button> 
    )
}