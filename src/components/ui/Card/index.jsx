import { useState } from "react";
import Checkbox from "../Checkbox";
import "./index.css";

const Card = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="card">
      <h2 className={`card-title ${checked ? 'checkbox-active' : ''}`}>{checked ? "Text" : "Title"}</h2>
      <Checkbox className="card-checkbox" handleCheckbox={() => setChecked(current => !current)} />
      <hr/>
      <p className="card-text">Text</p>
    </div>
  );
}

export default Card;
