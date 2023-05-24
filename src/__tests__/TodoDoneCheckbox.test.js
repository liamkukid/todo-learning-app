import renderer from 'react-test-renderer';

import TodoDoneCheckbox from '../Components/TodosList/TodoDoneCheckbox';

jest.mock('react-redux');

it('renders correctly for TodoDoneCheckbox', () => {
  const todo = {
    id: '14e520cd-63f2-485e-9b3b-072ce068554e',
    done: false,
  };
  const tree = renderer.create(<TodoDoneCheckbox todo={todo} />);
  expect(tree).toMatchSnapshot();
});
