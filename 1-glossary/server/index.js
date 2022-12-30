require("dotenv").config();
const { getGlossary, editItem, deleteItem, saveItem, search } = require('./db.js');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist/'));
app.use(express.json());

app.post('/delete', function(req, res) {
  deleteItem(req.body.id)
  .then(newGlossary => {
    res.status(200).send(newGlossary);
  })
  .catch(error => {
    res.status(500).send('Database error deleting item');
  })
});

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

app.post('/savenew', function(req, res) {
  saveItem(req.body.newWord, req.body.newDef)
  .then(newGlossary => {
    res.status(200).send(newGlossary);
  })
  .catch(error => {
    res.status(500).send('Database error saving new item');
  })
});

app.post('/search', function(req, res) {
  search(req.body.term)
  .then(searchResults => {
    res.status(200).send(searchResults);
  })
  .catch(error => {
    res.status(500).send('Database error saving new item');
  })
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
