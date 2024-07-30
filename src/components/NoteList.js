import React from 'react';

const NoteList = ({ notes, onDelete, onEdit }) => {
    return (
        <div className="note-list">
        {notes.map((note) => (
            <div className="note" key={note.id}>
            <p>{note.text}</p>
            <button className='botonDelete' onClick={() => onEdit(note)}>Modificar</button>
            <button className='botonDelete' onClick={() => onDelete(note.id)}>Eliminar</button>
            </div>
        ))}
        </div>
    );
};

export default NoteList;

