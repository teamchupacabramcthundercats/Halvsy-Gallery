/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';

import Gallery from '../../../client/src/components/Gallery.jsx';
// import MainView from '../../../client/src/components/MainView.jsx';

jest.mock('axios');

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

test('Gallery should render without throwing an error.', () => {
  axios.get.mockResolvedValue(sampleResponse);
  const gallery = shallow(<Gallery productId="1" />);
  expect(gallery.is('.gallery')).toBe(true);
});