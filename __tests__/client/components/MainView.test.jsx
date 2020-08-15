/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import MainView from '../../../client/src/components/MainView.jsx';

const sampleImages = [
  {
    full: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/044.jpg',
    small: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/small/044-sm.jpg',
    thumbnail: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/thumbnail/044-tn.jpg',
  },
  {
    full: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/045.jpg',
    small: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/small/045-sm.jpg',
    thumbnail: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/thumbnail/045-tn.jpg',
  },
];

const setCurrentImageMock = jest.fn((image) => image);

describe('MainView', () => {

  it('should render without throwing an error.', () => {
    const mainView = shallow(<MainView 
      images={sampleImages} 
      currentImage={sampleImages[0]} 
      setCurrentImage={setCurrentImageMock}
      onClickToShowModal={() => undefined }
      isFavorite={false}
      toggleFavorite={() => {}}
    />);
    expect(mainView.is('.main-view')).toBe(true);
  });

  it('changes the image when left arrow is clicked', () => {
    const wrapper = shallow(<MainView 
      images={sampleImages} 
      currentImage={sampleImages[0]} 
      setCurrentImage={setCurrentImageMock}
      onClickToShowModal={() => undefined }
      isFavorite={false}
      toggleFavorite={() => {}}
    />);
    const leftArrow = wrapper.find('#main-left-arrow');
    leftArrow.simulate('click', { target: { id: 'main-left-arrow' } });
    expect(setCurrentImageMock).toHaveReturnedWith(sampleImages[0]);
  });

  it('changes the image when right arrow is clicked', () => {
    const wrapper = shallow(<MainView 
      images={sampleImages} 
      currentImage={sampleImages[0]} 
      setCurrentImage={setCurrentImageMock}
      onClickToShowModal={() => undefined }
      isFavorite={false}
      toggleFavorite={() => {}}
    />);
    const leftArrow = wrapper.find('#main-right-arrow');
    leftArrow.simulate('click', { target: { id: 'main-right-arrow' } });
    expect(setCurrentImageMock).toHaveReturnedWith(sampleImages[1]);
  });
});