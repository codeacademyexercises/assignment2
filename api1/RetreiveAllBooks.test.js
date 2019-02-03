const https = require('https');
const program = require('./RetreiveAllBooks.js');

const result = { books: [{ Author: 'J K Rowling', id: 10, Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)' }, { Author: 'J K Rowling', id: 20, Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)' }, { Author: 'Sidney Sheldon', id: 80, Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)' }, { Author: 'Sidney Sheldon', id: 100, Name: 'Tell Me Your Dreams' }, { Author: 'J K Rowling', id: 30, Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)' }, { Author: 'J K Rowling', id: 40, Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)' }, { Author: 'Sidney Sheldon', id: 90, Name: 'Master of the Game' }, { Author: 'Sidney Sheldon', id: 110, Name: 'The Other Side of Midnight (Midnight #1)' }, { Author: 'J K Rowling', id: 50, Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)' }, { Author: 'J K Rowling', id: 60, Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)' }, { Author: 'J K Rowling', id: 70, Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)' }, { Author: 'Sidney Sheldon', id: 120, Name: 'Rage of Angels' }] };
const ratings = {
  30: 4.54,
  100: 3.93,
  60: 4.54,
  50: 4.47,
  10: 4.45,
  40: 4.53,
  20: 4.38,
  120: 3.92,
  70: 4.62,
  110: 3.9,
  90: 4.1,
  80: 4.02,
};
describe('Checking ', () => {
  let data = '';
  const display = (response) => {
    response.on('data', (chunks) => {
      data += chunks;
    });
    response.on('end', () => {
      data = JSON.parse(data);
      expect(data).toEqual(result);
      data.books.forEach((element) => {
        const rateBook = (response2) => {
          let rate = '';
          response2.on('data', (chunks) => {
            rate += chunks;
          });
          response2.on('end', () => {
            rate = JSON.parse(rate);
            expect(rate.rating).toEqual(ratings[element.id]);
            console.log(rate.rating, ratings[element.id]);
          });
        };
        https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${element.id}`, rateBook);
      });
    });
  };
  it('data returned by api1 is correct as given in example and ratings are returned by api2', () => {
    program.fetchBooks('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', display);
  });
});
