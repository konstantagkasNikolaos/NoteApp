import { useState } from "react";
import "./modal.css";

const Modal = ({ show, hide, save }) => {
  const [note, setNote] = useState({ text: "", error: false });
  const modalState = show ? "show-modal" : "hide-modal";

  const changeNote = (event) =>
    setNote({ text: event.target.value, error: false });

  const saveNote = () => {
    if (note.text !== "") {
      save(note.text);
      setNote({ text: "", error: false });
    } else {
      setNote({ text: "", error: true });
      setTimeout(() => setNote({ text: "", error: false }), 5000);
    }
  };

  return (
    <>
      <div className={modalState}>
        <div className="modal">
          <div className="modal-content">
            {/*//TODO fix X button*/}
            <span className="close" onClick={hide}>
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
            <button className="save-modal" onClick={saveNote}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
