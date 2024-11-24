import { forwardRef, useContext } from 'react';
import { GameContex } from '../../../source/gameContex';
import './SaveRoundButton.css';

const SaveButton = forwardRef(function SaveButton({setGameResult}, ref){
    const {setCurrentButton, updateDataGame, IdRound, fourDecodedColors, handleRound, colors, setColorAccuracy, setFourDecodedColors, 
            answer, setIsUserColorsChecked,  abledSaveButton, setEndGame} = useContext(GameContex);

    function handleGameProgress(){
        const updatedCheckedColors = [false, false, false, false];
        const updatePossibleUserCheckedColors = [false, false, false, false];
        const updatedColorsAccuracy = [0,0,0,0];
        let tempAccuracy = 0;
        let tempAi = 4;
        for(let user = 0; user < 4; user++){
            tempAccuracy = 0;
            tempAi = 4;
            if(updatePossibleUserCheckedColors[user]){
                continue;
            }
            for(let Ai = 0; Ai < 4; Ai++){
                if(updatedCheckedColors[Ai] === false && fourDecodedColors[Ai] !== '' && fourDecodedColors[user] === answer[Ai]){
                    if(user===Ai){
                        updatedCheckedColors[Ai] = true;
                        tempAccuracy = 2;
                        tempAi = 4;
                        break;
                    }
                    else{
                        
                        if(answer[Ai]===fourDecodedColors[Ai]){
                            updatePossibleUserCheckedColors[Ai] = true;
                            updatedCheckedColors[Ai] = true;
                            updatedColorsAccuracy[Ai] = 2;
                            tempAccuracy = 0;
                            tempAi = 4;
                            Ai=-1;
                        }
                        else if(tempAi===4){
                            tempAccuracy = 1;
                            tempAi=Ai;
                        }
                    }   
                }
            }
            updatedColorsAccuracy[user] = tempAccuracy;
            tempAi !== 4 ? updatedCheckedColors[tempAi] = true : null;
        }
        updatedColorsAccuracy.sort((a,b)=>b-a);
        setColorAccuracy([0,0,0,0]);
        setColorAccuracy(updatedColorsAccuracy);
        updateDataGame(IdRound, fourDecodedColors, colors, updatedColorsAccuracy);
        setIsUserColorsChecked(updatedCheckedColors);
        console.log(IdRound);
        if(updatedColorsAccuracy.every(item => item == 2)){
            setGameResult(true);
            ref.current.showModal();
            setEndGame(true);
        }
        else if(IdRound === 10){
            setGameResult(false);
            ref.current.showModal();
            setEndGame(true);
        }
    }

    function handeSaveRound(){
        handleRound();
        handleGameProgress();
        setFourDecodedColors(['','','','']);
        setCurrentButton(0);
    }
    return(
        <button 
            className={`saveRoundButton ${abledSaveButton ? null : 'disabled'}`}
            onClick={() => handeSaveRound()}
        >Save round</button>
    )
})
export default SaveButton