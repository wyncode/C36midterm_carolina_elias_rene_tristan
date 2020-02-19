import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cards from './Cards';


const AnimalList = () => {
    const [pets, setPets] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        axios.get(`/api/pets/${type}`)
        .then(res => setPets(res.data))
    }, [type]) // refetching everytime type changes in the url

    return <Cards pets={pets} />
}

export default AnimalList;