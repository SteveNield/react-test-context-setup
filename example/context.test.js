import React from 'react';
import { 
    render,
    cleanup
} from '@testing-library/react';
import { 
    CounterContext, 
    CounterProvider 
} from './context';
import ContextTestComponent from './../index';

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
