import renderer from 'react-test-renderer';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../App';
import store from '../Redux/store';

// import { renderWithProviders } from './utils/test-utils';

const mockStore = configureStore([]);

test('renders button', () => {
  // renderWithProviders(<App />);
  // const store = mockStore();
  const view = renderer(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Save/i);
  expect(linkElement).toBeInTheDocument();
});

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
