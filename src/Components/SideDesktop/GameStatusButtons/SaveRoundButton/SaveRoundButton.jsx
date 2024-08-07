import { useContext } from 'react';
import { GameContex } from '../../../source/gameContex';
import './SaveRoundButton.css';

export default function SaveButton(){
    const {} = useContext(GameContex);
    return(
        <button 
            className="saveRoundButton"
        >Save round</button>
    )
}