/**
 *
 * @param {array} cardsList list of cards
 * @param {object} param1 parameters of the selected filter
 * @returns
 */
export const sortByCards = (
  cardsList,
  {
    titleUser,
    sortBy = "desc",
    title = false,
    createdAt = false,
    updatedAt = false,
  }
) => {
  //console.log(titleUser)
  return cardsList
    .filter((card) => {
      const titleMatch = card.title
        .toLowerCase()
        .includes(titleUser.toLowerCase());

      return titleMatch;
    })
    .sort((a, b) => {
      if (title) {
        if (sortBy === "asc") {
          return a.title < b.title ? 1 : -1;
        }
        if (sortBy === "desc") {
          return a.title < b.title ? -1 : 1;
        }
      }

      if (createdAt) {
        if (sortBy === "asc") {
          return a.createdAt < b.createdAt ? -1 : 1;
        }

        if (sortBy === "desc") {
          return a.createdAt > b.createdAt ? -1 : 1;
        }
      }

      return 0;
    });
};
