/* eslint-disable no-undef */
const Sequalize = require('sequelize');

exports.connection = () => (
  new Sequalize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASS, {
      dialect: 'mysql',
      logging: false,
      host: process.env.DB_HOST,
    },
  ));

