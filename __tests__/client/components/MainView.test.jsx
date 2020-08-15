/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import MainView from '../../../client/src/components/MainView.jsx';


const sampleImages = [
  {
    "full": "https:/fec-gallery.s3-us-west-2.amazonaws.com/044.jpg",
    "small": "https:/fec-gallery.s3-us-west-2.amazonaws.com/small/044-sm.jpg",
    "thumbnail": "https:/fec-gallery.s3-us-west-2.amazonaws.com/thumbnail/044-tn.jpg"
  },
];

test('MainView should render without throwing an error.', () => {
  const mainView = shallow(<MainView 
    images={sampleImages} 
    currentImage={sampleImages[0]} 
    onClickToShowModal={() => undefined }
    isFavorite={false}
    toggleFavorite={() => {}}
  />);
  expect(mainView.is('.main-view')).toBe(true);
});