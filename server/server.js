const express = require('express');
const contentful = require("contentful");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000
const accessToken = process.env.ACCESS_TOKEN 
const space_ID = process.env.SPACE_ID

app.get('/', (req, res) => {
  res.send('HFB Recipe System Backend')
});

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: space_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: accessToken
});

app.get('/recipes', (req, res) => {
  client.getEntries({order: 'sys.createdAt'})
    // for each item in entries.item, send item.field
    .then(data => data.items.map(item => item.fields))
    // send result
    .then(recipes => recipes.map(recipe => { 
      return {
        ...recipe,
        photo: recipe.photo.fields.file.url
      }
    }))
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
    .then(recipes => res.send(recipes));
    // // Get image urls
    // .then(recipes => {
    //   // Image url at photo -> fields -> url
    //   return recipes
    // }).then(data => res.send(data));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})