import { useContext } from 'react'
import { GameContex } from '../../../source/gameContex'
import './ColorsAccuracy.css'

export default function ColorsAccuracy({id}){
    const {colorAccuracy, IdRound, dataGame} = useContext(GameContex);
    const activationCondition = id==IdRound-1 && IdRound != 0;

    return(
        <div className="accuracy-container">
            <div className="row-container">
                {
                    //console.log(dataGame[id-1].saved)
                    //dataGame[id-1].accuracy.map((item, index) => {`typ: ${typeof item}`})
                        // activationCondition
                        // ?
                        //     colorAccuracy.map((item,index) => {
                        //         switch (item){
                        //             case 2:
                        //                 return <div key={index} className="accuracy" style={{backgroundColor: 'black'}}></div>
                        //             case 1:
                        //                 return <div key={index} className="accuracy" style={{backgroundColor: 'white'}}></div>
                        //             case 0:
                        //                 return <div key={index} className="accuracy"></div>
                        //         }
                        //     })
                        // :
                        // dataGame[id-1].saved
                        // ?
                        //     dataGame[id-1].accuracy.map((item, index) => {
                        //         switch (item){
                        //             case 2:
                        //                 return <div key={index} className="accuracy" style={{backgroundColor: 'black'}}></div>
                        //             case 1:
                        //                 return <div key={index} className="accuracy" style={{backgroundColor: 'white'}}></div>
                        //             case 0:
                        //                 return <div key={index} className="accuracy"></div>
                        //         }                  
                        //     })
                        //     :



                    //version 2
                    //console.log(`warunek aktywacji: ${activationCondition} id=${id} == idRound=${IdRound}, item: ${item}`)
                    activationCondition
                    ?
                        colorAccuracy.map((item,index) => {
                            switch (item){
                                case 2:
                                    return <div key={index} className="accuracy" style={{backgroundColor: 'black'}}></div>
                                case 1:
                                    return <div key={index} className="accuracy" style={{backgroundColor: 'white'}}></div>
                                case 0:
                                    return <div key={index} className="accuracy"></div>
                            }
                        })
                    :
                        dataGame[id-1].accuracy.map((Aitem,index) => {
                            switch (Aitem){
                                case 2:
                                    return <div key={index} className="accuracy" style={{backgroundColor: 'black'}}></div>
                                case 1:
                                    return <div key={index} className="accuracy" style={{backgroundColor: 'white'}}></div>
                                case 0:
                                    return <div key={index} className="accuracy"></div>
                            }

                        })

                    
                }
            </div>
        </div>
    )
}