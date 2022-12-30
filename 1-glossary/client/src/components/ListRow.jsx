import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const ListItem = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [word, setWord] = useState(props.rowInfo.word);
  const [def, setDef] = useState(props.rowInfo.definition);

  function handleEdit () {
    setEditMode(true);
  }

  function handleDelete () {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/delete',
      contentType: 'application/json',
      data: JSON.stringify({
        "id": props.rowInfo._id
      }),
      success: function(data) {
        props.setGlossary(data);
      }
    });
  }

  function handleSave () {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/save',
      contentType: 'application/json',
      data: JSON.stringify({
        "id": props.rowInfo._id,
        "newWord": word,
        "newDef": def
      }),
      success: function(data) {
        setEditMode(false);
        props.setGlossary(data);
      }
    });
  }

  function handleWChange (e) {
    setWord(e.target.value);
  }

  function handleDChange (e) {
    setDef(e.target.value);
  }

  if(!editMode) {
    return (
      <tr>
        <td>{props.rowInfo.word}</td>
        <td>{props.rowInfo.definition}</td>
        <td><button type='button' onClick={handleEdit}>Edit</button></td>
        <td><button type='button' onClick={handleDelete}>Delete</button></td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td><input type="text" defaultValue={props.rowInfo.word} onChange={handleWChange}></input></td>
        <td><input type="text" defaultValue={props.rowInfo.definition} onChange={handleDChange}></input></td>
        <td><button type='button' onClick={handleSave}>Save</button></td>
      </tr>
    )
  }
}

export default ListItem;