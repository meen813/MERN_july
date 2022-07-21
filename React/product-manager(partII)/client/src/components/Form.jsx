import axios from 'axios';
import React,{useState} from 'react';


const Form = () => {
    let [formInfo, setFormInfo] = useState({})
    let [formError, setFormErrors] = useState({})


    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
        [e.target.name]: e.target.value
        })
        
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", formInfo)
            .then(response=>{
                console.log("response after submitting", response)
                if(response.data.errors){
                    setFormErrors(response.data.errors);
                }
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-group mb-3 p-3'>
                    <label >Title:</label>
                    <input type= "text" name='title' onChange={changeHandler}/>
                    <p className='text-danger'>{formError.title?.message}</p>
                </div>
                <div className='form-group mb-3 p-3'>
                    <label >Price: $</label>
                    <input type= "number" name='price' onChange={changeHandler}/>
                    <p className='text-danger'>{formError.price?.message}</p>
                </div>
                <div className='form-group mb-3 p-3'>
                    <label >Description:</label>
                    <input type= "text" name='description' onChange={changeHandler}/>
                    <p className='text-danger'>{formError.description?.message}</p>
                </div>
                <input type="submit" value="Create" className='btn btn-success m-3'/>
            </form>
        </div>
    );
};



export default Form;