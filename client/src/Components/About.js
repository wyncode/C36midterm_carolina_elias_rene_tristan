import React from 'react';

const About = () => {

    let teamMembers = [
        {
          name: "Carolina",
          city: "Palma de Mallorca",
          about: "I adore all animals and truly enjoyed collaborating on the creation of the FurEver App",
          future: "I look forward to becoming a Software Engineer based in Miami, where I can continue to work with like-minded people ",
        },
        {
          name: "Elias",
          city: "Mexico City",
          about: "something",
          future: "else",
        },
        {
          name: "Rene",
          city: "Miami",
          about: "something",
          future: "else",
        },
        {
          name: "Tristan",
          city: "Miami",
          about: "I like computers, games, anime , music , manga, and movies",
          future: "In the future I want to be part of a team that creates the next big thing.",
        }
      ];
        const aboutUs = () => {
          teamMembers.forEach(teamMember => {
          console.log(`Hi, I'm ${teamMember.name} and I'm from ${teamMember.city} .${teamMember.about} .${teamMember.future}!`);
        });
        }
      
      aboutUs(teamMembers);    
}

export default About