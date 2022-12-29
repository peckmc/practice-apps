import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import WordList from './components/WordList.jsx'

function App () {
  const [glossary, setGlossary] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    $.ajax({
      url: 'http://localhost:3000/glossary',
      success: function(glossaryData) {
        setGlossary(glossaryData);
        setLoadingState(false);
      }
    });
  },[]);

  return (
    <div>
      <h1>Glossary App</h1>
      <div>{!loadingState && <WordList list={glossary}/>}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
