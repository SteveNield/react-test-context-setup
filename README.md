# react-test-context-setup
### Low-impact test pattern for setup of react context and provider

![npm](https://img.shields.io/npm/v/react-test-context-setup.svg)

## Problem
React Context API provides a low-friction method for managing state change without depending on large-overhead libraries such as redux.  Testing components which use context is a well-understood problem but isolating the context and provider setup code for testing can be tricky.

## Example

Below is the code for setting up a basic context to hold a counter (`context.js`).

```javascript
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
```

## Installation

`npm install --save-dev react-test-context-setup`

## Usage

```javascript
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CounterContext, CounterProvider } from './context';
import ContextTestComponent from 'react-test-context-setup';

afterEach(cleanup);

const renderWithContext = () => {
    return render(
        <CounterProvider>
            <ContextTestComponent
                Context={CounterContext} />
        </CounterProvider>
    );
}

it('initialises count to 0', () => {
    const { getByTestId } = renderWithContext();
    expect(getByTestId('count').textContent).toEqual('0');
});

```

## Explanation

The component `ContextTestComponent` renders all state from a given context by iterating through the keys of the state object and creating a `<div />` where the `data-testid` is set to the key and the content is set to the value.

For example the following state:

```javascript
{
    "count": 0,
    "someOtherProperty": "testdata"
}
```

would be rendered as:

```html
<div>
    <div data-testid="count">0</div>
    <div data-testid="someOtherProperty">testdata</div>
</div>
```