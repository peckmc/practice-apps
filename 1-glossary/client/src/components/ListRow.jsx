import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const ListItem = (props) => {
  const [editMode, setEditMode] = useState(false);

  function handleEdit (id) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/edit',
      data: JSON.stringify({"id": id}),
      success: function() {

      }
    });
  }

  function handleDelete (id) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/delete',
      data: JSON.stringify({"id": id}),
      success: function() {

      }
    });
  }

  return (
  <tr key={props.rowInfo._id}>
    <td>{props.rowInfo.word}</td>
    <td>{props.rowInfo.definition}</td>
    <td><button type='button' onClick={handleEdit(props.rowInfo._id)}>Edit</button></td>
    <td><button type='button' onClick={handleDelete(props.rowInfo._id)}>Delete</button></td>
  </tr>
  );
}

export default ListItem;