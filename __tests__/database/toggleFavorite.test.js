/* eslint-disable */
const { db } = require('../../database/index.js');
const { toggleFavorite } = require('../../database/models');

const queryAsyncMock = jest.spyOn(db, 'queryAsync');

afterAll(() => {
  jest.restoreAllMocks();
})

describe('toggleFavorite', () => {

  it('returns an object', () => {
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve([{ isFavorite: 0 }]);
    });
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve();
    });
  
    return toggleFavorite(1)
      .then((data) => {
        expect(data).toContainAllKeys(['isFavorite']);
      });
  });

  it('un-favorites if already a favorite', () => {
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve([{ isFavorite: 1 }]);
    });
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve();
    });
  
    return toggleFavorite(1)
      .then((data) => {
        expect((data).isFavorite).toBe(0);
      });
  });

  it('rejects if first query fails', () => {
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.reject(new Error('first query'));
    });

    expect(toggleFavorite(1)).rejects.toThrow('first query');
  })

  it('rejects if second query fails (is favorite)', () => {
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve([{ isFavorite: 1 }]);
    });
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.reject(new Error('is favorite'));
    });

    expect(toggleFavorite(1)).rejects.toThrow('is favorite');
  })

  it('rejects if second query fails (is not favorite)', () => {
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.resolve([{ isFavorite: 0 }]);
    });
    queryAsyncMock.mockImplementationOnce(() => {
      return Promise.reject(new Error('is not favorite'));
    });

    expect(toggleFavorite(1)).rejects.toThrow('is not favorite');
  })

})