import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Carolina from '../Images/KleinCarolina-photo.jpg';
import Rene from '../Images/BreslauerRene-photo.jpg';

const About = () => {
  console.log(Carolina);

  let teamMembers = [
    {
      name: 'Carolina',
      city: 'Palma de Mallorca',
      about:
        'I adore all animals and truly enjoyed collaborating on the creation of the FurEver App',
      future:
        'I look forward to becoming a Software Engineer based in Miami, where I can continue to work with like-minded people',
      image: Carolina
    },
    {
      name: 'Elias',
      city: 'Mexico City',
      about: 'something',
      future: 'else'
    },
    {
      name: 'Rene',
      city: 'Miami',
      about:
        'Having grown up around cats, dogs, and horses, animals and animal welfare has always been an important part of my life. I now have three pet rabbits who destroy everything they touch, but I love them anyways',
      future:
        'I look forward to growing my coding and design skills, while making the world a more animated place.',
      image: Rene
    },
    {
      name: 'Tristan',
      city: 'Miami',
      about: 'I like computers, games, anime , music , manga, and movies',
      future:
        'In the future I want to be part of a team that creates the next big thing.'
    }
  ];
  return (
    <div className="team-member-container">
      {teamMembers.map(teamMember => {
        return (
          <Container>
            <Col>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="image-cropper" src={teamMember.image}></img>
                  </div>
                  <div className="flip-card-back">
                    <h1>{`${teamMember.name}`}</h1>
                    <p>{`I'm from ${teamMember.city} .${teamMember.about} .${teamMember.future}!`}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Container>
        );
      })}
    </div>
  );
};

export default About;
