const hapi = require('hapi');
const routes2 = require('./routes2.js');

const server = hapi.Server({
  host: 'localhost',
  port: 3003,
});

server.route(routes2);

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
