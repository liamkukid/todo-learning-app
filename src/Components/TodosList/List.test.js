import renderer from 'react-test-renderer';
import * as reduxHooks from 'react-redux';
import List from './List';

jest.mock('react-redux');

const todos = [
  {
    title: 'todo 1',
    done: true,
    id: 'todo_1_id',
  },
  {
    title: 'todo 2',
    done: false,
    id: 'todo_2_id',
  },
];
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('List renders', () => {
  it('correctly with no todos', () => {
    const tree = renderer.create(<List />);
    expect(tree).toMatchSnapshot();
  });

  it('correctly with todos', () => {
    mockedUseSelector.mockReturnValue(todos);
    const tree = renderer.create(<List />);
    expect(tree).toMatchSnapshot();
  });
});
