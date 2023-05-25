import renderer from 'react-test-renderer';

import List from '../Components/TodosList/List';

jest.mock('react-redux');

it('renders correctly for empty List', () => {
  const tree = renderer.create(<List />);
  expect(tree).toMatchSnapshot();
});
