import reducer from './reducer';
import * as types from './action-types';

describe('when INCREMENT action is raised', () => {
    it('increments the count by 1', () => {
        const state = {
            count: 0
        };
        const action = {
            type: types.INCREMENT
        };

        expect(reducer(state, action).count).toEqual(1);
    });
});

describe('when DECREMENT action is raised', () => {
    it('increments the count by 1', () => {
        const state = {
            count: 1
        };
        const action = {
            type: types.DECREMENT
        };

        expect(reducer(state, action).count).toEqual(0);
    });
});