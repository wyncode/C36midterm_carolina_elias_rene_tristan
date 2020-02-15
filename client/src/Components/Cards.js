import React, { useEffect } from 'react';

const Cards = ()=>{

    useEffect(()=>{


    
        const result = axios.get('/api/pets')
        const data = result.json()
        console.log(data.animals);


    })
    <div>



    </div>
    
}










export default Cards;