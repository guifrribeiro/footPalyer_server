const User = require('../models/User');
const Court = require('../models/Court');

module.exports = {
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