const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')
// https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
// runs
const Run: { run_id: number, type: string, distance: number, duration: number, date: Date, comments: string, user_id: number } = sequelize.define('Run', {
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
            type: DataTypes.DECIMAL,
            allowNull: false
    },
    duration: {
            type: DataTypes.DECIMAL,
            allowNull: false
    },
    date: DataTypes.DATE,
    comments: {
            type: DataTypes.DECIMAL,
            allowNull: true
    },
    user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
    }
});
// users
const User: { user_id: number, username: string, password: string } = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = { Run, User };
