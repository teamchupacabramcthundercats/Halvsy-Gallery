/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ModalThumbnailCarouselItem from '../../../client/src/components/ModalThumbnailCarouselItem'

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

describe('ModalThumbnailCarouselItem', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(
      <ModalThumbnailCarouselItem 
        id={0}
        image={sampleImages[0]}
        onClickHandler={() => {}}
        sizeClass="thumb-lg"
      />
    );

    expect(wrapper.find('#thumbnail-0')).toHaveLength(1);
  });
});