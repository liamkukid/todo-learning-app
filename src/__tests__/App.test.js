import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../Redux/store';

describe('App', () => {
  it('renders correctly', () => {
    const output = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(output).toMatchSnapshot();
  });
});
