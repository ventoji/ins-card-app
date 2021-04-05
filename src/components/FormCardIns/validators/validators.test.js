import { validateCardDetails } from "./validators";

const CARD_DETAILS = {
  title: "my title",
  description: "my description",
  imageUrl:
    "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
};

describe("form validattors", () => {
  it("should return errors for empty fields", () => {
    const errors = validateCardDetails({
      title: "",
      description: "",
      imageUrl: "",
    });
    expect(Object.keys(errors)).toHaveLength(2);
  });

  it("should return errors for undefined fields", () => {
    const errors = validateCardDetails({});
    expect(Object.keys(errors)).toHaveLength(2);
  });

  it("should not return any errors for non-empty fields", () => {
    const errors = validateCardDetails(CARD_DETAILS);
    expect(Object.keys(errors)).toHaveLength(0);
  });
});
