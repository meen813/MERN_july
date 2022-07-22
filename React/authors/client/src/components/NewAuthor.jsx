import axios from 'axios';
import React,{useState} from 'react';
import {
    Link
  } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const NewAuthor = (props) => {
    let [formInfo, setFormInfo] = useState({})
    let [formError, setFormErrors] = useState({})
    const navigate = useNavigate();

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
        [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(response=>{
                console.log("response after submitting", response)
                if(response.data.errors){
                    setFormErrors(response.data.errors);
                }else{
                    navigate("/")
                    setFormErrors({})
                    props.setFormSubmitted(!props.FormSubmitted);
                    
                }
                
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <Link to={'/'}>Home</Link>

            <p>Add a new author</p>
            
            <form onSubmit={submitHandler}>
                <div className='form-gorup'>
                    <label>Name:</label>
                    <input type="text" name='name' className='form-control' onChange={changeHandler} />
                    
                    <p className='text-danger'>{formError.name?.message}</p>
                </div>
                <input type="submit" value="Submit" className='btn btn-success m-3'/>

                <Link to={'/'} className='btn btn-success m-3'>Cancel</Link>
                
            </form>


            
        </div>
    );
};



export default NewAuthor;