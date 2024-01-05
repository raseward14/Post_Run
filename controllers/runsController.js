const connection = require('../database')
// const { User, Run } = require('../models');

module.exports = {
    create: (req, res) => {
        res.json({
            message: 'created a run'
        })
    },
    findAll: (req, res) => {
        let returnAll = "SELECT * FROM runs"
        connection.query(returnAll, (err, results) => {
            if(err) throw err;
            res.json(results);
        })
    },
    find: (req, res) => {
        res.json({
            message: 'got one run by its ID!'
        })
    }
}