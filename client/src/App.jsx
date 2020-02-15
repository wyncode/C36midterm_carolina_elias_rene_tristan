import axios from 'axios';
import React, {useEffect} from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About'; 
import Home from './Components/Home';
import PetDetail from './Components/PetDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  
  return (
    <Router>
      <Nav />

      <Switch>
        
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
       
      </Switch>
    </Router>
  )

  useEffect ( () => {
    getApiData ();
  }, []);

  const getApiData = () => {
    axios.get(`/api/pets`)
    .then(response => {
      const data = response.data 
      console.log(data);
    })
  }

  return (
    <div id="demo">
      <h1>Hello from client/src/App.js</h1>
    </div>
  );


}



// class App extends React.Component {
//   state = { serverMessage: '' };


//   render() {
   

export default App;
