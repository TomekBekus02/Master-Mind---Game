import { useContext } from 'react';
import { GameContex } from '../../../source/gameContex';
import './SaveRoundButton.css';

export default function SaveButton(){
    const {dataGame, updateDataGame, IdRound, fourDecodedColors, handleRound, colors, setFourDecodedColors} = useContext(GameContex);

    async function handeSaveRound(IdRound, fourDecodedColors, colors){
        await updateDataGame(IdRound, fourDecodedColors, colors);
        handleRound();
        setFourDecodedColors(['','','','']);
    }
    return(
        <button 
            className={`saveRoundButton`}//dostepny po wypelnienu 4 wartosci kolorem
            onClick={() => handeSaveRound(IdRound, fourDecodedColors, colors, setFourDecodedColors)}
        >Save round</button>
    )
}