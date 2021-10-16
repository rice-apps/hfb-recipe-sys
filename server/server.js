const express = require('express');
const contentful = require("contentful");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000
const accessToken = process.env.ACCESS_TOKEN 
const spaceID = process.env.SPACE

app.get('/', (req, res) => {
  res.send('HFB Recipe System Backend')
});

// console.log(process.env)

// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: "developer_bookshelf",
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: "0b7f6x59a0"
// });
// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
//   .getEntry("5PeGS2SoZGSa4GuiQsigQu")
//   .then(entry => console.log(entry))
//   .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})