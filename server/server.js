// Import libraries
const express = require('express');
const contentful = require('contentful');
const cors = require('cors');
const { createServer } = require('@graphql-yoga/node')

// Load environment variables from .env
require('dotenv').config();

// Create app
const app = express();

//graphql 
const GraphQLServer = createServer()

// Define Constants
const port = process.env.PORT || 8000;
const accessToken = process.env.ACCESS_TOKEN;
const space_ID = process.env.SPACE_ID;

// Allow cross-origin resource sharing
app.use(cors());

// Define home route to confirm backend is working
app.get('/', (req, res) => {
  res.send('HFB Recipe System Backend')
});

// Create authenticated contentful client
const client = contentful.createClient({
  space: space_ID,
  accessToken: accessToken
});

// Define /recipes endpoint to return a list of all recipes in contentful
app.get('/recipes', (req, res) => {
  client.getEntries({ order: 'sys.createdAt' })
    // Extract fields from each contentful object
    .then(data => data.items.map(item => item.fields))
    // Extract url from photo data
    .then(recipes => recipes.map(recipe => {
      return {
        ...recipe,
        photo: recipe.photo.fields.file.url
      }
    }))
    // Convert ingredients from key/value to ingredient/quantity
    .then(recipes => recipes.map(recipe => {
      return {
        ...recipe,
        ingredientList: recipe.ingredientList.map(entry => {
          return {
            ingredient: entry.key,
            quantity: entry.value
          }
        })
      }
    }))
    // Send processed recipes to client
    .then(recipes => res.send(recipes));
});

// Run app at specified port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
