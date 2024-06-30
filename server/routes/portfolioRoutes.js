// routes/portfolioRoutes.js

const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const upload = require('../middleware/upload');

// GET all portfolios
router.get('/', portfolioController.getPortfolios);

// POST a new portfolio
router.post('/', upload, portfolioController.createPortfolio);

module.exports = router;
