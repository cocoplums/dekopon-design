import React from 'react';
import renderer from 'react-test-renderer';
import Select from '../select';

it('renders correctly', () => {
  const component = renderer.create(<Select>1</Select>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
