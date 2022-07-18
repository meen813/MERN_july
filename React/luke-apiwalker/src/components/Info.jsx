import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router";

const Info = () =>{
    //every time a state variable updates, the component re-renders
    //every time the component re-renders, all the code in the components re-runs-> EXCEPT the code inside the useEffect, which only runs on the first render of the component or when told through the dependency array
    const{category, id} = useParams(); //information from the route parameter
    console.log("id is this", id)
    let [details, setDetails] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            console.log("response is this->",response)
            setDetails(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])


    
    return(
        <div>
            {
            category == "people"?
            <>
            <h1>{details.name}</h1>
            <p>Height: {details.height}cm</p>
            <p>Mass: {details.mass}kg</p>
            <p>Hair color:{details.hair_color}</p>
            <p>Skin color:{details.skin_color}</p>
            {/* <p>Home World:{"url"}</p> */}

            </> : category == "planets"?

            
            <>
            <h1>{details.name}</h1>
            <p>Diameter: {details.diameter}</p>
            <p>Climate: {details.climate}</p>
            <p>Terrain:{details.terrain}</p>
            <p>Population:{details.population}</p>
            </> : category == "films"?
    
            <>
            <h1>{details.title}</h1>
            <p> Episode: {details.episode_id}</p>
            <p>Opening{details.opening_crwal}</p>
            <p>Director: {details.director}</p>
            <p>Producer: {details.producer}</p>
            <p>release_date: {details.release_date}</p>
            </> : category == "species"?

            <>
            <h1>{details.name}</h1>
            <p> Classification: {details.classification}</p>
            <p>designation: {details.designation}</p>
            <p>average height: {details.average_height}</p>
            <p>skin colors: {details.skin_colors}</p>
            <p>hair_colors: {details.hair_colors}</p>
            <p>eye_colors: {details.eye_colors}</p>
            <p>average_lifespan: {details.average_lifespan}</p>
            <p>language: {details.language}</p>
            </> : category == "vihecles"?
            
            <>
            <h1>{details.name}</h1>
            <p> model: {details.model}</p>
            <p>manufacturer: {details.manufacturer}</p>
            <p>cost_in_credits: {details.cost_in_credits}</p>
            <p>length: {details.length}</p>
            <p>max_atmosphering_speed: {details.max_atmosphering_speed}</p>
            <p>crew: {details.crew}</p>
            <p>passengers: {details.passengers}</p>
            <p>cargo_capacity: {details.cargo_capacity}</p>
            <p>consumables: {details.consumables}</p>
            <p>vehicle_class: {details.vehicle_class}</p>
            </> : category == "starships"?
            
            <>
            <h1>{details.name}</h1>
            <p> model:  {details.model}</p>
            <p>manufacturer: {details.manufacturer}</p>
            <p>cost_in_credits: {details.cost_in_credits}</p>
            <p>length: {details.length}</p>
            <p>max_atmosphering_speed: {details.max_atmosphering_speed}</p>
            <p>crew: {details.crew}</p>
            <p>passengers: {details.passengers}</p>
            <p>cargo_capacity: {details.cargo_capacity}</p>
            <p>consumables: {details.consumables}</p>
            <p>hyperdrive_rating: {details.hyperdrive_rating}</p>
            <p>MGLT: {details.MGLT}</p>
            <p>starship_class: {details.starship_class}</p>

            </>: null
            }
        </div>
    )
}


export default Info;