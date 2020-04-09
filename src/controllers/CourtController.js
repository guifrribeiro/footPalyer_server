const User = require('../models/User');
const Court = require('../models/Court');

module.exports = {
  // Courts index
  async index(req, res) {
    const { sport } = req.query;

    const courts = await Court.find({ sports: sport });

    return res.json(courts);
  },

  // Store a new court
  async store(req, res) {
    const { filename } = req.file;
    const { company, sports, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const court = await Court.create({
      user: user_id,
      thumbnail: filename,
      company,
      sports: sports.split(',').map(sport => sport.trim()),
      price
    })

    return res.json(court);
  }
};