import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {FormCardIns} from "./FormCardIns";

describe("FormCardIns", () => {
  it("should be defined", () => {
    const { container } = render(<FormCardIns />);

    expect(container).toBeInTheDocument();
    expect(container.querySelectorAll("input")).toHaveLength(3);
    expect(container.querySelectorAll("label")).toHaveLength(3);
  });

  it("should render properly", () => {
    const { getByText, getByPlaceholderText } = render(<FormCardIns />);

    let element;

    element = getByText("EDIT CARD");
    expect(element.nodeName).toBe("H1");
    element = getByText("Title");
    expect(element.nodeName).toBe("LABEL");
    element = getByPlaceholderText("Title");
    expect(element.nodeName).toBe("INPUT");
  });

  it("should update state when a input changes", () => {
    const { getByPlaceholderText } = render(<FormCardIns />);

    let element = getByPlaceholderText("Title");
    fireEvent.change(element, {
      target: {
        value: "Moto GP",
      },
    });

    expect(element.value).toBe("Moto GP");
    // console.log('VALUE',container.querySelector('input[name="Title"]').value);
    // expect(container.querySelector('input[name="Title"]').value).toBe('Moto GP');

    element = getByPlaceholderText("Description");

    fireEvent.change(element, {
      target: {
        value: "Nice pics describing many amazing things",
      },
    });
    // expect(container.querySelector('input[name="Description"]').value).toBe('Nice pics describing many amazing things');
    expect(element.value).toBe("Nice pics describing many amazing things");

    element = getByPlaceholderText("Image (Url)");

    fireEvent.change(element, {
      target: {
        value: "www.google.es",
      },
    });
    //  expect(container.querySelector('input[name="ImageUrl"]').value).toBe('www.google.es');
    expect(element.value).toBe("www.google.es");
  });

  it("should display error messages for invalid input fields when submit", () => {
    const { getByText, getByPlaceholderText } = render(<FormCardIns />);

    let element = getByPlaceholderText("Title");
    fireEvent.change(element, {
      target: {
        value: "",
      },
    });

    element = getByPlaceholderText("Description");
    fireEvent.change(element, {
      target: {
        value: "",
      },
    });

    // let element2 = getByPlaceholderText('Image (Url)');
    // expect(element2.value).toBe('www.google.es');

    element = getByText("Save");
    fireEvent.submit(element);
    let element2 = getByPlaceholderText("Image (Url)");
    //   console.log(element2);

    element2 = getByText("Description can not be empty");
    expect(element2).toBeInTheDocument();

    element2 = getByText("Title can not be empty");
    expect(element2).toBeInTheDocument();
    // console.log(container.children)
    // expect(container.querySelector('ins-form__error')).toBeInTheDocument();
  });

  it("should submit a new card when button is clicked", () => {
    const { getByPlaceholderText } = render(<FormCardIns />);

    let element = getByPlaceholderText("Title");
    fireEvent.change(element, {
      target: {
        value: "Moto GP",
      },
    });

    element = getByPlaceholderText("Description");

    fireEvent.change(element, {
      target: {
        value: "Nice pics describing many amazing things",
      },
    });

    //  element = getByText('Add');
    //  fireEvent.submit(element);
  });
});
