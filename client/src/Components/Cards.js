import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  Container,
  Col,
  Row,
  ToggleButtonGroup,
  ToggleButton,
  ButtonToolbar,
  ButtonGroup
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const filterOptions = [
  { label: 'All', reset: true },
  { value: 'Young', type: 'age' },
  { value: 'Adult', type: 'age' },
  { value: 'Senior', type: 'age' },
  { value: 'Male', type: 'gender' },
  { value: 'Female', type: 'gender' },
  { value: 'Small', type: 'size' },
  { value: 'Medium', type: 'size' },
  { value: 'Large', type: 'size' },
  { value: 'Xlarges', label: 'Extra Large', type: 'size' }
];

const Cards = () => {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    axios.get('/api/animals').then(res => setPets(res.data));
  }, []);

  console.log('what', pets);

  const updateFilters = ({ filterType, filterValue, reset }) =>
    setFilters(
      reset
        ? {} // if reset is true empty the object
        : { ...filters, [filterType]: filterValue } // if it's not true maintain the rest of the properties and append/update the new ones
    );

  const checkFilters = (filterKeys, pet) =>
    filterKeys.every(key => {
      // we loop our filterd keys, and we compared the value of those filters with the values of each pet
      const filterValue = filters[key];
      return pet[key] === filterValue;
    });

  return (
    // the return is what gets rendured
    <Container className="cards-container">
      <div>
        <Row className="button-bar">
          {filterOptions.map(({ value, label, type, reset }) => (
            <ButtonGroup toggle>
              <ToggleButton
                type="radio"
                name="radio"
                defaultChecked
                value="1"
                value
                onClick={() =>
                  updateFilters({ filterType: type, filterValue: value, reset })
                }
              >
                {label || value}
              </ToggleButton>
            </ButtonGroup>
          ))}{' '}
        </Row>
        {/* This filter options.map just maps through our options/filters /*/}
        <Row>
          {pets &&
            pets.reduce((acc, pet) => {
              // the accumulator is a value that gets carried over after each accumulator
              const filterKeys = Object.keys(filters); //array of strings for each key in the object
              const hasFilters = !!filterKeys.length; //the !! are optional to further visualize that it's a falsy statement.

              if (!pet.photo) return acc; //if it doesn't have photos, skip this pet and return acc value
              if (hasFilters) {
                const isValid = checkFilters(filterKeys, pet);
                if (!isValid) return acc; //if the filters aren't "valid", we skip the pet again by returning the accumulator, which is no pet, because we have set it to an empty array
              }

              acc.push(
                //so if it has fotos, and filters, push the pet "post" into the accumulator
                <Card key={pet.id}>
                  <Card.Header>{pet.name}</Card.Header>
                  <Card.Img src={pet.photo.full} />
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
              );
              return acc;
            }, [])}{' '}
          {/* this empty braket (empty array) represents the innitial accumulator value*/}
        </Row>
      </div>
    </Container>
  );
};

export default Cards;
