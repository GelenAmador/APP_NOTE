import React, { useState, useEffect } from 'react';
import { db } from './firabase'; // Importa db desde firebase.js
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'; // Importa las funciones necesarias
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    const notesRef = collection(db, 'notes');
    const unsubscribe = onSnapshot(notesRef, (snapshot) => {
      const notes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notes);
    });
    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  const addNote = async (text) => {
    const notesRef = collection(db, 'notes');
    await addDoc(notesRef, {
      text,
      createdAt: new Date(),
    });
  };

  const deleteNote = async (id) => {
    const noteDoc = doc(db, 'notes', id);
    await deleteDoc(noteDoc);
  };

  const updateNote = async (id, text) => {
    const noteDoc = doc(db, 'notes', id);
    await updateDoc(noteDoc, {
      text,
      updatedAt: new Date(),
    });
    setCurrentNote(null); // Clear the current note after updating
  };

  const handleEdit = (note) => {
    setCurrentNote(note);
  };

  return (
    <div className="App">
      <h1>Mis Notas</h1>
      <NoteForm
        onAdd={addNote}
        currentNote={currentNote}
        onUpdate={updateNote}
      />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={handleEdit} />
    </div>
  );
};

export default App;
