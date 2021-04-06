import React from "react";
import { fireEvent,  render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";


import {CardIns} from "./CardIns";

const CARD_DETAILS = {
  title: "Moto GP",
  description: "Some description for the card, very nice",
  imageUrl:
    "https://images.freeimages.com/images/large-previews/adf/sun-burst-1478549.jpg",
};

describe("Card component", () => {
  it("should be defined", () => {
    const { container } = render(<CardIns />);
    expect(container).toBeInTheDocument();
    //    expect(container.querySelectorAll('img')).toHaveLength(1);
    expect(container.querySelectorAll("div")[0]).toHaveClass("ins-card");
    expect(container.querySelectorAll("div")[1]).toHaveClass(
      "ins-card__image-container"
    );
    expect(container.querySelectorAll("div")[3]).toHaveClass(
      "ins-card__description"
    );
  });

  it("should render card with defaults", () => {
    const { getByText } = render(<CardIns />);
    let element;

    element = getByText("Moto GP");
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe("H5");
    expect(element.parentNode.nodeName).toBe("DIV");
  //  expect(element.parentNode).toHaveClass('sc-bdvvaa hTVhwk');

    element = getByText("Some description for the card, very nice");
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe("P");
    
  });

  it('should render with snapshot', () => {
   
    const tree = TestRenderer.create(
            <CardIns />
            ).toJSON();
          expect(tree).toMatchSnapshot();
  });

  it("should render card with provided details", () => {
    const { getByText } = render(<CardIns {...CARD_DETAILS} />);
    let element = getByText("Moto GP");
    expect(element).toBeInTheDocument();
    //    expect(container.querySelector('img').src).toBe(CARD_DETAILS.imageUrl);
  });

   it('should open modal window when edit button is clicked', () => {
      const mockOnClick = jest.fn();
      const { getByText } = render(<CardIns {...CARD_DETAILS} handleModal={mockOnClick} />);
      let element = getByText("edit");
      expect(element).toBeInTheDocument();
      expect(element.nodeName).toBe('BUTTON');
      expect(element).toHaveClass('ins-button ins-button--small ins-button--primary')
      fireEvent.click(element);
      expect(mockOnClick).toHaveBeenCalled();
      expect(mockOnClick).toHaveBeenCalledTimes(1);
   });

   it('should remove a item when delete button is clicked', () => {
    const mockOnClick = jest.fn();
    window.confirm = jest.fn().mockImplementation(() => true)
    const { getByText } = render(<CardIns {...CARD_DETAILS} removeListCard={mockOnClick} />);
    let element = getByText("delete");
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(mockOnClick).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
 });


  // it('should render with snapshot', () => {
  //     const tree = TestRenderer.create(
  //       <CardIns />
  //       ).toJSON();
  //     expect(tree).toMatchSnapshot();
  //     console.log(tree.children)
  //     console.log(tree.children[1].children[0].children[0].children[0].props.onClick); // button edit
  //     console.log(tree.children[1].children[0].children[1].children[0]); // button delete
  //   //  console.log(tree.props)
  //   //  console.log(tree.props.className)
  //    // console.log(tree.props.onMouseEnter)
  //    // console.log(tree.props.onMouseLeave)
     
  //    //console.log(tree.getInstance());
  //  //  tree.root.findByProps({ className: "ins-button ins-button--small ins-button--primary" }).props.onClick();

  // });


  
  it("should show buttons for editing or deleting when mouse enter", () => {

    const {  container} = render(<CardIns {...CARD_DETAILS}  />);
  //  const element = container.querySelector('ins-card__controls');
    // const element = container.querySelectorAll("div")
    let element = container.querySelectorAll("div")[0];
    expect(element).toHaveClass("ins-card");

    // element=container.querySelectorAll("div")[3];
    // expect(element).toHaveClass("ins-card__controls");

    fireEvent.mouseEnter(element);
  //  element = getByText("edit");  //ins-card__controls-show, ins-card__description
  //  expect(container.querySelectorAll("div")[3]).toHaveClass("ins-card__controls-show")
   // expect(element).toHaveClass('ins-button ins-button--small ins-button--primary')

  });


});
