import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const OneProduct = () => {

    const{id} = useParams()
    const [details, setDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log(response)
            setDetails(response.data.results)
            
        })
        .catch(err=>console.log(err))

    }, [])




    return (
        <div>
            <h3>{details.title}</h3>
            <p>Price: ${details.price}</p>
            <p>Description: {details.description}</p>
        </div>
    );
};



export default OneProduct;