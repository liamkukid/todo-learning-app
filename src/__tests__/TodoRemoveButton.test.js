import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from '../features/todosSlice';
import TodoRemoveButton from '../Components/TodosList/TodoRemoveButton';

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedTodoRemove = jest.spyOn(actions, 'todoRemove');

describe('TodoRemoveButton', () => {
  const todoId = '14e520cd-63f2-485e-9b3b-072ce068554e';

  it('renders correctly', () => {
    const tree = renderer.create(<TodoRemoveButton todoId={todoId} />);
    expect(tree).toMatchSnapshot();
  });

  it('removes the todo', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    render(<TodoRemoveButton todoId={todoId} />);
    const linkElementButton = screen.getByTestId('todo-remove');

    fireEvent.click(linkElementButton);

    expect(dispatch).toHaveBeenCalled();
    expect(mockedTodoRemove).toHaveBeenCalledWith(todoId);
  });
});
