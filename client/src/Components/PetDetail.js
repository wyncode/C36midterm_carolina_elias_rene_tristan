import React, { useEffect, useState, Fragment } from "react";
import {useParams} from "react-router";
import axios from 'axios';

const petId = () => {
    const [petId, setPetId] = useState({});

    let {id} = useParams();

    useEffect( () => {
        const getData = async () => {
            const result = await axios.get(
                `:${id}`
        );
        consol.log(getData())
        setApiData(result.animals.id[0]);
        }
        getData();
        }, [id]);

return (
        <Card key={pet.id} bg="dark" text="white" style={{ width: 250, height: 430, margin: 1, padding: 1 }}>
            <Card.Header  as="h3">{pet.name}</Card.Header>
            <Card.Img style = {{width: 220, height: 200, margin: 7, padding: 1}} src={pet.photo.full}/>
            <Card.ImgOverlay></Card.ImgOverlay>

            <Card.Body style = {{width: 200}}>
            <Card.Subtitle as="h5">{pet.breed}</Card.Subtitle>
            <br></br>
            <Card.Footer><small>Age: {pet.age} <br/> Size: {pet.size} <br/>  Sex: {pet.gender} </small></Card.Footer>
            </Card.Body>
        </Card> 
)

export default petId; 

