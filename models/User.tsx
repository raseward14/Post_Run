import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize('sqlite:memory:');

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
});


export default User ;