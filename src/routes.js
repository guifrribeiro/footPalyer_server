const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const CourtController = require('./controllers/CourtController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Sessions routes
routes.post('/sessions', SessionController.store);

// Courts routes
routes.get('/courts', CourtController.index);
routes.post('/courts', upload.single('thumbnail'), CourtController.store);

// Dashboards routes
routes.get('/dashboard', DashboardController.show);

routes.post('/courts/:id/bookings', BookingController.store);

module.exports = routes;