import React, { useState } from 'react';
import $ from 'jquery';

const SearchBox = (props) => {
  const [term, setTerm] = useState('');

  function handleFilter (e) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/search',
      contentType: 'application/json',
      data: JSON.stringify({
        "term": e.target.value,
      }),
      success: function(data) {
        props.setGlossary(data);
      }
    });
  };

  return (
    <div>
      <input type='text' onChange={handleFilter} placeholder='Filter'></input>
    </div>
  );
};

export default SearchBox;