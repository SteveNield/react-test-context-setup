import * as types from './action-types';

export default (state, action) => {
    switch(action.type){
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}