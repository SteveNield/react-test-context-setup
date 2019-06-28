import React from 'react';
import { 
    render,
    cleanup
} from '@testing-library/react';
import Context from './test-context';
import ContextTestComponent from './../src/index';

afterEach(cleanup);

const testData = {
  number: 0,
  text: 'text',
  empty: null,
  choice: false,
  array: [],
  obj: {
    a: 'b',
    c: 'd'
  },
  func: () => {}
}

const { TestContext, TestProvider } = Context(testData);

const renderWithContext = () => {
    return render(
        <TestProvider>
            <ContextTestComponent
                Context={TestContext} />
        </TestProvider>
    );
}

it('renders numbers as text', () => {
  const { getByTestId } = renderWithContext();
  expect(getByTestId('number').textContent)
    .toEqual('0');
});

it('renders text as text', () => {
  const { getByTestId } = renderWithContext();
  expect(getByTestId('text').textContent)
    .toEqual('text');
});

it('renders null as "null"', () => {
  const { getByTestId } = renderWithContext();
  expect(getByTestId('empty').textContent)
    .toEqual('null');
});

it('renders boolean as "false/true"', () => {
  const { getByTestId } = renderWithContext();
  expect(getByTestId('choice').textContent)
    .toEqual('false');
});

it('renders array as stringified array', () => {
  const { getByTestId } = renderWithContext();
  expect(getByTestId('array').textContent)
    .toEqual('[]');
});

it('renders object as stringified object', () => {
  const { getByTestId } = renderWithContext();
  expect(getByTestId('obj').textContent)
    .toEqual('{"a":"b","c":"d"}');
});

it('renders functions as "function"', () => {
  const { getByTestId } = renderWithContext();
  expect(getByTestId('func').textContent)
    .toEqual('function');
});
