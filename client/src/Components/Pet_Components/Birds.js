import React from 'react';
import { Container } from 'react-bootstrap';
import '../../App.css';
import Cards from '../Cards';

const Birds = () => {
  return (
    <Container className="banner-container" fluid={true}>
      <nav />
      <Cards />
    </Container>
  );
};

export default Birds;
