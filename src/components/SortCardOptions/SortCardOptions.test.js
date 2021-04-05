import React from "react";
import TestRenderer from "react-test-renderer";
import SortCardOptions from './SortCardOptions';

describe('SortCardOptions', () => {

    it('should render properly', ()=>{
        const tree = TestRenderer.create(
            <SortCardOptions />
            ).toJSON();
            expect(tree).toMatchSnapshot();
    });
  
})