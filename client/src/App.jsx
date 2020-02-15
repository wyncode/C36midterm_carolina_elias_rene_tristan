import axios from 'axios';
import React, {useEffect} from 'react';
import './App.css';

const App = () => {
  
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
