import { useState, useRef } from "react";
import { FaPencilAlt, FaSave, FaWindowClose } from "react-icons/fa";

import Checkbox from "../Checkbox";
import Button from "../Button";
import "./index.css";

const Card = () => {
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  
  const inputTitle = useRef('');
  const inputText = useRef('');

  const editModeHandler = () => {
    setEditMode(true);
    setChecked(false);
  };

  const saveChanges = () => {
    setEditMode(false);
    setTitle(inputTitle.current.value);
    setText(inputText.current.value);
  }

  const close = () => {
    setEditMode(false);
    inputTitle.current.value = title;
    inputText.current.value = text;
  }

  return (
    <div className="card">
      <input type="text" name="title" className={`card-title ${checked ? 'checkbox-active' : ''}`} disabled={!editMode} ref={inputTitle}/>
      <Button className={`card-button ${editMode ? 'hide' : ''}`} handleButton={editModeHandler}><FaPencilAlt /></Button>
      <Button className={`card-button ${!editMode ? 'hide' : ''}`} handleButton={close}><FaWindowClose /></Button>
      <Button className={`card-button ${!editMode ? 'hide' : ''}`} handleButton={saveChanges}><FaSave /></Button>
      <Checkbox checked={checked} className={`card-checkbox ${editMode ? 'hide' : ''}`} handleCheckbox={() => setChecked(current => !current)} />
      <hr/>
      <div>
        <input type="text" name="text" className="card-text" disabled={!editMode} ref={inputText}/>
      </div>
      
    </div>
  );
}

export default Card;
