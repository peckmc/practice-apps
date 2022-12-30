import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const NewWordForm = (props) => {
  const [word, setWord] = useState('');
  const [def, setDef] = useState('');

  function handleWChange (e) {
    setWord(e.target.value);
  }

  function handleDChange (e) {
    setDef(e.target.value);
  }

  function handleSave () {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/savenew',
      contentType: 'application/json',
      data: JSON.stringify({
        "newWord": word,
        "newDef": def
      }),
      success: function(data) {
        props.setGlossary(data);
        document.getElementById('submitform').reset();
      }
    });
  }

  return (
    <div>
      <h2>Add a word:</h2>
      <form id='submitform'>
        <input type='text' onChange={handleWChange} placeholder='Word'></input>
        <input type='text' onChange={handleDChange} placeholder='Definition'></input>
        <h1></h1>
        <input type='button' id='submitword' value='Submit' onClick={handleSave}></input>
      </form>
    </div>
  );
};

export default NewWordForm;