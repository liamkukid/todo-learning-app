import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import Input from '../Components/Input';

const mockStore = configureStore([]);
const initialState = [];

describe('Input', () => {
  jest.mock('react-redux');

  it('renders correctly for Input', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// test('add new todo', () => {
//   const store = mockStore(initialState);
//   render(
//     <Provider store={store}>
//       <Input />
//     </Provider>
//   );

//   const linkElementInput = screen.getByPlaceholderText('New todo...');
//   const linkElementButton = screen.getByText('Save');
//   const text = 'Entered Text';
//   fireEvent.change(linkElementInput, { target: { value: text } });
//   fireEvent.click(linkElementButton);
//   const actions = store.getActions();
//   expect(actions[0]).toEqual('todos/addTodo');
// });
