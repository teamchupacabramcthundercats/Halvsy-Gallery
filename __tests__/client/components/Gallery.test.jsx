/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Gallery from '../../../client/src/components/Gallery.jsx';
import MainView from '../../../client/src/components/MainView.jsx';

test('Gallery should render without throwing an error.', () => {
  const gallery = shallow(<Gallery />);
  expect(gallery.is('.gallery')).toBe(true);
})
