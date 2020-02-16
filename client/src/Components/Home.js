import React from 'react';
import '../App.css';
import Carousel from './Carousel';
import HomeBanner from './HomeBanner';
import { Container } from 'react-bootstrap';
import '../App.css';

const Home = () => {
  // render() {
  return (
    <Container className="banner-container" fluid={true}>
      <HomeBanner />
      <div id="carousel-div">
        <Carousel />
      </div>
    </Container>
  );
};

export default Home;
