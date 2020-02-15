import axios from 'axios';
import React, {useEffect} from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About'; 
import Home from './Components/Home';
import PetDetail from './Components/PetDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {

  useEffect ( () => {
    getApiData ();
  }, []);

  const getApiData = () => {
    axios.get(`/api/pets`)
    .then(response => {
      const data = response.data 
      // console.log(data);
    })
  }
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
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

  




}



// class App extends React.Component {
//   state = { serverMessage: '' };


//   render() {
   

export default App;
