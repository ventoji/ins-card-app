import { v1 as uuidv1 } from "uuid";

/**
 *
 * @returns unique id for each ins-card
 */
export const generatedId = () => {
  return uuidv1();
};



/**
 *
 * @param {card} card details with the updated information
 */

export const updateItem = (card) => {
  if (!card.image) {
    card.image =
      "http://www.ventoji.es/ventojidev/wp-content/uploads/2019/06/IMG_20180922_170206-1568x1176.jpg";
    //console.log("introduced image url by default");
  }

  let cardsList = getItems();

  if (cardsList) {
    cardsList = cardsList.map((item) => {
      if (item.id === card.id) {
        return {
          ...item,
          updatedAt: Date.now(),
          title: card.title,
          description: card.description,
          image: card.image,
        };
      } else {
        return item;
      }
    });
  }

  if (typeof Storage !== "undefined") {
    try {
      window.localStorage.setItem("cardsList", JSON.stringify(cardsList));
      console.log("updated in LocalStoraged");
    } catch (error) {
      console.log(error);
    }
  }
};

/**
 *
 * @param {object} card detailed information
 */

export const saveItem = (card) => {
  let cardsList = getItems();

  if (!card.image) {
    card.image =
      "http://www.ventoji.es/ventojidev/wp-content/uploads/2019/06/IMG_20180922_170206-1568x1176.jpg";
  //  console.log("introduced image url by default");
  }

  const cardNew = {
    ...card,
    id: generatedId(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  if (cardsList) {
    cardsList = [...cardsList, cardNew];
  } else {
    cardsList = [cardNew];
  }

  if (typeof Storage !== "undefined") {
    try {
      window.localStorage.setItem("cardsList", JSON.stringify(cardsList));
   //   console.log("saved in LocalStoraged");
    } catch (error) {
      console.log(error);
    }
  }
  return cardNew;
};

/**
 *
 * @returns list of cards stored in localStorage
 */

export const getItems = () => {
  let cardsList;
  if (typeof Storage !== "undefined") {
    try {
      cardsList = JSON.parse(window.localStorage.getItem("cardsList"));
   //   console.log("checked data in LocalStoraged");
    } catch (error) {
      console.log(error);
    }
  } else {
    cardsList = [];
  }

  return cardsList;
};

/**
 *
 * @param {string} id for a single card
 * @returns detailed info for that card
 */

export const getItemById = (id) => {
  let cardsList = getItems();
  let cardDetails;

  if (cardsList) {
    cardDetails = cardsList.filter((card) => card.id === id);
    cardDetails = cardDetails[0];
  } else {
    console.log("create new card");
  }

  return cardDetails;
};

/**
 *
 * @param {string} id unique for each card
 */

export const removeItem = (id) => {
  let cardsList = getItems();

  if (cardsList) {
    cardsList = cardsList.filter((card) => card.id !== id);
  //  console.log("card founded", cardsList);
    window.localStorage.setItem("cardsList", JSON.stringify(cardsList));
    console.log("Removed from LocalStoraged");
  } else {
 //   console.log("not found");
  }
};

/**
 * Remove cardsList from localStorage
 */
export const removeItems = () => {
  if (typeof Storage !== "undefined") {
    window.localStorage.removeItem("cardsList");
  }
};

// window.localStorage.removeItem('name');
/**
 * clear local storage
 */
export const clearAll = () => {
  if (typeof Storage !== "undefined") {
    window.localStorage.clear();
  }
};
