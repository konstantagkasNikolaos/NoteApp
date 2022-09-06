import "./css/app.css";
import React, { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListOfNotes from "./components/ListOfNotes";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const saveNote = (text) => {
    setShowModal(false);
    setNotes([
      ...notes,
      { id: notes.length + 1, descr: text, completed: false },
    ]);
    localStorage.setItem("notes", JSON.stringify(notes));
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

  const clearAll = () => {
    setNotes([]);
  };

  return (
    <>
      <Header />
      <main>
        <h2>Notes</h2>
        <div className="notes-button">
          <button onClick={() => setShowModal(true)}>Add Note</button>
          <button onClick={clearNotes}>Clear marked</button>
          <button onClick={clearAll}>Clear all</button>
        </div>
        <ListOfNotes notes={notes} markNote={markNote} />
      </main>
      <Footer />
      <Modal
        show={showModal}
        hide={() => setShowModal(false)}
        save={saveNote}
      />
    </>
  );
}

export default App;
