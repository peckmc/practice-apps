require("dotenv").config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');
// 2. Set up any schema and models needed by the app
const wordSchema = new mongoose.Schema({
  word: String,
  definition: String
  }, { collection: 'glossary'});

const Word = mongoose.model('Word', wordSchema);

module.exports.getGlossary = () => {
  return glossaryPromise = new Promise(function (resolve, reject) {
    return Word.find({})
    .then(words => {
      resolve(words);
    })
    .catch(err => {
      reject(err);
    })
  });
}
// 3. Export the models
// 4. Import the models into any modules that need them
