import React from "react";
import Note from "./Note";
import notes from "../notes";

const CreateNote = (notItem) => {
  return <Note key={notItem.key} title={notItem.title} content={notItem.content} />;
};

const NewNote = () => {
  return notes.map(CreateNote);
};

export default NewNote;
