const Models = require('../../models');

const insert = {
  id: 10,
  Name: 'Rides',
  Author: 'Rider',
  rating: 3.4,
};

describe('Checking functionality of ', () => {
  it('insert function and that it is idempotent', async () => {
    await Models.books.insert(insert.id, insert.Name, insert.Author, insert.rating);
    let count = await Models.books.findAll({
      where: {
        id: insert.id,
      },
    });
    expect(count.length).toEqual(1);
    try {
      await Models.books.insert(insert.id, insert.Name, insert.Author, insert.rating);
    } catch (err) {}
    count = await Models.books.findAll({
      where: {
        id: insert.id,
      },
    });
    expect(count.length).toEqual(1);
    expect(count.length).not.toEqual(2);
  });
});
