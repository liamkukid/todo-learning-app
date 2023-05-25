import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../Components/Input';

jest.mock('react-redux');

it('renders correctly for Input', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
