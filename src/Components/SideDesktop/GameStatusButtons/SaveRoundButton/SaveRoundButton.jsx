import { useContext } from 'react';
import { GameContex } from '../../../source/gameContex';
import './SaveRoundButton.css';

export default function SaveButton(){
    const {setCurrentButton, updateDataGame, IdRound, fourDecodedColors, handleRound, colors, colorAccuracy, setColorAccuracy,
           setFourDecodedColors, answer, isUserColorsChecked, setIsUserColorsChecked} = useContext(GameContex);

    async function handleGameProgress(){
        const updatedCheckedColors = [false, false, false, false];
        updatedCheckedColors.map(item => console.log(`${item},`))
        const updatedColorsAccuracy = [0,0,0,0];
        let tempAccuracy = 0;
        let tempJ = 4;
        for(let i = 0; i < 4; i++){
            tempAccuracy = 0;
            tempJ = 4;
            for(let j = 0; j < 4; j++){
                if(updatedCheckedColors[j] === false){
                    console.log(`[i:${i}][j:${j}] AI: ${answer[i]} user: ${fourDecodedColors[j]}`);
                    console.log(`false/true == ${updatedCheckedColors[j]}`);
                    if(fourDecodedColors[j] !== '' && answer[i] == fourDecodedColors[j] && i==j){
                        tempJ = j;
                        tempAccuracy = 2;
                        console.log(`2`);
                        break;
                    }
                    else if(fourDecodedColors[j] !== '' && answer[i] == fourDecodedColors[j]){
                        tempAccuracy = 1;
                        tempJ = j;
                        console.log('1'); 
                    }
                }
            }
            updatedColorsAccuracy[i] = tempAccuracy;  
            tempJ !== 4 ? updatedCheckedColors[tempJ] = true : null
        }
        updatedColorsAccuracy.sort((a,b)=>b-a);
        await setColorAccuracy(updatedColorsAccuracy);
        await setIsUserColorsChecked(updatedCheckedColors);
        //console.log("tablica sprawdzenia");
       // updatedCheckedColors.map(item => console.log(item));
        //console.log("tabela accuricy");
        //updatedColorsAccuracy.map(item => console.log(item));

    }

    async function handeSaveRound(){
        await updateDataGame(IdRound, fourDecodedColors, colors, colorAccuracy);
        handleRound();
        await handleGameProgress();
        setFourDecodedColors(['','','','']);
        setCurrentButton(0);
    }
    return(
        <button 
            className={`saveRoundButton`}//dostepny po wypelnienu 4 wartosci kolorem
            onClick={() => handeSaveRound()}
        >Save round</button>
    )
}