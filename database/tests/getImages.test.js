const { db } = require('../index.js');
const models = require('../models');

beforeAll(() => {
  db.connect();
})

afterAll(() => {
  db.end();
})

test('getImagesById returns an object', () => {
  return models.getImageById(1)
    .then((data) => {
      expect(data).toContainAllKeys(['id', 'name', 'is_favorite', 'images']);
    })
});

test('product.images should not be empty', () => {
  return models.getImageById(1)
    .then((data) => {
      expect(data.images).not.toHaveLength(0);
    })
})

test ('image entries should have full, small, and thumbnail keys', () => {
  return models.getImageById(1)
    .then((data) => {
      expect(data.images[0]).toContainAllKeys(['full', 'small', 'thumbnail']);
    })
})