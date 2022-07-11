import React, { useState } from "react";


const Form = ()=>{

    let [color, setColor] = useState("");

    let [listOfBoxes, setListOfBoxes] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault();
        let boxObj = {color};
        setListOfBoxes([...listOfBoxes, boxObj]);
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Color</label> &nbsp;
                    <input onChange={(e)=>setColor(e.target.value)} type="text"/>  
                    <input type="submit" value="Add"/>                
                </div>
            </form>
            <hr />
            <div className="box-list">
            {
                listOfBoxes.map((box)=>{
                    return(
                        <div className="box" style={
                            {backgroundColor: box.color}}>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}









export default Form;