/* eslint-disable no-unused-expressions */
/* eslint-env mocha */
require('dotenv').config();

const chai = require('chai');
const { BookingsRepository } = require('../../src/domain/repository/bookings');
const { assert, expect } = chai;

describe('[Booking Repository] Unit Test: Return Booking Entities', () => {
  it('HAPPY: should return 2 bookings entities', async () => {
    const bookings = await BookingsRepository.allConfirmed();
    expect(bookings).to.not.be.empty;
    assert.equal(bookings.length, 2);
  });
});
