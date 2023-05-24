import renderer from 'react-test-renderer';

import { useSelector } from '../__mocks__/react-redux';
import CommandPanel from '../Components/CommandPanel/CommandPanel';

jest.mock('react-redux');

it('renders correctly with no todos', () => {
  useSelector.mockReturnValue(0);
  const tree = renderer.create(<CommandPanel />);
  expect(tree).toMatchSnapshot();
});

it('renders correctly with todos', () => {
  useSelector.mockReturnValue(1);
  const tree = renderer.create(<CommandPanel />);
  expect(tree).toMatchSnapshot();
});
