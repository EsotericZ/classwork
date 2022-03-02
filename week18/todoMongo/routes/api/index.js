const router = require('express').Router();
const blogRoutes = require('./blog')
const userRoutes = require('./user')
const todoRoutes = require('./todo')

router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);
router.use('/todos', todoRoutes);

module.exports = router;