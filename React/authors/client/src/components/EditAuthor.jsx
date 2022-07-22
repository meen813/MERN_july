import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {
    Link
  } from "react-router-dom";



const EditAuthor = () => {

    const {id} = useParams()
    const [details, setDetails] = useState({})
    const navigate = useNavigate();


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
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
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, details)
            .then(response=>{
                console.log("response after submitting", response)
                navigate("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h3>Edit this author </h3>
            <form onSubmit={submitHandler} >
                <div className='form-gorup'>
                    <label>Name:</label>
                    <input type="text" name='name' className='form-control' value={details.name} onChange={changeHandler}/>
                </div>
                <input type="submit" value="Update" className='btn btn-success m-3'/>
                <Link to={'/'} className='btn btn-success m-3'>Cancel</Link>
            </form>
        </div>
    );
};



export default EditAuthor;