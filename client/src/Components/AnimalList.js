import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cards from './Cards';


const AnimalList = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(false)
    const { type } = useParams();

    useEffect(() => {
        setLoading(true)
        axios.get(`/api/pets/${type}`)
        .then(res =>{
            setPets(res.data)
            setLoading(false)
        }) 
    }, [type]) // refetching everytime type changes in the url

    return(
        <div>
        {
            loading ? <h1>Loading...</h1> : <Cards pets={pets}/>
        }
        </div>
    ) 
}

export default AnimalList;