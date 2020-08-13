/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ModalMainView from '../../../client/src/components/ModalMainView';

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

describe('ModalMainView', () => {
  it('renders without throwing an error', () => {
    const wrapper = shallow(<ModalMainView images={sampleImages} />);
    expect(wrapper.is('.modal-main-view')).toBe(true);
  })
});
