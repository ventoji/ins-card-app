import { sortByCards } from "./selector";
import { cardsList } from "./data";

describe("sort cards function", () => {
  it("should sort title in desc order by default", () => {
    const filters = {
      titleUser: "",
      title: true,
      createdAt: false,
      updatedAt: false,
    };
    let result = sortByCards(cardsList, filters);
    result = result.map((item) => item.title);
    expect(result).toEqual([
      "Card 22",
      "Card 3",
      "Card 4",
      "Card 5",
      "Card 5",
      "Card 7",
      "Card 7",
      "My card 1",
      "angular",
    ]);
  });

  it("should filter by title in asc order", () => {
    const filters = {
      titleUser: "",
      sortBy: "asc",
      title: true,
      createdAt: false,
      updatedAt: false,
    };
    let result = sortByCards(cardsList, filters);
    result = result.map((item) => item.title);
    expect(result).toEqual([
      "angular",
      "My card 1",
      "Card 7",
      "Card 7",
      "Card 5",
      "Card 5",
      "Card 4",
      "Card 3",
      "Card 22",
    ]);
  });

  it("should filter by title in desc order", () => {
    const filters = {
      titleUser: "",
      sortBy: "desc",
      title: true,
    };
    let result = sortByCards(cardsList, filters);
    result = result.map((item) => item.title);
    expect(result).toEqual([
      "Card 22",
      "Card 3",
      "Card 4",
      "Card 5",
      "Card 5",
      "Card 7",
      "Card 7",
      "My card 1",
      "angular",
    ]);
  });

  it("should filter by title provide by the user in desc order", () => {
    const filters = {
      titleUser: "Card",
      sortBy: "desc",
      title: true,
    };
    let result = sortByCards(cardsList, filters);
    result = result.map((item) => item.title);
    expect(result).toEqual([
      "Card 22",
      "Card 3",
      "Card 4",
      "Card 5",
      "Card 5",
      "Card 7",
      "Card 7",
      "My card 1",
    ]);
  });

  it("should sort cards by createdAt in asc order", () => {
    const filters = {
      titleUser: "",
      sortBy: "asc",
      title: false,
      createdAt: true,
      updatedAt: false,
    };
    let result = sortByCards(cardsList, filters);
    result = result.map((item) => item.createdAt);
    //   console.log(result);
    expect(result).toEqual([
      1617569050004,
      1617569239366,
      1617569710175,
      1617569920399,
      1617569977198,
      1617570237643,
      1617570352888,
      1617570420422,
      1617573421213,
    ]);
  });

  it("should filter first by title then by date when both are selected", () => {
    const filters = {
      titleUser: "",
      sortBy: "asc",
      title: true,
      createdAt: true,
      updatedAt: false,
    };
    let result = sortByCards(cardsList, filters);
    result = result.map((item) => [item.createdAt, item.title]);
    //  console.log(result);
    expect(result).toEqual([
      [1617573421213, "angular"],
      [1617569050004, "My card 1"],
      [1617570420422, "Card 7"],
      [1617570352888, "Card 7"],
      [1617570237643, "Card 5"],
      [1617569977198, "Card 5"],
      [1617569920399, "Card 4"],
      [1617569710175, "Card 3"],
      [1617569239366, "Card 22"],
    ]);
  });
});
