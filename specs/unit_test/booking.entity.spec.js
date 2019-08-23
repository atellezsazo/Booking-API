/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const chai = require('chai');
const { BookingEntity } = require('../../src/domain/entities/booking');

const { assert } = chai;

describe('[Booking Entity] Unit Test: Create Booking Entity', () => {
  it('HAPPY: should return a booking entity', () => {
    const booking = new BookingEntity({
      id: 1,
      status: 'confirmed'
    });

    const booking2 = new BookingEntity({
      id: 2,
      status: 'unconfirmed'
    });

    assert.equal(booking.id, 1);
    assert.equal(booking.status, 'confirmed');

    assert.equal(booking2.id, 2);
    assert.equal(booking2.status, 'unconfirmed');
  });
});
