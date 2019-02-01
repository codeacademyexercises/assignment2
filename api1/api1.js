const hapi = require('hapi');

const server = hapi.Server({
  host: 'localhost',
  port: 3030,
});

module.exports = server;
