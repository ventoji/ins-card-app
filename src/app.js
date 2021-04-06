import React, { useEffect, useRef, useState, useCallback, Suspense } from "react";
import FormCardIns from "./components/FormCardIns";
import ModalIns from "./components/ModalIns";
import ListCardsIns from "./components/ListCardsIns";
import { getItems } from "./utils/localStorageService";
import ButtonAddCard from './components/ButtonIns/ButtonAddCard';

import 'normalize.css'; 
import "./app.css";

/* <button className="ins-btn--add-card" onClick={handleClickModal}>
+
</button> */



const App = () => {

  const modalIns = useRef(null);
  const [cards, setCards] = useState([]);
  const [idCard, setIdCard] = useState("");

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
        <ButtonAddCard onClick={handleClickModal} />
   
      </main>
      <ModalIns ref={modalIns} >
        <FormCardIns id={idCard} />
      </ModalIns>
      
    </div>
  );
};

export default App;

