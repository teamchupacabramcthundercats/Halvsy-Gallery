/* eslint-disable */
const { db } = require('../../database/index.js');
const { getImageById } = require('../../database/models');

const queryAsyncMock = jest.spyOn(db, 'queryAsync');

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

afterAll(() => {
  jest.restoreAllMocks();
})

describe('getImagesById', () => {
  it('getImageById returns an object', () => {
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve([{ id: 0, name: 'name', isFavorite: 0}]);
    });
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve(sampleImages);
    });

    return expect(getImageById(1)).resolves.toContainAllKeys(['id', 'name', 'isFavorite', 'images']);
  });
  
  it('product.images should not be empty', () => {
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve([{ id: 0, name: 'name', isFavorite: 0}]);
    });
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve(sampleImages);
    });

    return expect(getImageById(1)).resolves.toHaveProperty('images', sampleImages);
    
  });

  it('should handle errors', () => {
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.reject(new Error('failed'));
    });
  
    expect(getImageById(1)).rejects.toThrow('failed');
  });

});

