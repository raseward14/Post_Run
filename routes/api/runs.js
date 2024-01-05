const router = require('express').Router();
const runsController = require('../../controllers/runsController');

// middleware to use with all requestes
router.use((req, res, next) => {
    next();
})

// http://localhost:3000/api/runs
router.route('/')
    .post(runsController.create)
    .get(runsController.findAll);

// http://localhost:3000/api/runs/:id
router.route('/:id')
    .get(runsController.find);

module.exports = router;