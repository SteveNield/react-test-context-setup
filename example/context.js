import React, { useReducer } from 'react';
import reducer from './reducer';

const initialState = {
    count: 0
}

const CounterContext = React.createContext(initialState);

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            { children }
        </CounterContext.Provider>
    );
}

export {
    CounterContext,
    CounterProvider
}

