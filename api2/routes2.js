const https = require('https');
const Models = require('../library/models');

let data = '';

const fetchAndPushIntoBooks = (response) => {
  data = '';
  response.on('data', (chunks) => {
    data += chunks;
  });
  response.on('end', () => {
    console.log('hi');
    data = JSON.parse(data);
    console.log('hi');
    data.books.forEach((element) => {
      let rate = '';
      const getRating = (response2) => {
        response2.on('data', (chunks) => {
          rate += chunks;
        });
        response2.on('end', () => {
          rate = JSON.parse(rate);
          element.rating = rate.rating;
          try {
            Models.books.insert(element.id, element.Name, element.Author, element.rating);
          } catch (err) {
            // console.log(err.message);
          }
        });
      };
      https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${element.id}`, getRating);
    });
  });
};

const insertBooks = async (request, h) => {
  https.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', fetchAndPushIntoBooks);
  return 'Updated DB with new Books!';
};

module.exports = { method: 'GET', path: '/getAllBooks', handler: insertBooks };
