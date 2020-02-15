import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cards = ()=>{
    const [pets, setPets] = useState([]);
    const placeholder = 'http://placekitten.com/200/300'

    useEffect(()=>{
         axios.get('/api/pets')
        .then(res => {
            setPets(res.data.petsData.animals)
        })
    }, [])
    return(
        <div>
            {pets.map( pet =>  {
                    console.log(pet)
                    return( 
                        <div key={pet.id}> 
                            {pet.name} 
                            <br />
                            <img src={pet.photos.length > 0 ? pet.photos[0].small : placeholder}/> 
                        </div>
                    )
                }
            )
            }
        </div>

    ) 
}










export default Cards;