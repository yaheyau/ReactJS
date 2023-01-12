import { useState } from "react";

import Header from '../../components/ui/Header';
import Card from '../../components/ui/Card';

function Home() {
  const [cards, setStateCard] = useState([
    {id: 1, title: "card 1", text: "", checked: false, editMode: false},
    {id: 2, title: "card 2", text: "", checked: false, editMode: false},
    {id: 3, title: "card 3", text: "", checked: false, editMode: false}
  ])

  const handleCheckbox = (id) => {
    let newStateCard = [...cards];
    let card = newStateCard.find(_card => _card.id === id);
    card.checked = !card.checked;
    setStateCard(newStateCard)
  }

  const editModeHandler = (id) => {
    let newStateCard = [...cards];
    let card = newStateCard.find(_card => _card.id === id);
    card.checked = false;
    card.editMode = true;
    setStateCard(newStateCard)
  };

  const onSavedCardData = (id, data) => {
    let newStateCard = [...cards];
    let card = newStateCard.find(_card => _card.id === id);
    card.editMode = false;
    card.title = data.title;
    card.text = data.text;
    setStateCard(newStateCard)
  }

  const close = (id) => {
    let newStateCard = [...cards];
    let card = newStateCard.find(_card => _card.id === id);
    card.editMode = false;
    setStateCard(newStateCard)
  }

  return (
    <div>
      <Header />
      {cards.map((card) => (
        <Card 
          key={card.id}
          id={card.id}
          title={card.title}
          text={card.text}
          checked={card.checked}
          editMode={card.editMode}
          handleCheckbox={handleCheckbox}
          editModeHandler={editModeHandler}
          onSavedCardData={onSavedCardData}
          close={close}
        />
      ))}
    </div>
  );
}

export default Home;
