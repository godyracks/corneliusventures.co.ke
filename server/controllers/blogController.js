const pool = require('../config/db');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = require('../middleware/upload');

exports.getBlogs = async (req, res) => {
    try {
      let sql = 'SELECT id, author, title, SUBSTRING_INDEX(content, " ", 20) AS content, image_url, date FROM blog';
      const limit = parseInt(req.query.limit) || 3; // Default limit to 3 if not provided
  
      sql += ` ORDER BY id DESC LIMIT ${limit}`;
  
      const [rows, fields] = await pool.query(sql);
      res.json(rows);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.getBlogById = async (req, res) => {
    const blogId = req.params.id;
  
    try {
      const [rows, fields] = await pool.query('SELECT * FROM blog WHERE id = ?', [blogId]);
  
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Blog not found' });
      }
  
      const blog = rows[0];
      res.json(blog);
    } catch (error) {
      console.error(`Error fetching blog with ID ${blogId}:`, error);
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
