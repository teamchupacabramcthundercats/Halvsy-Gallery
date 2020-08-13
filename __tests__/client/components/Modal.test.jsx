/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Modal from '../../../client/src/components/Modal';

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

let showModalMock = false;
const setShowModalMock = jest.fn((newValue) => { 
  showModalMock = newValue;
})

describe('Modal', () => {
  it('should render without any errors', () => {
    const wrapper = shallow(
      <Modal 
        images={sampleImages}
        currentImage={sampleImages[0]}
        setCurrentImage={() => {}}
        showModal={showModalMock} 
        setShowModal={setShowModalMock} 
      />
    );

    expect(wrapper.is('.modal')).toBe(true);
  });

  it('should not initially be visible', () => {
    const wrapper = shallow(
      <Modal 
        images={sampleImages}
        currentImage={sampleImages[0]}
        setCurrentImage={() => {}}
        showModal={showModalMock} 
        setShowModal={setShowModalMock} 
      />
    );

    expect(wrapper.is('.hidden-modal')).toBe(true);
  });

  it('when hidden, should toggle visibility when clicked', () => {
    const wrapper = shallow(
      <Modal 
        images={sampleImages}
        currentImage={sampleImages[0]}
        setCurrentImage={() => {}}
        showModal={showModalMock} 
        setShowModal={setShowModalMock} 
      />
    );

    wrapper.simulate('click');
    expect(wrapper.is('.hidden-modal')).toBe(false);
  });

  it('when visible, should toggle visibility when clicked', () => {
    const wrapper = shallow(
      <Modal 
        images={sampleImages}
        currentImage={sampleImages[0]}
        setCurrentImage={() => {}}
        showModal={showModalMock} 
        setShowModal={setShowModalMock} 
      />
    );

    wrapper.simulate('click');
    expect(wrapper.is('.hidden-modal')).toBe(false);
    wrapper.simulate('click');
    expect(wrapper.is('.hidden-modal')).toBe(true);
  });

  it('should become visible when showModal prop is true', () => {
    const wrapper = shallow(
      <Modal 
        images={sampleImages}
        currentImage={sampleImages[0]}
        setCurrentImage={() => {}}
        showModal={!showModalMock} 
        setShowModal={setShowModalMock} 
      />
    );

    expect(wrapper.is('.hidden-modal')).toBe(false);
  });

});
