/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ModalThumbnailCarousel from '../../../client/src/components/ModalThumbnailCarousel';

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

describe('ModalThumbnailCarousel', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(
      <ModalThumbnailCarousel 
        images={sampleImages}
        onClickHandler={() => {}}
      />
    );

    expect(wrapper.is('.modal-thumbnail-carousel')).toBe(true);
  });
});