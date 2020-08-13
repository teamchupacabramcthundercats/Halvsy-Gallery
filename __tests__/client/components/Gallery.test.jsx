/* eslint-disable */
import React, { useState } from 'react';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';

import Gallery from '../../../client/src/components/Gallery.jsx';

jest.mock('axios');
const useStateMock = jest.fn(useState);
const setStateMock = jest.fn();
useStateMock.mockImplementation((value) => [value, setStateMock]);

afterAll(() => {
  jest.restoreAllMocks();
})

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

describe('Gallery', () => {
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

})