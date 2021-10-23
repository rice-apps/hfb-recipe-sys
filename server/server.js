const express = require('express');
const contentful = require("contentful");
// Import the library:
var cors = require('cors');


// Then use it before your routes are set up:


require('dotenv').config();

const app = express();

app.use(cors());
const port = process.env.PORT || 8000
const accessToken = process.env.ACCESS_TOKEN 
const spaceID = process.env.SPACE_ID

app.get('/', (req, res) => {
  res.send('HFB Recipe System Backend')
});

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: spaceID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: accessToken
});

app.get('/recipes', (req, res) => {
  client.getEntries({
    order: 'sys.createdAt'
  })
  .then(function(entries) {  
    // for each item in entries.item, send item.field
      res.send(entries.items.map(item => item.fields));
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})