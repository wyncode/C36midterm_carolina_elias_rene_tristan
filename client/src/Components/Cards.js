import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Cards = () => {
  const [pets, setPets] = useState([]);
  let picture;

  useEffect(() => {
    axios.get('/api/pets').then(res => {
      setPets(res.data.petsData.animals);
    });
  }, []);

  console.log(pets);
  return (
    <Container className="cards-container">
      <Row>
        {pets &&
          pets.map(pet => {
            picture = pet.photos.length
              ? pet.photos[0].full
              : 'https://placekitten.com/200/300';
            return (
              <Card>
                <Card.Header>{pet.name}</Card.Header>
                <Card.Img src={picture} />
                <Card.ImgOverlay></Card.ImgOverlay>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Subtitle>{pet.breeds.primary}</Card.Subtitle>
                  <br></br>
                  <Card.Text>{pet.description}</Card.Text>
                  <Card.Footer>
                    <small>
                      Age: {pet.age} <br /> Size: {pet.size} <br /> Sex:{' '}
                      {pet.gender}{' '}
                    </small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            );
          })}
      </Row>
    </Container>
  );
};

export default Cards;
