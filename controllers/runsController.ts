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
    findAll: async (req: any, res: any) => {
        try {
            const runData = await Run.findAll({
                where: {
                    user_id: req.body.user_id
                    // include: [{ model: Run }]
                }
            })
            res.status(200).json(runData);
        } catch (err) {
            res.status(500).json(err);
        }


        // my sql connection only
        // try {
        //     connection.query("SELECT * FROM runs", (err: any, results: any) => {
        //         if(err) throw err;
        //         res.json(results);
        //     })
        // } catch (err) {
        //     res.json({
        //         message: `threw this error: ${err}`
        //     });
        // };
    },
    // find a run by ID
    findRun: (req: Request, res: any) => {
        res.json({
            message: 'got one run by its ID!'
        })
    },
    // find all runs by user_id - send user_id in the req.body
    // findByUserId: (req: any, res: any) => {
    //     let user_id = req.body.user_id
    //     try {
    //         connection.query(
    //             `SELECT runs.user_id, runs.type, runs.distance, runs.duration, runs.date, runs.comment FROM runs WHERE user_id = ${req.body.user_id}`, (err: any, results: any) => {
    //             if(err) throw err;
    //             res.json(results);
    //         })
    //     } catch (err) {
    //         res.json({
    //             message: `threw this error: ${err}`
    //         });
    //     };
    // }
};

export {}