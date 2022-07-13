import React, {useState} from "react";


const FetchPoke = ()=>{
    
    //create state variable array to store the api results in
    let [pokemons, setPokemons] = useState([]);


    const getData = () =>{

    fetch ("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then (response=>{
            return response.json() // so that we can parse the response as json (a format the computer can understand)
        })
        .then(response=>{
        console.log("got back response from api is->", response);
        setPokemons(response.results); //save the pokemon info from the api info our state variable so that we can loop through this variable using .map() in the jsx area.

        })
        .catch(err=>{
            console.log("something went wrong fetching from the api->", err)
        })

    //this is like the task we will do while waiting for the dog to fetch us the ball (the api to return back our data we want)
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
                            {/* <p>url: ${pokeObj.url}</p> */}
                        </div>
                    )
                })
            }
        </div>
    )

} 

export default FetchPoke;