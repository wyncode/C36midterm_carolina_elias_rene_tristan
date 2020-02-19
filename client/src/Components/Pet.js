import React from 'react';
import Card from 'react-bootstrap/Card';

const Pet = ({ pet }) => (
    <Card key={pet.id}>
        <Card.Header>{pet.name}</Card.Header>
        <Card.Img src={pet.image[0].full} />
        <Card.ImgOverlay></Card.ImgOverlay>

        <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle>{pet.breed}</Card.Subtitle>
        <br></br>
        <Card.Footer>
            Age: {pet.age} <br /> Size: {pet.size} <br /> Sex:{' '}
            {pet.gender}{' '}
        </Card.Footer>
        </Card.Body>
    </Card>
)


export default Pet;
