const router = require('express').Router();
const bookRoutes = require('./bookRoutes');

// Every route declared in this index.js will have /api prepended automatically
router.use('/books', bookRoutes);

module.exports = router;