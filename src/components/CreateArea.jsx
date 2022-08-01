import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = (props) => {

  const [newNote, setNewNote] = useState({title: "", content: ""})
  const [expansion, setExpansion] = useState(false)

  const createNewNote = (event) => {
    const {name, value} = event.target
    setNewNote( prevValue => {
      return {...prevValue, [name]: value}
    })
  }
  
  return (
      <div>
        <form className="create-note">
          {
           expansion &&
            <input 
            onChange={createNewNote} 
            onClick={ () => {setExpansion(true)}}
            // onKeyDown={ (event) => {
            //   if (event.key === "enter" && 
            //       newNote.title.length > 0 && 
            //       newNote.content.length > 0) {
            //     props.onAdd(newNote)
            //   setNewNote({title: "", content: ""})
            //   event.preventDefault()
            //   }
            // }}
            name="title" placeholder="Title" value={newNote.title} />
          }

          <textarea onChange={createNewNote} 
          onClick={ () => {setExpansion(true)}}
          // onKeyDown={ (event) => {
          //   if (event.key === "enter" && 
          //       newNote.title.length > 0 && 
          //       newNote.content.length > 0) {
          //     event.preventDefault()
          //     props.onAdd(newNote)
          //     setNewNote({title: "", content: ""})
          //   }
          // }}
          name="content" placeholder="Take a note..." 
          value={newNote.content} rows={ expansion ? 3 : 1 } />

          <Zoom in={ expansion ? true : false } >
            <Fab onClick={ (event) => {
              if (newNote.title.length > 0 && 
                  newNote.content.length > 0) {
                props.onAdd(newNote)
                setNewNote({title: "", content: ""})
              }
              event.preventDefault()
            }}><AddIcon /></Fab>
          </Zoom>
        </form>
      </div>
    );
}
export default CreateArea;
