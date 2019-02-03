const hapi = require('hapi');
const routes3 = require('./routes3.js');

const server = hapi.Server({
  host: 'localhost',
  port: 3033,
});

server.route(routes3);

const init = async () => {
  await server.start();
};

if (!module.parent) {
  init();
}

module.exports = { server, init };
