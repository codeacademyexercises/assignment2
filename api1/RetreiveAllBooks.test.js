const program = require('./RetreiveAllBooks.js');

const result = { books: [{ Author: 'J K Rowling', id: 10, 'Name': 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)' }, { 'Author': 'J K Rowling', id: 20, Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)' }, { 'Author': 'Sidney Sheldon', id: 80, Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)' }, { Author: 'Sidney Sheldon', 'id': 100, Name: 'Tell Me Your Dreams' }, { 'Author': 'J K Rowling', id: 30, Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)' }, { 'Author': 'J K Rowling', id: 40, 'Name': 'Harry Potter and the Goblet of Fire (Harry Potter, #4)' }, { Author: 'Sidney Sheldon', 'id': 90, 'Name': 'Master of the Game' }, { 'Author': 'Sidney Sheldon', 'id': 110, Name: 'The Other Side of Midnight (Midnight #1)' }, { 'Author': 'J K Rowling', 'id': 50, 'Name': 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)' }, { Author: 'J K Rowling', id: 60, Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)' }, { Author: 'J K Rowling', 'id': 70, Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)' }, { 'Author': 'Sidney Sheldon', id: 120, Name: 'Rage of Angels' }] };

describe('Checking ', () => {
  it('data returned by api1 is correct as given in example', async () => {
    expect(data).toEqual(result);
  });
});
