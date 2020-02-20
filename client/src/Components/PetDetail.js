import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { CardColumns } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const PetDetail = () => {
  const [petData, setPetData] = useState({});
  let { petId } = useParams();
  useEffect(() => {
    const getData = async () => {
      const result = await Axios.get(`/api/pet/${petId}`);
      // .then(response => {
      //   console.log(response)
      // })
      console.log(result);
      const { id } = result.data;
      setPetData(result.data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>{petData.name && petData.name}</h1>
      <Container>
        <Row>
          <Col md="auto">
            <Carousel>
              {petData.image &&
                petData.image.map(image => {
                  return (
                    <Carousel.Item style={{ width: '18rem' }}>
                      <Card.Img
                        variant="top"
                        src={image.full}
                        alt={image.full}
                      />
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </Col>
          <Col md="auto">
            <Card>
              <Card.Body>
                Breed: {petData.breeds && petData.breeds.primary} <br />
                Age: {petData.age && petData.age} <br />
                Size: {petData.size && petData.size} <br /> <br /> <br />
                Contact <br />
                Email: {petData.contact && petData.contact.email} <br />
                Phone: {petData.contact && petData.contact.phone} <br />
                Address: {petData.contact &&
                  petData.contact.address.address1}{' '}
                <br />
                {petData.contact && petData.contact.address.address2} <br />
                City: {petData.contact && petData.contact.address.city} <br />
                State: {petData.contact && petData.contact.address.state} <br />
                Zipcode: {petData.contact &&
                  petData.contact.address.postcode}{' '}
                <br />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PetDetail;
