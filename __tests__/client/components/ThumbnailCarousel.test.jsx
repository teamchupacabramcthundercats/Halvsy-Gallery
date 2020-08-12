/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ThumbnailCarousel from '../../../client/src/components/ThumbnailCarousel';

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
]

const onThumbnailClick = () => {
  console.log('click!');
}

describe('ThumbnailCarousel', () => {
  it('should render without error', () => {
    const thumbnailCarousel = shallow(
      <ThumbnailCarousel
        images={sampleImages}
        onClickHandler={onThumbnailClick}
      />
    );
    expect(thumbnailCarousel.is('.thumbnail-carousel-container')).toBe(true);
  });
  
  it('should render the ThumbnailList component', () => {
    const thumbnailCarousel = shallow(
      <ThumbnailCarousel
        images={sampleImages}
        onClickHandler={onThumbnailClick}
      />
    );
    // console.log(thumbnailCarousel.find('ThumbnailList').length.debug())
    expect(thumbnailCarousel.find('ThumbnailList').length).toBe(1);
  });

  it('should pass on the correct props', () => {
    const thumbnailCarousel = shallow(
      <ThumbnailCarousel
        images={sampleImages}
        onClickHandler={onThumbnailClick}
      />
    );
    // console.log(thumbnailCarousel.find('ThumbnailList').length.debug())
    expect(thumbnailCarousel.find('ThumbnailList').prop('images')).toEqual(sampleImages);
    expect(thumbnailCarousel.find('ThumbnailList').prop('onClickHandler')).toEqual(onThumbnailClick);
  });

});
