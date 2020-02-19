import React from 'react';
import logo from '../Images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
<Navbar expand="lg">
      <Nav.Link href="home">
        <Link to="/">
          <img src={logo} className="logo" alt="logo"></img>{' '}
        </Link>
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav.Link>
          <Link className="nav-link" to="/pets/dog">
            Dogs
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link className="nav-link" to="/pets/cat">
            Cats
          </Link>
        </Nav.Link>
          <Nav.Link>
              <Link className="nav-link" to="/pets/rabbit">
                Rabbits
              </Link>
          </Nav.Link>
          <Nav.Link>
              <Link className="nav-link" to="/pets/bird">
                Birds
              </Link>
          </Nav.Link>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
