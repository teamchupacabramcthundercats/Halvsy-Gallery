/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ModalMainViewImage from '../../../client/src/components/ModalMainViewImage';

const sampleImages = [
  {
    full: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/044.jpg',
    small: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/small/044-sm.jpg',
    thumbnail: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/thumbnail/044-tn.jpg',
  },
  {
    full: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/044.jpg',
    small: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/small/044-sm.jpg',
    thumbnail: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/thumbnail/044-tn.jpg',
  },
];

describe('ModalMainViewImage', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<ModalMainViewImage image={sampleImages[0]} counter={0} display={'inline-block'} />)
    expect(wrapper.children('img').is('.modal-main-image')).toBe(true);
  });
});