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
    full: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/045.jpg',
    small: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/small/045-sm.jpg',
    thumbnail: 'https:/fec-gallery.s3-us-west-2.amazonaws.com/thumbnail/045-tn.jpg',
  },
];

const setCurrentImageMock = jest.fn((image) => image);

describe('ModalMainView', () => {
  it('renders without throwing an error', () => {
    const wrapper = shallow(<ModalMainView 
      images={sampleImages} 
      currentImage={sampleImages[0]}
      setCurrentImage={setCurrentImageMock}
    />);
    expect(wrapper.is('.modal-main-view')).toBe(true);
  })

  it('changes the image when left arrow is clicked', () => {
    const wrapper = shallow(<ModalMainView 
      images={sampleImages} 
      currentImage={sampleImages[0]}
      setCurrentImage={setCurrentImageMock}
    />);
    const leftArrow = wrapper.find('#modal-left-arrow');
    leftArrow.simulate('click', { target: { id: 'modal-left-arrow' } });
    expect(setCurrentImageMock).toHaveReturnedWith(sampleImages[0]);
  });

  it('changes the image when right arrow is clicked', () => {
    const wrapper = shallow(<ModalMainView 
      images={sampleImages} 
      currentImage={sampleImages[0]}
      setCurrentImage={setCurrentImageMock}
    />);
    const leftArrow = wrapper.find('#modal-right-arrow');
    leftArrow.simulate('click', { target: { id: 'modal-right-arrow' } });
    expect(setCurrentImageMock).toHaveReturnedWith(sampleImages[1]);
  });
});
