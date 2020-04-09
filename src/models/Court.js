const mongoose = require('mongoose');

const CourtSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  sports: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Court', CourtSchema);