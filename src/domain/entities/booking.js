const { attributes } = require('structure');

exports.BookingEntity = attributes({
  id: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
})(class BookingEntity {

});
