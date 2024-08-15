import { useContext } from 'react';
import { GameContex } from '../../../source/gameContex';
import './SaveRoundButton.css';

export default function SaveButton(){
    const {setCurrentButton, updateDataGame, IdRound, fourDecodedColors, handleRound, colors, colorAccuracy, setColorAccuracy,
           setFourDecodedColors, answer, isUserColorsChecked, setIsUserColorsChecked} = useContext(GameContex);

    async function handleGameProgress(){
        setIsUserColorsChecked([false, false, false, false]);
        const updatedCheckedColors = [...isUserColorsChecked];
        updatedCheckedColors.map(item => console.log(`${item},`))
        const updatedColorsAccuracy = [...colorAccuracy];
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                console.log(`[i:${i}][j:${j}] AI: ${answer[i]} user: ${fourDecodedColors[j]}`);
                console.log(`false/true == ${updatedCheckedColors[j]}`);
                if(updatedCheckedColors[j] === false){
                    if(answer[i] == fourDecodedColors[j] && i==j){
                        updatedColorsAccuracy[i] = 2;
                        updatedCheckedColors[j] = true;
                        console.log(`2`);
                        break;
                    }
                    else if(answer[i] == fourDecodedColors[j]){
                        updatedColorsAccuracy[i] = 1;  
                        updatedCheckedColors[j] = true;
                        console.log('1'); 
                        break; 
                    }
                    if(j==3){
                        updatedColorsAccuracy[i] = 0;
                        console.log('0');
                    }
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