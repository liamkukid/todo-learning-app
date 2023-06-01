import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from '../../features/todosSlice';
import TodoDoneCheckbox from './TodoDoneCheckbox';

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedTodoDone = jest.spyOn(actions, 'todoDone');

describe('TodoDoneCheckbox', () => {
  const todo = {
    title: 'todo 1',
    done: false,
    id: '14e520cd-63f2-485e-9b3b-072ce068554e',
  };

  it('renders correctly', () => {
    const view = renderer.create(<TodoDoneCheckbox todo={todo} />);
    expect(view).toMatchSnapshot();
  });

  it('change the state of todo done=true', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    render(<TodoDoneCheckbox todo={todo} />);
    const linkElementButton = screen.getByTestId('todo-checkbox');

    fireEvent.click(linkElementButton);

    expect(dispatch).toHaveBeenCalled();
    expect(mockedTodoDone).toHaveBeenCalledWith({ id: todo.id, done: true });
  });
});
