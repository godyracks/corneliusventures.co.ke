const express = require('express');
const { getAllServices, createService } = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Define your service routes
router.get('/', getAllServices);
router.post('/', protect, createService);

module.exports = router;
