const pool = require('../config/db');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = require('../middleware/upload'); // Assuming upload middleware is correctly configured


// Get all portfolios with optional limit and order by descending
exports.getPortfolios = async (req, res) => {
  try {
    let sql = 'SELECT * FROM projects';
    const limit = parseInt(req.query.limit); // Parse limit query parameter as integer

    if (!isNaN(limit) && limit > 0) {
      sql += ` ORDER BY id DESC LIMIT ${limit}`;
    } else {
      sql += ` ORDER BY id DESC`; // Default to DESC order if no limit is provided
    }

    const [rows, fields] = await pool.query(sql);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new portfolio with a single image upload
exports.createPortfolio = async (req, res) => {
    const { name, description, startDate, completeDate, status } = req.body;
    const imageUrl = req.file ? `uploads/${req.file.filename}` : null; // Assuming single file upload

    try {
        // Insert portfolio data into database
        const [result] = await pool.query(
            'INSERT INTO projects (name, description, image1_url, start_date, complete_date, status) VALUES (?, ?, ?, ?, ?, ?)',
            [name, description, imageUrl, startDate, completeDate, status]
        );

        const newPortfolio = {
            id: result.insertId,
            name,
            description,
            imageUrl,
            startDate,
            completeDate,
            status
        };

        res.status(201).json(newPortfolio);
    } catch (error) {
        console.error('Error creating portfolio:', error);
        // Clean up uploaded file if insertion fails
        if (req.file) {
            fs.unlinkSync(path.join(__dirname, `../uploads/${req.file.filename}`));
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
