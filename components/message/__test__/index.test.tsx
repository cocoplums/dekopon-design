import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../message';

it('renders correctly', () => {
  const component = renderer.create(<Message>Facebook</Message>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
