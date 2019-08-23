const database = require('./config/database');
const server = require('./src/API/server');

database.connection();

server.start({
  port: 3000
});
