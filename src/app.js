import React, { useEffect, useRef, useState , useCallback} from "react";
import ReactDOM from "react-dom";
import './app.css';

import FormCardIns from './components/FormCardIns';
import ModalIns from './components/ModalIns';
import ListCardsIns from './components/ListCardsIns';
import { getItems } from './utils/localStorageService';

const App = () => {
  const modalIns = useRef(null);
  const [ cards, setCards] = useState([]);

  const checkstoredCards = useCallback(() => {
    const cardsList = getItems();
    if(cardsList){
      setCards(cardsList)
    }
  },[]);

  useEffect(() => {
    checkstoredCards();
  }, [checkstoredCards])
  return (
    <>
   <main className="ins-main-content">
     <h1 className="ins-heading-primary"> List of cards</h1>
     <div className="ins-cards-list">
        <ListCardsIns cardsList={cards}/>
     </div>
     <button className="ins-btn--add-card" onClick={() => modalIns.current.open()}>
       +
     </button>
   </main>
    <ModalIns ref={modalIns}>
      <FormCardIns />
    </ModalIns>
    </>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("ins-app")
);
