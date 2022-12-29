require("dotenv").config();
const { getGlossary, editItem, deleteItem } = require('./db.js');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist/'));

app.get('/glossary', function(req, res) {
  getGlossary()
  .then(glossary => {
    res.send(glossary);
  })
  .catch(error => {
    res.status(500).send('Database error!');
  })
});

app.post('/edit', function(req, res) {
  editItem()
});

app.post('/delete', function(req, res) {

});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
