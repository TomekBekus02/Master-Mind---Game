import { GameContex } from '../../source/gameContex';
import './BotAnswer.css'
import { useContext, useEffect } from 'react';

export default function BotAnswer()
{
    const {colors, answer, endGame} = useContext(GameContex);


    return(
        <div className="resultContainer">
            <div className="resultHeader">
                <h1>Coded Answer</h1>
            </div>
            <div className="codedColorsContainer">
                {
                    !endGame
                    ?
                        answer.map((colorNumber, index) => (
                            <div key={index} className="color-result" style={{backgroundColor: colors[colorNumber]}}></div>
                        ))
                    :
                    <>
                        <div className="color-result"></div>
                        <div className="color-result"></div>
                        <div className="color-result"></div>
                        <div className="color-result"></div>
                    </>

                }
      
            </div>
        </div>
    )
}