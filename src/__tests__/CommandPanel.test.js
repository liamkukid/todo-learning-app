import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as todosActions from '../features/todosSlice';
import * as filterActions from '../features/filterSlice';
import CommandPanel from '../Components/CommandPanel/CommandPanel';

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('CommandPanel renders', () => {
  it('correctly with no todos', () => {
    const view = renderer.create(<CommandPanel />);
    expect(view).toMatchSnapshot();
  });

  it('correctly with only one todo', () => {
    mockedUseSelector.mockReturnValue(1);
    const view = renderer.create(<CommandPanel />);
    expect(view).toMatchSnapshot();
  });
});

describe('CommandPanel dispatch calls', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
  });

  it('set filter to showAll', () => {
    const mockedAction = jest.spyOn(filterActions, 'showAll');
    render(<CommandPanel />);
    const linkElementButton = screen.getByText('All');

    fireEvent.click(linkElementButton);

    expect(dispatch).toHaveBeenCalled();
    expect(mockedAction).toHaveBeenCalled();
  });

  it('set filter to filterActive', () => {
    const mockedAction = jest.spyOn(filterActions, 'filterActive');
    render(<CommandPanel />);
    const linkElementButton = screen.getByText('Active');

    fireEvent.click(linkElementButton);

    expect(dispatch).toHaveBeenCalled();
    expect(mockedAction).toHaveBeenCalled();
  });

  it('set filter to filterCompleted', () => {
    const mockedAction = jest.spyOn(filterActions, 'filterCompleted');
    render(<CommandPanel />);
    const linkElementButton = screen.getByText('Completed');

    fireEvent.click(linkElementButton);

    expect(dispatch).toHaveBeenCalled();
    expect(mockedAction).toHaveBeenCalled();
  });

  it('remove completed todos', () => {
    const mockedAction = jest.spyOn(todosActions, 'removeCompleted');
    render(<CommandPanel />);
    const linkElementButton = screen.getByText('Remove Completed');

    fireEvent.click(linkElementButton);

    expect(dispatch).toHaveBeenCalled();
    expect(mockedAction).toHaveBeenCalled();
  });
});
