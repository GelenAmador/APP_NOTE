import React, { useState, useEffect, useRef } from 'react';

const NoteForm = ({ onAdd, currentNote, onUpdate }) => {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
        // Ajustar el tamaño del textarea al contenido
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);

    useEffect(() => {
        if (currentNote) {
        setText(currentNote.text);
        } else {
        setText('');
        }
    }, [currentNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentNote) {
        onUpdate(currentNote.id, text);
        } else {
        onAdd(text);
        }
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <textarea
            ref={textareaRef}
            placeholder="Algo para recordar..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="1"
        />
        <button type="submit" className='botonCrear '>{currentNote ? 'Actualizar' : 'Crear'}</button>
        </form>
    );
};

export default NoteForm;
