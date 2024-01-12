const router = require('express').Router();
const userController = require('../../controllers/userController');

// middleware to use with all requests
router.use((req: any, res: any, next: any) => {
    next();
})

module.exports = router;
export {}