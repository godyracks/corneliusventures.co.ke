const pool = require('../config/db');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = require('../middleware/upload');

exports.getPortfolios = async (req, res) => {
  try {
    let sql = 'SELECT * FROM projects';
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
      sql += ` ORDER BY id DESC LIMIT ${limit}`;
    } else {
      sql += ` ORDER BY id DESC`;
    }

    const [rows, fields] = await pool.query(sql);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createPortfolio = async (req, res) => {
  const { name, description, startDate, completeDate, status } = req.body;
  const imageUrl = req.file ? `uploads/${req.file.filename}` : null;

  try {
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
      status,
    };

    res.status(201).json(newPortfolio);
  } catch (error) {
    console.error('Error creating portfolio:', error);
    if (req.file) {
      fs.unlinkSync(path.join(__dirname, `../uploads/${req.file.filename}`));
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
