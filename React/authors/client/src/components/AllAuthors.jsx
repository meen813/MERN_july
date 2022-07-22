import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";


const AllAuthors = (props) => {

    let [authors, setAuthors] = useState([])
    let [authorDeleted, setAuthorDeleted] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((response)=>{
            setAuthors(response.data.results);
        })
        .catch(err=>console.log(err))
        
    },[authorDeleted, props.formSubmitted])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(response=>{
            setAuthorDeleted(!authorDeleted)
            console.log(response)

        })
        .catch(err=>console.log(err))
    }    



    return (
        <div >
            <p><Link to="/new"> Add an author</Link></p>
            <h3>We have quotes by:</h3> 
            {
                authors.map((author)=>{
                    return(
                        <div key={author._id} className='card mb-3 p-3'>
                            <p>{author.name}</p>
                            
                            <Link to={`/edit/${author._id}`} className='btn btn-warning mt-3'>Edit {author.name}</Link>

                            <button onClick={()=>deleteAuthor(author._id)} className='btn btn-danger mt-3'>Delete {author.name}</button>
                        </div>
                    )
                })
            }

        </div>
    );
};



export default AllAuthors;