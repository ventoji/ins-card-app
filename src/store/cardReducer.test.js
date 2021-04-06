import * as cardActions from './actions';
import reducer from './cardReducer';

describe('reducer function', () =>{

    it('should set default state', () => {
        const state = reducer(undefined, { type: '@@INIT' });
        expect(state).toEqual(null);
      });
});
