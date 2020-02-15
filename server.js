const petsData = require('./Animaldata.json');
// console.log(petsData)

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/demo', (request, response) => {
  response.json({
    message: 'Hello from server.js'
  });
});
// END DEMO

app.get('/api/pets', (request, response) => {
  response.json({
    petsData
  })
})

//

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
 
/*const APP_ID = " ...."
  const APP_KEY = "...."
  */