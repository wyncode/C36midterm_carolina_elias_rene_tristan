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
        <Link to ="/"><img src={logo} className="logo" alt="logo"></img> </Link>
      </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>

      <Nav.Link>
         <Link className="nav-link" to="/pets/dog">Dogs</Link> 
      </Nav.Link>   

      <Nav.Link>
         <Link className="nav-link" to="/pets/cat">Cats</Link>
      </Nav.Link>

       <NavDropdown title="Small Animals"  id="basic-nav-dropdown">
         <Nav.Link>
           <NavDropdown.Item>
             <Link className="nav-link" to="/pets/rabbit">Rabbits</Link>
           </NavDropdown.Item>
         </Nav.Link>
         <Nav.Link>
             <NavDropdown.Item>
               <Link className="nav-link" to="/pets/rodent">Rodents</Link>
            </NavDropdown.Item>
           </Nav.Link>
           <Nav.Link>
           <NavDropdown.Item>
             <Link className="nav-link" to="/pets/ferret">Ferrets</Link>
            </NavDropdown.Item>
           </Nav.Link>
        </NavDropdown>

        <NavDropdown title="Other Critters" id="basic-nav-dropdown">
        <Nav.Link>
           <NavDropdown.Item>
             <Link className="nav-link" to="/pets/bird">Birds</Link>
            </NavDropdown.Item>
           </Nav.Link>
           <Nav.Link>
           <NavDropdown.Item>
             <Link className="nav-link" to="/pets/reptile">Reptiles</Link>
            </NavDropdown.Item>
           </Nav.Link>
           <Nav.Link>
           <NavDropdown.Item>
             <Link className="nav-link" to="/pets/fish">fish</Link>
            </NavDropdown.Item>
           </Nav.Link>
        </NavDropdown>
  

        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">
            <Link className="nav-link" to="/about">About Us</Link>
          </Nav.Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
