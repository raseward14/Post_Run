const connection = require('../config/database');
const Run = require('../models/Run');

module.exports = {
    // creating a run
    create: (req: Response, res: any) => {
        try {
            console.log(req.body);
            Run.create({
                ...req.body,
                user_id: 1,
                // user_id: req.session.user_id,
            })
            res.json({
                message: 'created a run',
                ...req.body
            })
        } catch(err) {
            res.json({
                message: `threw this error: ${err}`
            })
        }
    },
    // find all runs
    findAll: (req: Response, res: any) => {
        try {
            connection.query("SELECT * FROM runs", (err: any, results: any) => {
                if(err) throw err;
                res.json(results);
            })
        } catch (err) {
            res.json({
                message: `threw this error: ${err}`
            });
        };
    },
    // find a run by ID
    findRun: (req: Request, res: any) => {
        res.json({
            message: 'got one run by its ID!'
        })
    },
    // find all runs by user_id
    findByUserId: (req: any, res: any) => {
        let user_id = req.params.user_id
        try {
            connection.query(
                `SELECT runs.${req.params.user_id}, runs.type, runs.distance, runs.duration, runs.date, runs.comment FROM runs INNER JOIN users ON runs.user_id=users.user_id`, (err: any, results: any) => {
                if(err) throw err;
                res.json(results);
            })
        } catch (err) {
            res.json({
                message: `threw this error: ${err}`
            });
        };
    }
};

export {}