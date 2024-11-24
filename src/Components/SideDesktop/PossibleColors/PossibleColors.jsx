import { useContext } from "react"
import { GameContex } from "../../source/gameContex"
import './PossibleColors.css'

export default function PossibleColors(){
    const {colors, updatefourDecodedColors, currentButton, setCurrentButton, endGame} = useContext(GameContex);

    const handlePossibleColors = (currentButton, index) => {
       updatefourDecodedColors(currentButton, index);
       setCurrentButton(prevButton => (prevButton < 3 ? prevButton + 1 : prevButton));
    }
    return(
        <>
            <h1>Pool of Coolors</h1>
            <div className="ColorsPoolContainer">
                {
                    colors.map((colorNumber, index) => (
                        <button 
                            key={index} 
                            className="colors-pool" 
                            style={{backgroundColor: colors[index]}}
                            disabled={endGame}
                            onClick={() => handlePossibleColors(currentButton, index)}
                        ></button>
                    ))
                }
            </div>
        </>
    )
}