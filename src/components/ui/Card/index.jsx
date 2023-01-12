import { useState } from "react";
import { FaPencilAlt, FaSave, FaWindowClose } from "react-icons/fa";

import Checkbox from "../Checkbox";
import Button from "../Button";
import Input from "../Input";
import "./index.css";

const Card = (props) => {
  const [cardData, setCardData] = useState({
    title: props.title,
    text: props.text
  });

  const handleInput = (e) => setCardData((previous) => ({...previous, [e.target.name]: e.target.value}));

  const saveChanges = (id) => props.onSavedCardData(id, cardData);

  const close = (id) => {
    setCardData((previous) => ({...previous, title: props.title, text: props.text}));
    props.close(id);
  }

  const editButtons = () =>
    <div className="card-buttons">
      <Button className="card-button" id={props.id} handleButton={close}><FaWindowClose /></Button>
      <Button className="card-button" id={props.id} handleButton={saveChanges}><FaSave /></Button>
    </div>

  const viewButtons = () =>
    <div className="card-buttons">
      <Button className="card-button" id={props.id} handleButton={props.editModeHandler}><FaPencilAlt /></Button>
      <Checkbox checked={props.checked} className="card-checkbox" id={props.id} handleCheckbox={props.handleCheckbox} />
    </div>

  return (
    <div className="card">
      <Input 
        type="text"
        name="title"
        value={cardData.title}
        className={`card-title ${props.checked ? 'checkbox-active' : ''}`}
        disabled={!props.editMode}
        handleInput={handleInput} />
      {props.editMode ? editButtons() : viewButtons()}
      <hr/>
      <Input 
        type="text"
        name="text"
        value={cardData.text}
        className="card-text"
        disabled={!props.editMode}
        handleInput={handleInput} />
    </div>
  );
}

export default Card;
