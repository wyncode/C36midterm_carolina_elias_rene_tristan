import React from 'react';
import Cards from './Cards';
import { Container } from 'react-bootstrap';

const Rabbits = () => {
  return (
    <Container className="banner-container" fluid={true}>
      <nav />
      <Cards />
    </Container>
  );
};
export default Rabbits;
