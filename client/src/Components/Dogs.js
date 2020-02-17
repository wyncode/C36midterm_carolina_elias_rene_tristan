import React from 'react';
import Cards from './Cards';
import Sidebar from './Sidebar';
import { Container, Col, Row } from 'react-bootstrap';
import '../App.css';

const Dogs = () => {
  return (
    <Container className="animal-page-container" fluid={true}>
      <div className="animal-page-banner">
        <h1>Dogs</h1>
      </div>

      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
};

export default Dogs;
