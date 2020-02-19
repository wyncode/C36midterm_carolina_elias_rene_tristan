import React from 'react';
import logo from '../Images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-rouyter-dom';

const MyNav = () => {
  return (
    <Navbar expand="lg">
      <Nav.Item href="home">
        <Link to="/">
          <img src={logo} className="logo" alt="logo"></img>{' '}
        </Link>
      </Nav.Item>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>

        <Nav.Item>
          <Link className="nav-link" to="/dogs">
            Dogs
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link className="nav-link" to="/cats">
            Cats
          </Link>
        </Nav.Item>

        <NavDropdown title="Small Animals" id="basic-nav-dropdown">
          <Nav.Item>
            <NavDropdown.Item>
              <Link className="nav-link" to="/rabbits">
                Rabbits
              </Link>
            </NavDropdown.Item>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown.Item>
              <Link className="nav-link" to="/rodents">
                Rodents
              </Link>
            </NavDropdown.Item>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown.Item>
              <Link className="nav-link" to="/ferrets">
                Ferrets
              </Link>
            </NavDropdown.Item>
          </Nav.Item>
        </NavDropdown>

        <NavDropdown title="Other Critters" id="basic-nav-dropdown">
          <Nav.Item>
            <NavDropdown.Item>
              <Link className="nav-link" to="/birds">
                Birds
              </Link>
            </NavDropdown.Item>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown.Item>
              <Link className="nav-link" to="/reptiles">
                Reptiles
              </Link>
            </NavDropdown.Item>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown.Item>
              <Link className="nav-link" to="/fish">
                fish
              </Link>
            </NavDropdown.Item>
          </Nav.Item>
        </NavDropdown>

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
