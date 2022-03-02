const router = require('express').Router();
const { createBlog, getAllBlogs } = require('../../../controllers/blogController');

router.route('/')
    .post(createBlog)
    .get(getAllBlogs);

module.exports = router;