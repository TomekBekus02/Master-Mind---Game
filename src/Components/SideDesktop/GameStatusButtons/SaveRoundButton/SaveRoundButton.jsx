import { useContext } from 'react';
import { GameContex } from '../../../source/gameContex';
import './SaveRoundButton.css';

export default function SaveButton(){
    const {setCurrentButton, updateDataGame, IdRound, fourDecodedColors, handleRound, colors, colorAccuracy, setColorAccuracy,
           setFourDecodedColors, answer, isUserColorsChecked, setIsUserColorsChecked, setEndGame} = useContext(GameContex);

    async function handleGameProgress(){
        const updatedCheckedColors = [false, false, false, false];
        console.log(`${updatedCheckedColors.map(item => item)}`);
        const updatedColorsAccuracy = [0,0,0,0];
        let tempAccuracy = 0;
        let tempJ = 4;
        console.log(`AI answer: ${answer.map(item => item)}`);
        console.log(`user answer: ${fourDecodedColors.map(item => item)}`);
        for(let user = 0; user < 4; user++){
            tempAccuracy = 0;
            for(let Ai = 0; Ai < 4; Ai++){
                if(updatedCheckedColors[Ai] === false && fourDecodedColors[Ai] !== '' && fourDecodedColors[user] === answer[Ai]){
                    console.log(`[user:${user}][Ai:${Ai}] AI: ${answer[Ai]} user: ${fourDecodedColors[user]}`);
                    console.log(`false/true == ${updatedCheckedColors[Ai]}`);
                    if(user===Ai){
                        updatedCheckedColors[Ai] = true
                        tempAccuracy = 2;
                        console.log(`2`);
                        break;
                    }
                    else{
                        if(fourDecodedColors[Ai]===fourDecodedColors[user]){
                            updatedCheckedColors[user] = true;
                            updatedColorsAccuracy[user] = 2;
                            tempAccuracy = 0;
                            continue;
                        }
                        tempAccuracy = 1;
                        console.log('1'); 
                    }   
                }
            }
            updatedColorsAccuracy[user] = tempAccuracy;  
        }
        updatedColorsAccuracy.sort((a,b)=>b-a);
        await setColorAccuracy([0,0,0,0]);
        await setColorAccuracy(updatedColorsAccuracy);
        await updateDataGame(IdRound, fourDecodedColors, colors, updatedColorsAccuracy);
        await setIsUserColorsChecked(updatedCheckedColors);
        if(updatedColorsAccuracy.every(item => item == 2)){
            alert("You win!!");
            setEndGame(true);
        }
            
        //console.log("tablica sprawdzenia");
       // updatedCheckedColors.map(item => console.log(item));
        //console.log("tabela accuricy");
        //updatedColorsAccuracy.map(item => console.log(item));

    }

    async function handeSaveRound(){
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