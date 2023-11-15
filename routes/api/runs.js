const router = require('express').Router();
const runsController = require('../../controllers/runsController');

router.route('/')
    .post(runsController.create)
    .get(runsController.findAll);