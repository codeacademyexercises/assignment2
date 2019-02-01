const hapi = require('hapi');
const https = require('https');
const route1 = require('./route1.js');
const server = require('./api1.js');

let data = '';
const dataGroupedByAuthor = {};
count = 0;

const showAllBooks = (request, h) => {
  const ordered = {};
  Object.keys(dataGroupedByAuthor).sort().forEach((key) => {
    ordered[key] = dataGroupedByAuthor[key];
  });
  return ordered;
};

const init = async () => {
  await server.start();
};

const display = (response) => {
  response.on('data', (chunks) => {
    data += chunks;
  });
  response.on('end', () => {
    data = JSON.parse(data);
    const length = data.books.length;
    // console.log(data);
    data.books.map((element) => {
      let rate = '';
      const rateBook = (response2) => {
        response2.on('data', (chunks) => {
          rate += chunks;
        });
        response2.on('end', () => {
          rate = JSON.parse(rate);
          element.rating = rate.rating;
          count += 1;
          if (dataGroupedByAuthor[element.Author] === undefined) {
            dataGroupedByAuthor[element.Author] = [];
            dataGroupedByAuthor[element.Author].push(element);
          } else {
            dataGroupedByAuthor[element.Author].push(element);
          }
          if (count === length) {
            // console.log(dataGroupedByAuthor);
            server.route({
              method: 'GET',
              path: '/allBooks',
              handler: showAllBooks,
            });
            init();
          }
        });
      };
      https.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${element.id}`, rateBook);
    });
    // console.log(dataGroupedByAuthor);
  });
};

// const fetchBooks = (url, callback) => {
//   https.get(url, callback);
//   while(count!==)
// };
https.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', display);

// module.exports = { fetchBooks, dataGroupedByAuthor };
