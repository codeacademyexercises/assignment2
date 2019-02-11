const https = require('https');
const axios = require('axios');
const server = require('./api1.js');
const routes = require('../routes');

const display = async () => {
  let result;
  await routes.GetBooksWithRatingSorted().then((SortedBooks) => { result = SortedBooks; });
  return result;
};

server.route({
  method: 'GET',
  path: '/BooksWithRatings',
  handler: display,
});

const init = async () => {
  await server.start();
};
init();

process.on('SIGINT', () => {
  server.stop({ timeout: 10000 }).then((err) => {
    console.log(err);
    process.exit((err) ? 1 : 0);
  });
});
