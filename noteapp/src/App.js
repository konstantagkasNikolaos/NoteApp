import "./app.css";
import React, { useState } from "react";
import Modal from "./component/Modal";

function App() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const saveNote = (text) => {
    closeModal();
    setNotes([
      ...notes,
      { id: notes.length + 1, descr: text, completed: false },
    ]);
  };

  const markNote = (id) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          note.completed = note.completed ? false : true;
        }
        return note;
      })
    );
  };

  const clearNotes = () => {
    setNotes(notes.filter((note) => !note.completed));
  };

  return (
    <>
      <header>
        <h1>Note Taking App</h1>
        <p>A simple note taking app</p>
      </header>
      <main>
        <h2>Notes</h2>
        <div className="notes-button">
          <button onClick={openModal}>Add Note</button>
          <button onClick={clearNotes}>Clear marked</button>
        </div>
        <ul>
          {notes.map((note) => (
            <li
              className={
                note.completed ? "mark-notes-done " : "mark-notes-not-done "
              }
              key={note.id}
              onClick={() => markNote(note.id)}
            >
              {note.descr}
            </li>
          ))}
        </ul>
      </main>
      <Modal show={showModal} hide={closeModal} save={saveNote} />
      <footer>
        <p>Created for training purposes</p>
      </footer>
    </>
  );
}

export default App;
