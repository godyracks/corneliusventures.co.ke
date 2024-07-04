const pool = require('../config/db');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = require('../middleware/upload');

exports.getBlogs = async (req, res) => {
  try {
    let sql = 'SELECT * FROM blog';
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
      sql += ` ORDER BY id DESC LIMIT ${limit}`;
    } else {
      sql += ` ORDER BY id DESC`;
    }

    const [rows, fields] = await pool.query(sql);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createBlog = async (req, res) => {
  const { author, title, content, date } = req.body;
  const imageUrl = req.file ? `uploads/${req.file.filename}` : null;

  try {
    const [result] = await pool.query(
      'INSERT INTO blog (author, title, content, image_url, date) VALUES (?, ?, ?, ?, ?)',
      [author, title, content, imageUrl, date]
    );

    const newBlog = {
      id: result.insertId,
      author,
      title,
      content,
      imageUrl,
      date,
    };

    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    if (req.file) {
      fs.unlinkSync(path.join(__dirname, `../uploads/${req.file.filename}`));
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
