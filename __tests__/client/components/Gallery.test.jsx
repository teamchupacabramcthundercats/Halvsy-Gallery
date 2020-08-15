/* eslint-disable */
import React, { useState as useStateMock , useReducer as useReducerMock } from 'react';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';

jest.mock('axios');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useReducer: jest.fn(),
}));

import Gallery from '../../../client/src/components/Gallery.jsx';

const sampleResponse = { data: {
    "id": 1,
    "name": "Chips",
    "is_favorite": 0,
    "images": [
      {
        "full": "https:/fec-gallery.s3-us-west-2.amazonaws.com/044.jpg",
        "small": "https:/fec-gallery.s3-us-west-2.amazonaws.com/small/044-sm.jpg",
        "thumbnail": "https:/fec-gallery.s3-us-west-2.amazonaws.com/thumbnail/044-tn.jpg"
      },
    ]
  }
};

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

describe('Gallery', () => {
  const setStateMock = jest.fn();
  const setReducerMock = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setStateMock]);
    useReducerMock.mockImplementation(init => [init, setReducerMock]);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it('should render without throwing an error.', () => {
    axios.get.mockResolvedValueOnce(sampleResponse);
    const gallery = shallow(<Gallery productId="1" />);
    expect(gallery.is('.gallery')).toBe(true);
  });
  
  it('should return an error if get request fails.', () => {
    axios.get.mockImplementation(() => Promise.reject("Error retreiving data"))
    const gallery = shallow(<Gallery productId="1" />);
    expect(gallery.text()).toBe('Loading...');
  });

  it('should execute setShowModal when onClickToShowModal is executed', () => {
    axios.get.mockResolvedValueOnce(sampleResponse);
    const gallery = shallow(<Gallery productId="1" />);
    gallery.find('.main-view').props().onClick()
    expect(setStateMock).toBeCalled();
  });

  it('should change currentMainView on thumbnail click', () => {
    useReducerMock.mockImplementation(init => [{ 
      product: sampleResponse.data, 
      currentMainView: sampleImages[0], 
      modalImage: sampleImages[0],
    }, setReducerMock]);
    axios.get.mockResolvedValueOnce(sampleResponse);
    const gallery = mount(<Gallery productId="1" />);
    gallery.find('#thumbnail-0').props().onClick({ target: { id: "string-1"} })
    expect(setReducerMock).toBeCalled();
  });

})