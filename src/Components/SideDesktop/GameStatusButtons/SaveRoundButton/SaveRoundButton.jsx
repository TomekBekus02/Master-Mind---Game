import { useContext } from 'react';
import { GameContex } from '../../../source/gameContex';
import './SaveRoundButton.css';

export default function SaveButton(){
    const {setCurrentButton, updateDataGame, IdRound, fourDecodedColors, handleRound, colors, colorAccuracy, setColorAccuracy,
           setFourDecodedColors, answer, isUserColorsChecked, setIsUserColorsChecked} = useContext(GameContex);

    async function handleGameProgress(){
        setIsUserColorsChecked([false, false, false, false]);
        const updatedCheckedColors = [...isUserColorsChecked];
        const updatedColorsAccuracy = [...colorAccuracy];
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                console.log(`[i:${i}][j:${j}] AI: ${answer[i]} user: ${fourDecodedColors[j]}`);
                console.log(`false/true == ${isUserColorsChecked[j]}`);
                if(isUserColorsChecked[j] === false){
                    if(answer[i] == fourDecodedColors[j] && i==j){
                        updatedColorsAccuracy.push(2);
                        console.log(`2`);
                        break;
                    }
                    else if(answer[i] == fourDecodedColors[j]){
                        updatedColorsAccuracy.push(1);  
                        console.log('1'); 
                        break; 
                    }
                    if(j==3){
                        updatedColorsAccuracy.push(0);
                        console.log('0');
                    }
                    updatedCheckedColors[j] = true;
                }
            }
        }
        updatedColorsAccuracy.sort((a,b)=>b-a);
        await setColorAccuracy(updatedColorsAccuracy);
        await setIsUserColorsChecked(updatedCheckedColors);
        console.log("tablica sprawdzenia");
        updatedCheckedColors.map(item => console.log(item));
        console.log("tabela accuricy");
        updatedColorsAccuracy.map(item => console.log(item));

    }

    async function handeSaveRound(IdRound, fourDecodedColors, colors){
        await updateDataGame(IdRound, fourDecodedColors, colors);
        handleRound();
        await handleGameProgress();
        setFourDecodedColors(['','','','']);
        setCurrentButton(0);
    }
    return(
        <button 
            className={`saveRoundButton`}//dostepny po wypelnienu 4 wartosci kolorem
            onClick={() => handeSaveRound(IdRound, fourDecodedColors, colors)}
        >Save round</button>
    )
}