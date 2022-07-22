import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";


const EditForm = () => {
    const {id} = useParams()
    const [details, setDetails] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log(response)
                if(response.data.results){
                    setDetails(response.data.results);
                }
            })
            .catch(err=>console.log(err))


    }, [])


    const changeHandler = (e)=>{
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
        
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, details)
            .then(response=>{
                console.log("response after submitting", response)
                navigate("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Submit This Form to Edit a Product</h3>
            <form onSubmit={submitHandler}>
                <div className='form-group mb-3 p-3'>
                    <label>Title:</label>
                    <input type= "text" name='title' value={details.title} onChange={changeHandler}/>
                    
                </div>
                <div className='form-group mb-3 p-3'>
                    <label >Price: $</label>
                    <input type= "number" name='price' value={details.price} onChange={changeHandler}/>
                    
                </div>
                <div className='form-group mb-3 p-3'>
                    <label >Description:</label>
                    <input type= "text" name='description' value={details.description} onChange={changeHandler}/>
                    
                </div>
                <input type="submit" value="Update" className='btn btn-success m-3'/>
            </form>
        </div>
    );
};



export default EditForm;