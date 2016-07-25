import React from 'react';
import Note from './note';

const NoteList = (props) => {
  const noteItems = props.notes.entrySeq().map(([key, note]) => {
    return (<Note note={note} id={key} key={key} onTextChange={props.onTextChange}
      onDelete={props.onDelete} drag={props.drag} zInd={props.zIndex}
      changeZ={props.changeZ}
    />);
  });

  return (
    <ul>
       {noteItems}
    </ul>
  );
};

export default NoteList;
