import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from '../features/todosSlice';
import Input from '../Components/Input';

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedAddTodo = jest.spyOn(actions, 'addTodo');

describe('Input', () => {
  it('renders correctly', () => {
    const view = renderer.create(<Input />);
    expect(view).toMatchSnapshot();
  });

  it('should dispatch action', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    render(<Input />);

    const inputElement = screen.getByPlaceholderText('New todo...');
    const linkElementButton = screen.getByText(/Save/i);
    const text = 'Entered Text';

    fireEvent.change(inputElement, { target: { value: text } });
    fireEvent.click(linkElementButton);

    expect(dispatch).toHaveBeenCalled();
    expect(mockedAddTodo).toHaveBeenCalledWith(text);
  });

  it('should not dispatch action for empty todo title', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    render(<Input />);

    const inputElement = screen.getByPlaceholderText('New todo...');
    const linkElementButton = screen.getByText(/Save/i);
    const text = '';

    fireEvent.change(inputElement, { target: { value: text } });
    fireEvent.click(linkElementButton);

    expect(dispatch).not.toHaveBeenCalled();
    expect(mockedAddTodo).not.toHaveBeenCalled();
  });
});
