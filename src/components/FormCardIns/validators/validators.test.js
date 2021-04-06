import { 
  validateCardDetails,
  validateCaracthers,
  counterCaracthers,
  isValidHttpUrl  
} from "./validators";

const CARD_DETAILS = {
  title: "my title",
  description: "my description",
  imageUrl:
    "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
};

describe("form validattors", () => {

  describe('input fields', () => {
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

  describe('description field', () => {
    it('should return true if description text is too long', () => {
      const description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus e FGDGD FHFHG dfgfh lorend ionfmo gegrt';
      expect(validateCaracthers(description)).toBeTruthy();
    });
  
    it('should return 0 when description length is greater than the MAX', () => {
      const description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus e FGDGD FHFHG dfgfh lorend ionfmo gegrt';
      expect(counterCaracthers(description)).toBe(0);
    });
  });

  describe('image (url) field', () => {

   it('should be a valid url using experimental URL object', () =>{

    let url = 'http://www.ventoji.es/ventojidev/wp-content/uploads/2019/06/IMG_20180922_170206-1568x1176.jpg';

  //  url = 'www.googlees';
    expect(isValidHttpUrl(url)).toBeTruthy();
   });

   it('should be an invalid url using experimental URL object', () =>{

    let url = 'www.googlees';
    expect(isValidHttpUrl(url)).toBeFalsy();
   });

  });


});
