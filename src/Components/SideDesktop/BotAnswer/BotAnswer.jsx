import './BotAnswer.css'

import dataColor from '/src/Components/source/data'

export default function BotAnswer({currentRound, handleRound, colorsPool})
{
    const randomNumber = () => Math.floor(Math.random() * colorsPool.length);
    return(
        <div className="resultContainer">
            <div className="resultHeader">
                <h1>Coded Answer</h1>
            </div>
            <div className="codedColorsContainer">
                <div className="color-result" style={{backgroundColor: colorsPool[randomNumber()] }}></div>
                <div className="color-result" style={{backgroundColor: colorsPool[randomNumber()] }}></div>
                <div className="color-result" style={{backgroundColor: colorsPool[randomNumber()] }}></div>
                <div className="color-result" style={{backgroundColor: colorsPool[randomNumber()] }}></div>        
            </div>
        </div>
    )
}