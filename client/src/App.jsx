import axios from 'axios';
import React, { useEffect } from 'react';
import Cards from './Components/Cards';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';
import Dogs from './Components/Pet_Components/Dogs';
import Cats from './Components/Pet_Components/Cats';
import Rabbits from './Components/Pet_Components/Rabbits';
import Ferrets from './Components/Pet_Components/Ferrets';
import Rodents from './Components/Pet_Components/Rodents';
import Fish from './Components/Pet_Components/Fish';
import Reptiles from './Components/Pet_Components/Reptiles';
import Birds from './Components/Pet_Components/Birds';
import PetDetail from './Components/PetDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    getApiData();
  }, []);

const getApiData = () => {
  axios.get(`/api/pets`).then(response => {
    const data = response.data;
      // console.log(data);
    });
  };
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/dogs">
          <Dogs />
        </Route>
        <Route path="/cats">
          <Cats />
        </Route>
        <Route path="/rabbits">
          <Rabbits />
        </Route>
        <Route path="/rodents">
          <Rodents />
        </Route>
        <Route path="/ferrets">
          <Ferrets />
        </Route>
        <Route path="/birds">
          <Birds />
        </Route>
        <Route path="/reptiles">
          <Reptiles />
        </Route>
        <Route path="/fish">
          <Fish />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/petdetail">
          <PetDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/adoptme">
          <Cards />
        </Route>   
      </Switch>
    </Router>
  );
};

// class App extends React.Component {
//   state = { serverMessage: '' };

//   render() {

export default App;
