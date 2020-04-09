const Court = require('../models/Court');

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const courts = await Court.find({ user: user_id });

    return res.json(courts);
  }
}