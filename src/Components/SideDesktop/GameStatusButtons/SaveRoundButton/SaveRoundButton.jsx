import { useContext } from 'react';
import { GameContex } from '../../../source/gameContex';
import './SaveRoundButton.css';

export default function SaveButton(){
    const {abledSaveButton} = useContext(GameContex);

    return(
        <button 
            className={`saveRoundButton ${abledSaveButton ? null : 'disabled'}`}//dostepny po wypelnienu 4 wartosci kolorem
        >Save round</button>
    )
}