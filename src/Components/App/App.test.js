import renderer from 'react-test-renderer';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('renders correctly', () => {
    const view = renderer.create(<App />);
    expect(view).toMatchSnapshot();
  });
});
