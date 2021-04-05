import React, { useEffect, useRef, useState, useCallback } from "react";
import FormCardIns from "./components/FormCardIns";
import ModalIns from "./components/ModalIns";
import ListCardsIns from "./components/ListCardsIns";
import { getItems } from "./utils/localStorageService";

import "./app.css";

const App = () => {

  const modalIns = useRef(null);
  const [cards, setCards] = useState([]);
  const [idCard, setIdCard] = useState("");
 // const [modState, setModState] = useState(false);

  const checkstoredCards = useCallback(() => {
    const cardsList = getItems();
    if (cardsList) {
      setCards(cardsList);
    }
  }, []);

  useEffect(() => {
    checkstoredCards();
  }, [checkstoredCards]);

  const handleClickModal = (id) => {
    modalIns.current.open();
    setIdCard(id);
   
  };


  return (
    <div >
        <main className="ins-main-content">
        <h1 className="ins-heading-primary"> List of cards</h1>
        <>
          <ListCardsIns cardsList={cards} handleModal={handleClickModal} />
        </>
        <button className="ins-btn--add-card" onClick={handleClickModal}>
          +
        </button>
      </main>
      <ModalIns ref={modalIns} >
        <FormCardIns id={idCard} />
      </ModalIns>
      
    </div>
  );
};

export default App;

