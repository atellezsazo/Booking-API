const express = require('express');
const { listBookings } = require('./uses_cases/list_bookings');

const app = express();

const start = options => new Promise((resolve, reject) => {
  if (!options.port) {
    reject('No error');
  }

  app.use((err, req, res, next) => {
    res.setHeader('charset', 'utf-8');
    res.setHeader('Content-Type', 'application/json');
    next();
  });

  app.get('/', (req, res) => {
    res.json({
      hello: 'Welcome',
      version: 'v1',
    });
  });

  app.get('/bookings', (req, res) => {
    listBookings((err, result) => {
      if (err) {
        res.status(err.code);
        return;
      }

      res.status(result.code).json(result.data);
    });
  });

  const server = app.listen(options.port, () => resolve(server));

});

module.exports = Object.assign({}, { start });
