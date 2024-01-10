const router = require('express').Router();
const userRoutes = require('./user')
const runRoutes = require('./runs')

// middleware - all requests - dont stop here, move to the next request
router.use((next: any) => {
    next();
})

// routes that end in /api/runs & ...
router.use('/runs', runRoutes);
router.use('/user', userRoutes);

module.exports = router;
export {}