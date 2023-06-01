import renderer from 'react-test-renderer';
import Button from './Button';

it('renders corretly for Button', () => {
  const tree = renderer.create(<Button title="name" onClick={() => {}} />);
  expect(tree).toMatchSnapshot();
});
