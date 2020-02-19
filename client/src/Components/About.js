import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Carolina from '../Images/KleinCarolina-photo.jpg';
import Rene from '../Images/BreslauerRene-photo.jpg';
import Tristan from '../Images/FavardTristan-photo.jpg';
import Elias from '../Images/ZabanehElias-photo.jpg';
import PawPrints from '../Images/pawprints.svg';
import RenePets from '../Images/rene-pets.jpg';
import CarolinaPets from '../Images/carolina-pets.jpg';
import Tail1 from '../Images/tail-1.svg';
import Tail2 from '../Images/tail-2.svg';

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
      image: Carolina,
      pets: CarolinaPets
    },
    {
      name: 'Elias',
      city: 'Mexico City',
      about: 'something',
      future: 'else',
      image: Elias
    },
    {
      name: 'Rene',
      city: 'Miami',
      about:
        'Having grown up around cats, dogs, and horses, animals have always been an important part of my life. I now have three pet rabbits who destroy everything they touch, but I love them anyways',
      future:
        'I look forward to growing my coding and design skills, while making the world a more animated place.',
      image: Rene,
      pets: RenePets
    },
    {
      name: 'Tristan',
      city: 'Miami',
      about: 'I like computers, games, anime , music , manga, and movies',
      future:
        'In the future I want to be part of a team that creates the next big thing.',
      image: Tristan
    }
  ];
  return (
    <div>
      <div className="team-member-container d-flex flex-column align-items-center text-center">
        <h1 className="about-title text-center">About Us</h1>
        <img className="tail1" src={Tail1}></img>
        <div class="stage">
          <img className="box bounce-6" src={Tail2}></img>
        </div>
      </div>

      {teamMembers.map(teamMember => {
        return (
          <div className="d-flex justify-content">
            <Container className="flip-container">
              <Col>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className="team-member-image"
                        src={teamMember.image}
                      ></img>
                    </div>
                    <div className="flip-card-back">
                      <img className="pets-image" src={teamMember.pets}></img>

                      <h1 className="team-member-name">{`${teamMember.name}`}</h1>
                      <p className="team-member-bio">{`I'm from ${teamMember.city} .${teamMember.about} .${teamMember.future}!`}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default About;
