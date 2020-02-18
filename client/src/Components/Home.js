import React from 'react';
import '../App.css';
import Animation from '../Animation/animation';
import Carousel from './Carousel';
import HomeBanner from './HomeBanner';
import { Container, Nav } from 'react-bootstrap';
import '../App.css';
import '/Pets.js';

const Home = () => {
  // render() {
  return (
    <Container className="banner-container" fluid={true}>
      <Animation />
      <HomeBanner />
      <div id="carousel-div">
        <Carousel />
      </div>
    </Container>
  );
};

export default Home;
