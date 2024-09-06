import { useContext } from 'react';
import { GameContex } from '../../../source/gameContex';
import './SaveRoundButton.css';

export default function SaveButton(){
    const {setCurrentButton, updateDataGame, IdRound, fourDecodedColors, handleRound, colors, colorAccuracy, setColorAccuracy,
           setFourDecodedColors, answer, isUserColorsChecked, currentIdRow, setIsUserColorsChecked, setEndGame} = useContext(GameContex);

    async function handleGameProgress(){
        const updatedCheckedColors = [false, false, false, false];
        const updatePossibleUserCheckedColors = [false, false, false, false];
            console.log(`${updatedCheckedColors.map(item => item)}`);
        const updatedColorsAccuracy = [0,0,0,0];
        let tempAccuracy = 0;
        let tempAi = 4;
            console.log(`AI answer: ${answer.map(item => item)}`);
            console.log(`user answer: ${fourDecodedColors.map(item => item)}`);
        for(let user = 0; user < 4; user++){
            tempAccuracy = 0;
            tempAi = 4;
            if(updatePossibleUserCheckedColors[user]){
                continue;
            }
            for(let Ai = 0; Ai < 4; Ai++){
                console.log(`false/true == ${updatedCheckedColors[Ai]}`);
                console.log(`[user:${user}][Ai:${Ai}] AI: ${answer[Ai]} user: ${fourDecodedColors[user]}`);
                if(updatedCheckedColors[Ai] === false && fourDecodedColors[Ai] !== '' && fourDecodedColors[user] === answer[Ai]){
                    if(user===Ai){
                        updatedCheckedColors[Ai] = true;
                        tempAccuracy = 2;
                        tempAi = 4;
                        console.log(`2`);
                        break;
                    }
                    else{
                        console.log(`sprawdzenie czy na tym potencjaklnym miejsu jest lepiej pasujacy index z tej petli ${fourDecodedColors[Ai]} index z wyzszej petli ${fourDecodedColors[user]}`);
                        if(answer[Ai]===fourDecodedColors[Ai]){
                            updatePossibleUserCheckedColors[Ai] = true;
                            updatedCheckedColors[Ai] = true;
                            updatedColorsAccuracy[Ai] = 2;
                            console.log(`2`);
                            tempAccuracy = 0;
                            tempAi = 4;
                            Ai=-1;
                        }
                        else if(tempAi===4){
                            tempAccuracy = 1;
                            tempAi=Ai;
                            console.log('1'); 
                        }
                    }   
                }
            }
            updatedColorsAccuracy[user] = tempAccuracy;
            console.log(`user answer: ${updatedColorsAccuracy.map(item => item)}`);
            tempAi !== 4 ? updatedCheckedColors[tempAi] = true : console.log('0');;
        }
        updatedColorsAccuracy.sort((a,b)=>b-a);
        await setColorAccuracy([0,0,0,0]);
        await setColorAccuracy(updatedColorsAccuracy);
        await updateDataGame(IdRound, fourDecodedColors, colors, updatedColorsAccuracy);
        await setIsUserColorsChecked(updatedCheckedColors);

        if(updatedColorsAccuracy.every(item => item == 2) || currentIdRow === 12){
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