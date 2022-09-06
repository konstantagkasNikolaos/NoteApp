import { useState } from "react";
import "../css/modal.css";

const Modal = ({ show, hide, save }) => {
  const [note, setNote] = useState({ text: "", error: false });
  const modalState = show ? "show-modal" : "hide-modal";

  const changeNote = (event) =>
    setNote({ text: event.target.value, error: false });

  const saveNote = (event) => {
    event.preventDefault();

    if (note.text !== "") {
      save(note.text);
      setNote({ text: "", error: false });
    } else {
      setNote({ text: "", error: true });
      setTimeout(() => setNote({ text: "", error: false }), 5000);
    }
  };

  const closeModal = () => {
    setNote({ text: "", error: false });
    hide();
  };

  return (
    <>
      <div className={modalState}>
        <div className="modal">
          <form className="modal-content" onSubmit={saveNote}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Insert your New Note</p>
            <input
              placeholder="...your note..."
              value={note.text}
              onChange={changeNote}
            />
            <p className="error">
              {note.error ? "Cannot save, an empty note..." : ""}
            </p>
            <button type="submit" className="save-modal">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
