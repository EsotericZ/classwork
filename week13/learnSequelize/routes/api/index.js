const router = require('express').Router();
const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');

// Every route declared in this index.js will have /api prepended automatically
router.use('/books', bookRoutes);
router.use('/users', userRoutes);

module.exports = router;