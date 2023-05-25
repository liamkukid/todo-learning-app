import renderer from 'react-test-renderer';
import CommandPanel from '../Components/CommandPanel/CommandPanel';

jest.mock('react-redux');
it('renders correctly with no todos', () => {
  const tree = renderer.create(<CommandPanel />);
  expect(tree).toMatchSnapshot();
});
