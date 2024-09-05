import { useContext } from "react"
import { GameContex } from "../../source/gameContex"
import './PossibleColors.css'

export default function PossibleColors(){
    const {colors, updatefourDecodedColors, currentButton, setCurrentButton} = useContext(GameContex);

    const handlePossibleColors = (currentButton, index) => {
       updatefourDecodedColors(currentButton, index);
       console.log(`przed aktywacja ${currentButton}`);
       setCurrentButton(prevButton => (prevButton < 3 ? prevButton + 1 : prevButton));
       console.log(`po aktywacji ${currentButton}`);
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