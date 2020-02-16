import React, { useEffect, useState } from 'react';
import axios from 'axios';


// class Pets extends React.Component {
//     constructor(name, age, size, sex, breed) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//         this.sex = sex;
//         this.breed = breed;
//     }
export const Pets = () => {
    const [pets, setPets] = useState([]); 

    useEffect(() => {
        axios.get('/api/pets')
        .then(res => {
           console.log(res.data.petData.animals.type);
            
        })
        // pets()

    })
}


