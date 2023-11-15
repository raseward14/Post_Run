const router = require('express').Router();

const runRoutes = require('./runs')

// middleware - all requests - dont stop here, move to the next request
router.use((req, res, next) => {
    next();
})

// routes that end in /api/runs & ...
router.use('/runs', runRoutes);

module.exports = router;