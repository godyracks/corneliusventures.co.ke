// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const upload = require('../middleware/upload');

// GET all blogs
router.get('/', blogController.getBlogs);

// POST a new blog
router.post('/', upload, blogController.createBlog);

module.exports = router;
