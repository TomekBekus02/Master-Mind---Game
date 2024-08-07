import { useContext } from "react"
import { GameContex } from "../../source/gameContex"
import './PossibleColors.css'

export default function PossibleColors(){
    const {colors, updatefourDecodedColors, currentButton} = useContext(GameContex);
    const handlePossibleColors = (currentButton, index) => {
        updatefourDecodedColors(currentButton, index);
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
                            onClick={() => handlePossibleColors(currentButton, index)}
                        ></button>
                    ))
                }
            </div>
        </>
    )
}