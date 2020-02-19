if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
let accessToken = {};
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// GET THE BEARER TOKEN

bearerToken = async () => {
  if (
    accessToken.token !== undefined &&
    new Date() - accessToken.created_at < accessToken.ttl
  ) {
    return accessToken.token;
  }
  console.log('Fetching new Token');
  await axios({
      method: 'POST',
      url: 'https://api.petfinder.com/v2/oauth2/token',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        grant_type: 'client_credentials',
        client_id: 'JRy179sFUbAP04MxiXwjkiu4tnR5s6QLIn31rIKBSZ7W2AD8g2',
        client_secret: 'tB40mHNvRHS7WarYuFfAIBkO3RZjZfhIXpihTKze'
      }
    })
    .then(response => response.data)
    .then(data => {
      accessToken.token = data.access_token;
      accessToken.ttl = data.expires_in * 1000; // Convert seconds to ms
      accessToken.created_at = new Date();
    })
    .catch(e => console.log(e));
  console.log('new Token ' + accessToken.token);
  return accessToken.token;
};

app.get('/api/animals', async (request, response) => {
  // console.log('hit');
  const token = await bearerToken();

  try {
    const {
      data
    } = await axios.get(
      'https://api.petfinder.com/v2/animals?limit=100', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: request.query
      }
    );
    // console.log(data.animals)
    let animals = data.animals.map(animal => {
      return {
        id: animal.id,
        breed: animal.breeds.primary,
        age: animal.age,
        gender: animal.gender,
        size: animal.size,
        spayed_neutered: animal.attributes.spayed_neutered,
        house_trained: animal.attributes.house_trained,
        name: animal.name,
        email: animal.contact.email,
        phone: animal.contact.phone,
        street_address: animal.contact.address.address1,
        city: animal.contact.address.city,
        state: animal.contact.address.state,
        zip_code: animal.contact.address.zip_code,
        photo: animal.photos && animal.photos[0]
      };
    });
    response.send(animals);
  } catch (e) {
    console.log(e);
    response.status(500);
  }
});

app.get('/api/pets/:id', async (req, res) => {
  const token = await bearerToken();
  const {
    data
  } = await axios.get(
    `https://api.petfinder.com/v2/animals/${req.params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  let animal = {
    id: data.animal.id,
    type: data.animal.type,
    name: data.animal.name,
    breeds: data.animal.breeds,
    colors: data.animal.colors,
    age: data.animal.age,
    size: data.animal.size,
    gender: data.animal.gender,
    coat: data.animal.coat,
    description: data.animal.description,
    organization_id: data.animal.organization_id,
    status: data.animal.status,
    contact: data.animal.contact,
    published_at: data.animal.published_at,
    image: data.animal.photos
  };
  res.send(animal);
  console.log(animal)
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});