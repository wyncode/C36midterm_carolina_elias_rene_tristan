import axios from 'axios'
import React from 'react';
import './App.css';

class App extends React.Component {
  state = { serverMessage: '' };


  render() {
    return (
      <div id="demo">
        <h1>Hello from client/src/App.js</h1>
        <h1>{this.state.serverMessage}</h1>
      </div>
    );
  }
}

export default App;
