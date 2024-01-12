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

// http://localhost:3001/api/runs/:id
router.route('/:id')
    .get(runsController.findRun);

// http://localhost:3001/api/runs/:user_id
router.route('/:user_id')
    .get(runsController.findByUserId);

module.exports = router;
export {}