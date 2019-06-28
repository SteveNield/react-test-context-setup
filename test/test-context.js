import React, { useReducer } from 'react';

const reducer = () => {}

export default (initialState = {
  number: 0,
  text: 'text',
  empty: null,
  choice: false,
  array: [],
  obj: {
    a: 'b',
    c: 'd'
  }
}) => {
  const TestContext = React.createContext(initialState);
  
  const TestProvider = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);
  
      return (
          <TestContext.Provider value={{ state, dispatch }}>
              { children }
          </TestContext.Provider>
      );
  }

  return {
    TestContext,
    TestProvider
  }
}
