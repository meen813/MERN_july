import React from "react";
import { useParams } from "react-router-dom";


const Number = () => {
    const {num, tColor, bColor} = useParams();

    return(
        <>
        {
            isNaN(num)? <h1 style={{color: tColor , backgroundColor: bColor}}>The word is: {num}</h1> :  <h1>The number is: {num}</h1>
        }
        </>
    )
}



export default Number