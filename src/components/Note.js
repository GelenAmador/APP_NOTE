import React from 'react';

const Note = ({ note, onDelete }) => {
    return (
        <div className="note">
        <p>{note.text}</p>
        <button className='botonDelete' onClick={() => onDelete(note.id)}>Borrar</button>
        
        </div>
    );
};

export default Note;

