const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { court_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      court: court_id,
      date,
    });

    await booking.populate('court').populate('user').execPopulate();

    return res.json(booking);
  }
};