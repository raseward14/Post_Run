const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')
// https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
// runs
const Run = sequelize.define('Run', {
    run_id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: DataTypes.DATE,
    comments: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'user_id'
        }
    }
},
    // sqlMessage: "Unknown column 'createdAt' in 'field list'",
    {
        timestamps: false
    }
);

module.exports = Run;
