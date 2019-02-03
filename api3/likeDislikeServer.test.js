const program = require('./likeDislikeServer.js');

const dislike = [
  1,
  [
    {
      id: 10,
      Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      Author: 'J K Rowling',
      rating: 4.45,
      like: 0,
      createdAt: '2019-02-03T04:31:44.563Z',
      updatedAt: '2019-02-03T11:41:23.677Z',
    },
  ],
];

const like = [
  1,
  [
    {
      id: 10,
      Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      Author: 'J K Rowling',
      rating: 4.45,
      like: 1,
      createdAt: '2019-02-03T04:31:44.563Z',
      updatedAt: '2019-02-03T11:52:33.480Z',
    },
  ],
];

describe('checking likeDislikeServer ', () => {
  it('is idempotent', async () => {
    const option1 = {
      method: 'PUT',
      url: '/like',
      payload: {
        id: 10,
      },
    };
    program.init();
    let response = await program.server.inject(option1);
    response = await program.server.inject(option1);
    expect([response.result[1].id, response.result[1].like]).toEqual([like[1].id, like[1].like]);
    const option2 = {
      method: 'PUT',
      url: '/dislike',
      payload: {
        id: 10,
      },
    };
    response = await program.server.inject(option2);
    response = await program.server.inject(option2);
    expect([response.result[1].id, response.result[1].like]).toEqual([dislike[1].id, dislike[1].like]);
  });
});
