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
}, {
  toJSON: {
    virtuals: true,
  },
});

CourtSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Court', CourtSchema);