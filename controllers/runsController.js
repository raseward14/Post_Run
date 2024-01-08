const connection = require('../database');
// import { Run } from ('../models/Run');
const { Run } = require('../models/Run')

module.exports = {
    create: (req, res) => {
        try {
            console.log(req.body);
            Run.create({
                ...req.body,
                user_id: 1,
                // user_id: req.session.user_id,
            })
            res.json({
                message: 'created a run'
            })
        } catch(err) {
            res.json({
                message: `threw this error: ${err}`
            })
        }
    },
    findAll: (req, res) => {
        try {
            let returnAll = "SELECT * FROM runs"
            connection.query(returnAll, (err, results) => {
                if(err) throw err;
                res.json(results);
            })
        } catch (err) {
            res.json({
                message: `threw this error: ${err}`
            });
        };
    },
    find: (req, res) => {
        res.json({
            message: 'got one run by its ID!'
        })
    }
}