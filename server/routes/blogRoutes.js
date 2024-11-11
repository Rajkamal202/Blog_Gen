const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/generate', blogController.generateBlog);
router.get('/blogs', blogController.getAllBlogs);

module.exports = router;