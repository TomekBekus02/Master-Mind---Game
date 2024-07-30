import './BotAnswer.css'
export default function BotAnswer({currentRound})
{
    return(
        <div className="resultContainer">
            <div className="resultHeader">
                <h1>Coded Answer</h1>
            </div>
            <div className="codedColorsContainer">
                <div className="color-result color1"></div>
                <div className="color-result color2"></div>
                <div className="color-result color3"></div>
                <div className="color-result color4"></div>
            </div>
        </div>
    )
}