const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const CourtController = require('./controllers/CourtController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/courts', upload.single('thumbnail'), CourtController.store);

module.exports = routes;