/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ThumbnailCarousel from '../../../client/src/components/ThumbnailCarousel';

afterAll(() => {
  jest.restoreAllMocks();
})

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

const onThumbnailClick = jest.fn();

describe('ThumbnailCarousel', () => {
  it('should render without error', () => {
    const thumbnailCarousel = shallow(
      <ThumbnailCarousel
        images={sampleImages}
        onClickHandler={onThumbnailClick}
        currentImage={sampleImages[0]}
      />
    );
    expect(thumbnailCarousel.is('.thumbnail-carousel-container')).toBe(true);
  });
  
  it('should render the ThumbnailList component', () => {
    const thumbnailCarousel = shallow(
      <ThumbnailCarousel
        images={sampleImages}
        onClickHandler={onThumbnailClick}
        currentImage={sampleImages[0]}
      />
    );
    
    expect(thumbnailCarousel.find('ThumbnailList').length).toBe(1);
  });

  it('should pass on the correct props', () => {
    const thumbnailCarousel = shallow(
      <ThumbnailCarousel
        images={sampleImages}
        onClickHandler={onThumbnailClick}
        currentImage={sampleImages[0]}
      />
    );
    
    expect(thumbnailCarousel.find('ThumbnailList').prop('images')).toEqual(sampleImages);
    expect(thumbnailCarousel.find('ThumbnailList').prop('onClickHandler')).toEqual(onThumbnailClick);
  });

  it('should scroll up when mouse over event is triggered', () => {
    const thumbnailCarousel = mount(
      <ThumbnailCarousel
        images={sampleImages}
        onClickHandler={onThumbnailClick}
        currentImage={sampleImages[0]}
      />
    );
    
    const scrollIntoViewMock = jest.fn();
    let targetId = '';
    let firstRun = true;
    jest.spyOn(global.document, 'getElementById').mockImplementation((id) => { 
      if (firstRun) {
        targetId = id;
        firstRun = false;
      }
      return { scrollIntoView: scrollIntoViewMock }
    });
    thumbnailCarousel.find('.thumbnail-scroll-up').props().onMouseOver();
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(targetId).toEqual('thumbnail-0');
  });

  it('should scroll down when mouse over event is triggered', () => {
    const thumbnailCarousel = mount(
      <ThumbnailCarousel
        images={sampleImages}
        onClickHandler={onThumbnailClick}
        currentImage={sampleImages[0]}
      />
    );
    
    const scrollIntoViewMock = jest.fn();
    let targetId = '';
    let firstRun = true;
    jest.spyOn(global.document, 'getElementById').mockImplementation((id) => { 
      if (!firstRun) {
        targetId = id;
      } else {
        firstRun = false;
      }
      return { scrollIntoView: scrollIntoViewMock }
    });
    thumbnailCarousel.find('.thumbnail-scroll-down').props().onMouseOver();
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(targetId).toEqual('thumbnail-1');
  });

});
