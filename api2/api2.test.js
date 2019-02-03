const server = require('./api2.js');
const Models = require('../library/models');

describe('checking api2 ', () => {
  let count = 0;
  const getCount = async () => {
    count = await Models.books.countOfAllRecords();
  };
  it('inserts books idempotently in library table', async () => {
    const options = {
      method: 'GET',
      url: '/getAllBooks',
    };
    await server.inject(options);
    await server.inject(options);
    setTimeout(getCount, 4000);
    setTimeout(() => expect(count).toEqual(12), 5000);
  });
});
