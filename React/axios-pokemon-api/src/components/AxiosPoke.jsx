import React, {useState} from "react";
import axios from 'axios';


const AxiosPoke = ()=>{
    
    //create state variable array to store the api results in
    let [pokemons, setPokemons] = useState([]);


    const getData = () =>{

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response=>{
        console.log("got back response from api is->", response);
        setPokemons(response.data.results); 

        })
        .catch(err=>{
            console.log("something went wrong fetching from the api->", err)
        })


    console.log("I am wating")

    }
    





    return(
        <div>
            <button onClick={getData}>Fetch Pokemon</button>
            {
                pokemons.map((pokeObj, idx)=>{
                    return(
                        <div>
                            <li>{pokeObj.name}</li>
                        </div>
                    )
                })
            }
        </div>
    )

} 

export default AxiosPoke;