/* eslint-disable no-undef */
/* eslint-env mocha */
require('dotenv').config();

const { assert, expect } = require('chai');
const { listBookings } = require('../../src/API/uses_cases/list_bookings');

describe('API Integration Test:', () => {
  beforeEach((done) => {
    delete process.env.DB;
    done();
  });
  it('[SAD] List_bookings - Get internal server error', () => {
    listBookings((err) => {
      assert.equal(err.code, 500);
    });
  });
});

describe('API Integration Test:', () => {
  beforeEach((done) => {
    process.env.DB = 'bookings';
    done();
  });
  it('[HAPPY] List_bookings - Get a valid json data', () => {
    listBookings((err, result) => {
      assert.equal(result.code, 200);
      expect(result.data).to.not.be.empty;
    });
  });
});
