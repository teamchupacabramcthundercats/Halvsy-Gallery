const { db } = require('../../database/connection.js');

const validQuery = 'SELECT * FROM products';
const invalidQuery = 'SELECT nothing FROM invalid';
const sampleValidResponse = { valid: true };
const mockQuery = jest.spyOn(db, 'query');

mockQuery.mockImplementation((query, callback) => {
  if (query === 'SELECT * FROM products') {
    callback(null, sampleValidResponse);
  } else {
    callback('error');
  }
});

afterAll(() => {
  mockQuery.mockRestore();
})

test('db should be an instance of mysql', () => {
  expect(db.query).toBeFunction();
});

test('db should have a queryAsync method', () => {
  expect(db.query).toBeFunction();
});

test('db.queryAsync should return a valid response', () => {
  expect(db.queryAsync(validQuery)).toResolve();
});

test('db should have a queryAsync method', () => {
  expect(db.queryAsync(invalidQuery)).toReject();
});