const { models } = require('../../infrastructure/database');
const { BookingEntity } = require('../entities/booking');

// Rebuild pure entities
const rebuildEntity = (record) => {
  const booking = new BookingEntity({
    id: record.id,
    status: record.status,
  });

  return booking;
};

const rebuildMany = (records) => {
  if (records) {
    return records.map(record => rebuildEntity(record));
  }
  return [];
};

// ----- Data persistence

const allConfirmed = async () => {
  const query = {
    include: [{ all: true, nested: true }],
    where: {
      status: 'confirmed',
    },
  };

  const bookings = await models.Booking.findAll(query);
  return rebuildMany(bookings);
};

exports.BookingsRepository = {
  allConfirmed,
};
