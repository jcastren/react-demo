import {React, useState} from "react"
import '../css/App.css'
import Note from "./Note"
import Input from "./Input"

function App() {
  const [notes, changeNotes] = useState([]);
  const [note, changeNote] = useState("");

  function handleRemoval(id) {
    changeNotes(notes.filter((_, i) => i !== id))
  }

  return (
    <div className = "app">
        <h1>My To-Do List</h1>

    	{notes.map((element, index) => <Note class = {index === notes.length -1 ? "last" : "other"}
    	    msg = {element} id = {index} remove = {handleRemoval}  />)}
    	<Input notes = {notes} changeNotes = {changeNotes} note = {note} changeNote = {changeNote}/>
    </div>
  );

}

export default App;

//import "../css/App.css";
//import { React, useState } from "react";
//import Input from "./Input";
//import Note from "./Note";
//
//function App() {
//  const [item, changeItem] = useState("");
//  const [items, changeItems] = useState([]);
//
//  function handleRemoval(id) {
//    changeItems(items.filter((_, i) => i !== id));
//  }
//  return (
//    <div className="app">
//      <h1>My To-Do List</h1>
//      {items.map((element, i) => (
//        <Note
//          class={i === items.length - 1 ? "last" : "other"}
//          id={i}
//          msg={element}
//          remove={handleRemoval}
//        />
//      ))}
//      <Input
//        changeItem={changeItem}
//        changeItems={changeItems}
//        items={items}
//        item={item}
//      />
//    </div>
//  );
//}
//
//export default App;
