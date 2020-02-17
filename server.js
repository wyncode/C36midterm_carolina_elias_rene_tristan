const axios = require("axios");
let accessToken = {};

// const petsData = require('./pull.js');
// // console.log(petsData)

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
bearerToken = async () => {
  if (
    accessToken.token !== undefined &&
    new Date() - accessToken.created_at < accessToken.ttl
  ) {
    return accessToken.token;
  }
  console.log("Fetching new Token");
  await axios({
      method: "POST",
      url: "https://api.petfinder.com/v2/oauth2/token",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        grant_type: "client_credentials",
        client_id: "JRy179sFUbAP04MxiXwjkiu4tnR5s6QLIn31rIKBSZ7W2AD8g2",
        client_secret: "tB40mHNvRHS7WarYuFfAIBkO3RZjZfhIXpihTKze"
      }
    })
    .then(response => response.data)
    .then(data => {
      accessToken.token = data.access_token;
      accessToken.ttl = data.expires_in * 1000; // Convert seconds to ms
      accessToken.created_at = new Date();
    })
    .then(data => {
      const token = accessToken.token;
      var https = require("follow-redirects").https;


      var options = {
        method: "GET",
        hostname: "api.petfinder.com",
        path: "/v2/animals",
        headers: {
          Authorization: `Bearer ${token}`
        },
        maxRedirects: 20
      };

      var req = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
        res.on("error", function (error) {
          console.error(error);
        });
      });

      req.end();
    })
    .catch(e => console.log(e));
  return accessToken.token;
};
bearerToken()
authStr = bearerToken()
console.log(authStr)
// urL="https://api.petfinder.com/v2/animals"
axios.get("https://api.petfinder.com/v2/animals", { 'headers': { 'Authorization': authStr } })
  .then((response => {
    console.log(response.data);
 
  }))


// END DEMO

app.get('/api/pets', (request, response) => {
  response.json({
    petData
  })
  console.log(petData)
});

//

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});

/*const APP_ID = " ...."
  const APP_KEY = "...."
  */