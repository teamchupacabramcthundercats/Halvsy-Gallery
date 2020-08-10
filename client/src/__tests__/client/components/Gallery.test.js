/* eslint-disable */
const React = require('react');
const { shallow, mount, render } = require('enzyme');

const { Gallery } = require('../../../components/Gallery.jsx');
const { MainView }= require('../../../components/MainView.jsx');

test('Gallery should render without throwing an error.', () => {
  console.log(Gallery);
  const gallery = shallow(<Gallery />);
  expect(gallery.is('.gallery')).toBe(true);
})
