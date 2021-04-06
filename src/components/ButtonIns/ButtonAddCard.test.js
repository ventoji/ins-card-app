import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonAddCard from './ButtonAddCard';

describe('ButtonAddCard component', () => {

    it('should render with label +', () => {

        const { container, getByText } = render(
            <ButtonAddCard />
          );

          expect(container).toBeDefined();
          expect(getByText("+")).toBeInTheDocument();
    });

    it('should call onClick method when clicked', () => {
        const mockOnClick = jest.fn();
        const { getByText } = render(
            <ButtonAddCard onClick={mockOnClick}/>
          );
        const element = getByText('+');
        fireEvent.click(element);
        expect(mockOnClick).toHaveBeenCalled();
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

})