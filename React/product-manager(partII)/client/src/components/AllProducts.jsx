import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

const AllProducts = () => {

    let[products, setProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(response=>{
            console.log("response:", response);
            setProducts(response.data.results);
        })
        .catch(err=>console.log(err))

    },[])



    return (
        <div>
            <h3>All Products</h3>
            {
                products.map((product)=>{
                    return(
                        <div className='card mb-3'>
                            <h2><Link to={`/products/${product._id}`}>{product.title}</Link></h2>
                            {/* <p>${product.price}</p>
                            <p>{product.description}</p> */}
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProducts;