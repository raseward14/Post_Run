const connection = require('../config/database');
const Run = require('../models/Run');

module.exports = {
    create: (req: any, res: any) => {
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
    findAll: (req: any, res: any) => {
        try {
            let returnAll = "SELECT * FROM runs"
            connection.query(returnAll, (err: any, results: any) => {
                if(err) throw err;
                res.json(results);
            })
        } catch (err) {
            res.json({
                message: `threw this error: ${err}`
            });
        };
    },
    find: (req: any, res: any) => {
        res.json({
            message: 'got one run by its ID!'
        })
    }
};

export {}