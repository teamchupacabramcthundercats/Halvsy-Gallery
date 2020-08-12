/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MainViewImage from '../../../client/src/components/MainViewImage';

const sampleImage = {
  full: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/044.jpg',
  small: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/small/044-sm.jpg',
  thumbnail: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/thumbnail/044-tn.jpg',
};

test('MainViewImage should render an image', () => {
  const mainViewImage = shallow(
    <MainViewImage
      counter={0}
      image={sampleImage}
      display="inline-block"
    />
  );
  expect(mainViewImage.is('img')).toBe(true);
});
