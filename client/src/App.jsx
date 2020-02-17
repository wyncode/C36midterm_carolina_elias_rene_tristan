import axios from 'axios';
import React, { useEffect } from 'react';
import Cards from './Components/Cards';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';
import Dogs from './Components/Dogs';
import Cats from './Components/Cats';
import Rabbits from './Components/Rabbits';
import Ferrets from './Components/Ferrets';
import Rodents from './Components/Rodents';
import Fish from './Components/Fish';
import Reptiles from './Components/Reptiles';
import Birds from './Components/Birds';
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
      <Route path="/">
          <Home />
      </Route>
        <Route path="/dogs">
          <Dogs />
        </Route>
        <Route path="/cats">
          <Cats />
        </Route>
      </Switch>
    </Router>
  );
};

// class App extends React.Component {
//   state = { serverMessage: '' };

//   render() {

export default App;
