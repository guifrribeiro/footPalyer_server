const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String, // Update to Date
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  court: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Court'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);