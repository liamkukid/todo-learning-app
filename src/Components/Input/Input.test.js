import renderer from 'react-test-renderer';
import Input from './Input';

it('renders correctly for Input', () => {
  const tree = renderer.create(<Input />);
  expect(tree).toMatchSnapshot();
});
