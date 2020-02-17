import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css'



const Cards = ()=>{

    const [pets, setPets] = useState([]);
    const [selected, setSelected] = useState([]);
    const [size, setSize] = useState("");
    const [gender, setGender] =useState("");
    const [allAnimals, setAllAnimals] = useState("All");
    let picture;

    useEffect(()=>{
         axios.get('/api/pets')
        .then(res => {
            setPets(res.data.petsData.animals)
            setSelected(res.data.petsData.animals);
        })
    }, [])

    const adultFilter = (arr) => {
        let adultPets = arr.filter(animals => animals.age === "Adult");
        // setPets(adultPets);
        setSelected(adultPets);
    }

    const youngFilter = (arr) => {
        let youngPets = arr.filter(animals => animals.age === "Young");
        // setPets(youngPets);
        setSelected(youngPets);
    }

    const allPetsFilter = (arr) => {
        setAllAnimals("All")
        setGender('')
        setSize('')
    }

    const handleAnimalGender = (gender) => {
        setAllAnimals("")
        setGender(gender)
    }
  
    const handleAnimalSize = (size) => {
        setAllAnimals("")
        setSize(size)
    }
   
    return(
        <Container>
            <button onClick={allPetsFilter}>All</button>
            <button onClick={() => adultFilter(pets)}>Adult</button>
            <button onClick={() => youngFilter(pets)}>Young</button>
            <button onClick={()=>handleAnimalGender('Male')}>Male</button>
            <button onClick={()=>handleAnimalGender('Female')}>Female</button>
            <button onClick={()=>handleAnimalSize('Small')}>Small</button>
            <button onClick={()=>handleAnimalSize('Medium')}>Medium</button>
            <button onClick={()=>handleAnimalSize('Large')}>Large</button>
            <button onClick={()=>handleAnimalSize('XLarges')}>Extra Large</button>
            <Row>
            {selected && selected.filter(animal => {
                if (allAnimals === "All") return true
                if (animal.size === size) return animal.size === size               
            })
            .filter(animal => {
                if (allAnimals === "All") return true
                if (animal.gender === gender) return animal.gender === gender
            })
         
            .map((pets, index) => {
                if (pets.photos.length>0 && pets.photos[0].full){  
                return(
                    <Card bg="dark" text="white" style={{ width: 250, height: 700, margin: 1, padding: 1 }}>
                          <Card.Header  as="h3">{pets.name}</Card.Header>
                        <Card.Img style = {{width: 220, height: 200, margin: 7, padding: 1}} src={pets.photos[0].full}/>
                        <Card.ImgOverlay></Card.ImgOverlay>

                        <Card.Body style = {{width: 200}}>
                            <Card.Title></Card.Title>
                            <Card.Subtitle as="h5">{pets.breeds.primary}</Card.Subtitle>
                            <br></br>
                            <Card.Text>{pets.description}</Card.Text>
                            <Card.Footer><small>Age: {pets.age} <br/> Size: {pets.size} <br/>  Sex: {pets.gender} </small></Card.Footer>
                        </Card.Body>
                    </Card>
                )}
            }) }
            </Row>
        </Container>    
    ) 
}

export default Cards;
