import React, { useState } from "react";


const Form = () =>{
    let [toDo, setToDo] = useState("");

    let [listOfToDos, setListOfToDos] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault(); 

        let toDoObj = {toDo};

        setListOfToDos([...listOfToDos, toDoObj]);
    }

    const deleteToDo = (e, idx) =>{
        //make a copy of our array of todos (industry best practice to not directly modify the state variable) && modify the copy (remove from the array the element at index number idx)
        let filteredCopy = listOfToDos.filter((toDo, i)=>{
            return i != idx //return back the todos whose index number does not match the index number we want to delete
        })


        //update the state variable to be the new copy using the setter
        setListOfToDos(filteredCopy);
        
    }

    //function to toggle
    const toggleToDo = (e, idx) => {
        let copyOfToDoList =[...listOfToDos]
        copyOfToDoList[idx].hasDone= e.target.checked;
        setListOfToDos(copyOfToDoList);
    }


return(
    <>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                    <input onChange={(e)=>setToDo(e.target.value)} type="text" className="form-group"/>
                </div>
            <input type="submit" value="Add" className="btn btn-primary mt-3" />
        </form>
        
        <div>
            {
                listOfToDos.map((list, idx)=>{
                    return(
                        <div key = {idx} >
                            <label style={{textDecorationLine: list.hasDone? "line-through":null}} > {list.toDo}</label>
                            <input type="checkbox" onClick={(e)=> toggleToDo(e, idx)} />
                            <button onClick={(e) => deleteToDo(e, idx)} className="btn btn-danger m-3">Delete</button>
                        </div>
                    )
                })
            }
        </div>
    </>
)
}





















export default Form;