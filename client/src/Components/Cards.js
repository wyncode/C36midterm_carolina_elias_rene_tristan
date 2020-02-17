import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css'



const Cards = ()=>{

    const [pets, setPets] = useState([]);
    const [youngPets, setYoungPets] = useState([]);
    const [adultPets, setAdultPets] = useState([]);
    const [selected, setSelected] = useState([]);
    let picture;

    useEffect(()=>{
         axios.get('/api/pets')
        .then(res => {
            setPets(res.data.petsData.animals)
            setSelected(res.data.petsData.animals);
        })
    }, pets)

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
        // let youngPets = arr.filter(animals => animals.age === "Young");
        // setPets(youngPets);
        setSelected(pets);
    }
    const maleFilter = (arr) => {
        let malePets = arr.filter(animals => animals.gender === "Male");
        setSelected(malePets);
    }
    const femaleFilter = (arr) => {
        let femalePets = arr.filter(animals => animals.gender === "Female");
        setSelected(femalePets);
    }
    const smallFilter = (arr) => {
        let smallPets = arr.filter(animals => animals.size === "Small");
        setSelected(smallPets);
    }
    const mediumFilter = (arr) => {
        let mediumPets = arr.filter(animals => animals.size === "Medium");
        setSelected(mediumPets);
    }
    const largeFilter = (arr) => {
        let largePets = arr.filter(animals => animals.size === "Large");
        setSelected(largePets);
    }
    const xlargeFilter = (arr) => {
        let xlargePets = arr.filter(animals => animals.size === "Xlarge");
        setSelected(xlargePets);
    }

    
    return(
        <Container>
            <button onClick={() => allPetsFilter(pets)}>All</button>
            <button onClick={() => adultFilter(pets)}>Adult</button>
            <button onClick={() => youngFilter(pets)}>Young</button>
            <button onClick={() => maleFilter(pets)}>Male</button>
            <button onClick={() => femaleFilter(pets)}>Female</button>
            <button onClick={() => smallFilter(pets)}>Small</button>
            <button onClick={() => mediumFilter(pets)}>Medium</button>
            <button onClick={() => largeFilter(pets)}>Large</button>
            <button onClick={() => xlargeFilter(pets)}>Extra Large</button>
            <Row>
            {selected && selected.map((pets, index) => {
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
