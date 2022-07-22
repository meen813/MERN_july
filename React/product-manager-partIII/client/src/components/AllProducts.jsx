import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

const AllProducts = (props) => {

    let[products, setProducts] = useState([])
    let[productDeleted, setProductDeleted] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(response=>{
            setProducts(response.data.results);
        })
        .catch(err=>console.log(err))

    },[productDeleted, props.formSubmitted])

    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                setProductDeleted(!productDeleted)
                console.log(response)
                
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <h3>All Products</h3>
            {
                products.map((product)=>{
                    return(
                        <div className='card mb-3'>
                            <h2><Link to={`/products/${product._id}`}>{product.title}</Link></h2>
                            <Link to={`/products/edit/${product._id}`} className="btn btn-warning">Edit {product.title} </Link>

                            <button onClick={()=>deleteProduct(product._id)} className="btn btn-danger mt-3">Delete {product.title}</button>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllProducts;