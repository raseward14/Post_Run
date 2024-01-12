const router = require('express').Router();
const runsController = require('../../controllers/runsController');

// middleware to use with all requestes
router.use((req: any, res: any, next: any) => {
    next();
})

// http://localhost:3001/api/runs
router.route('/')
    .post(runsController.create)
    .get(runsController.findAll);
    // .get(runsController.findByUserId);

// http://localhost:3001/api/runs/:id
router.route('/:id')
    .get(runsController.findRun);

module.exports = router;
export {}