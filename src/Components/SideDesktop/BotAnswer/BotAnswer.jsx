import './BotAnswer.css'
export default function BotAnswer()
{
    return(
        <div className="resultContainer">
            <div className="resultHeader">
                <h1>Coded Answer</h1>
            </div>
            <div className="codedColorsContainer">
                <div className="color-result"></div>
                <div className="color-result"></div>
                <div className="color-result"></div>
                <div className="color-result"></div>
            </div>
        </div>
    )
}