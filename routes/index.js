const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

router.get('/', (req, res) => {
    res.json({
        message: 'welcome to the post run api!'
    })
});

router.use('/api', apiRoutes);

// in development, proxy to http://localhost:3000
// if the route doesn't end in /api, send the index.html of the build file
// happens when we call third party api's
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

module.exports = router;