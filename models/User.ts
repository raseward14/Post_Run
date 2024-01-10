// import { Sequelize, DataTypes } from "sequelize";
// const { Sequelize, DataTypes } = require('sequelize')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')


// users
const User = sequelize.define('User', {
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
},
    // sqlMessage: "Unknown column 'createdAt' in 'field list'",
    {
        timestamps: false
    }
);

module.exports = User;
export {}
