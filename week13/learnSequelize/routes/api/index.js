const router = require('express').Router();
const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');
const todoRoutes = require('./todoRoutes');

router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/todos', todoRoutes);

module.exports = router;