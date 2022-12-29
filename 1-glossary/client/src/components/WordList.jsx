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
      return <ListRow rowInfo={listItem}/>
    })}
    </tbody>
  </table>
);

export default WordList;
