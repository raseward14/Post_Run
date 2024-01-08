import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize('sqlite:memory:');

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
})

module.exports = { Run };
