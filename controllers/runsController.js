const db = require('');

module.exports = {
    create: (req, res) => {
        res.json({
            message: 'created a run'
        })
    },
    findAll: (req, res) => {
        res.json({
            message: 'retrieved all runs!'
        })
    }
}