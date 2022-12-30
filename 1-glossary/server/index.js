require("dotenv").config();
const { getGlossary, editItem, deleteItem } = require('./db.js');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist/'));
app.use(express.json());

app.get('/glossary', function(req, res) {
  getGlossary()
  .then(glossary => {
    res.send(glossary);
  })
  .catch(error => {
    res.status(500).send('Database error getting glossary');
  })
});

app.post('/save', function(req, res) {
  editItem(req.body.id, req.body.newWord, req.body.newDef)
  .then(newGlossary => {
    res.status(200).send(newGlossary);
  })
  .catch(error => {
    res.status(500).send('Database error saving item');
  })
});

app.post('/delete', function(req, res) {
  deleteItem(req.body.id)
  .then(newGlossary => {
    res.status(200).send(newGlossary);
  })
  .catch(error => {
    res.status(500).send('Database error deleting item');
  })
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
