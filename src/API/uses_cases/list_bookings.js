const httpStatus = require('http-status');
const { BookingsRepository } = require('../../domain/repository/bookings');

const getConfirmedBookings = async () => {
  try {
    const bookings = await BookingsRepository.allConfirmed();
    if (!bookings) {
      return {
        code: httpStatus.NO_CONTENT
      }
    }

    return {
      code: httpStatus.OK,
      data: { bookings }
    }

  } catch (err) {
    throw new Error('Internal server error');
  }
};

async function listBookings(callback) {
  try {
    // 0. Get Bookings
    const response = await getConfirmedBookings();
    return callback(null, response);
  } catch (err) {
    return callback({
      code: httpStatus.INTERNAL_SERVER_ERROR,
    });
  }
}

exports.listBookings = listBookings;
