import React from 'react';
import ListRow from './ListRow.jsx'

const WordList = (props) => (
  <table>
    <tbody>
      <tr>
        <th>Word</th>
        <th>Definition</th>
      </tr>
    {props.list.map((listItem) => {
      return <ListRow key={listItem._id} rowInfo={listItem} setGlossary={props.setGlossary} handleDChange={props.handleDChange} handleWChange={props.handleWChange}/>
    })}
    </tbody>
  </table>
);

export default WordList;
