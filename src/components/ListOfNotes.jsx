const ListOfNotes = ({ notes, markNote }) => {
  return (
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
  );
};

export default ListOfNotes;
