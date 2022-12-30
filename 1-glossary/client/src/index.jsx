import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import WordList from './components/WordList.jsx';
import NewWordForm from './components/NewWordForm.jsx';
import SearchBox from './components/SearchBox.jsx';

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
      <div id='searchBox'><SearchBox setGlossary={setGlossary}/></div>
      <div>{!loadingState && <WordList list={glossary} setGlossary={setGlossary} />}</div>
      <h1></h1>
      <div><NewWordForm setGlossary={setGlossary}/></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
