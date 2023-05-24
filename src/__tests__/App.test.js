import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('react-redux');

it('renders correctly for App', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
