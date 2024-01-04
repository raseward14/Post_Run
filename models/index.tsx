import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('sqlite:memory:');

// users
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // }
});

const Run = sequelize.define('Run', {
    run_id: {
        type: DataTypes.UUID
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distance: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    date: DataTypes.DATE,
    comments: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
})

export { User, Run };