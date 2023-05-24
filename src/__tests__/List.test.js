import renderer from 'react-test-renderer';

import { useSelector } from '../__mocks__/react-redux';
import List from '../Components/TodosList/List';

const todos = [
  {
    title: 'todo 1',
    id: '14e520cd-63f2-485e-9b3b-072ce068554e',
    done: false,
  },
  {
    title: 'todo 2',
    id: 'ca55ddf3-367b-47ac-8c74-0a8dbd6ee9b8',
    done: true,
  },
];
jest.mock('react-redux');

it('renders correctly for empty List', () => {
  const tree = renderer.create(<List />);
  expect(tree).toMatchSnapshot();
});

it('renders correctly for not empty List', () => {
  useSelector.mockReturnValue(todos);
  const tree = renderer.create(<List />);
  expect(tree).toMatchSnapshot();
});
