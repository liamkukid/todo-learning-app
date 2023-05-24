import renderer from 'react-test-renderer';

import TodoRemoveButton from '../Components/TodosList/TodoRemoveButton';

jest.mock('react-redux');

it('renders correctly for TodoRemoveButton', () => {
  const todoId = '14e520cd-63f2-485e-9b3b-072ce068554e';
  const tree = renderer.create(<TodoRemoveButton todoId={todoId} />);
  expect(tree).toMatchSnapshot();
});
