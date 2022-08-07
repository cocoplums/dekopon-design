import React from 'react';
import renderer from 'react-test-renderer';
import Tooltip from '../tooltip';

it('renders correctly', () => {
  const component = renderer.create(<Tooltip>Facebook</Tooltip>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
