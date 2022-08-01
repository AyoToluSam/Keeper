import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const App = () => {

  const [notesArray, setNotesArray] = useState([])
 
  const addNewNote = (newNote) => {
    setNotesArray( (prevValue) => {
      return [...prevValue, newNote]
    })
  }

  const noteDelete = (id) => {
    setNotesArray( (prevValue) => {
      return prevValue.filter( (note, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
      {
          notesArray.map( (note, i) => {
            return <Note 
              key={i} 
              id= {i} 
              title={note.title} 
              content={note.content} 
              onDelete={noteDelete} />
          })
      }
      <Footer />
    </div>
  );
}

export default App;
