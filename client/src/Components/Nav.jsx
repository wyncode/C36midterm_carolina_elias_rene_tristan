import React from 'react';
import logo from '../Images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import Cards from "./Cards"

const MyNav = () => {
  return (
    <Navbar expand="lg">
      <Nav.Link href="home">
        <Link to ="/"><img src={logo} className="logo" alt="logo"></img> </Link>
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav.Link href="#dogs">Dogs</Nav.Link>
        <Nav.Link href="#cats">Cats</Nav.Link>
        <NavDropdown title="Small Animals" id="basic-nav-dropdown">
          <NavDropdown.Item href="#rabbits">Rabbits</NavDropdown.Item>
          <NavDropdown.Item href="#rodents">Rodents</NavDropdown.Item>
          <NavDropdown.Item href="#ferrets">Ferrets</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Other Critters" id="basic-nav-dropdown">
          <NavDropdown.Item href="#birds">Birds</NavDropdown.Item>
          <NavDropdown.Item href="#reptiles">Reptiles</NavDropdown.Item>
          <NavDropdown.Item href="#fish">Fish</NavDropdown.Item>
        </NavDropdown>

        <Nav.Item as="li">
          <Nav.Link href="/about" eventKey="link-1">
            About Us
          </Nav.Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
