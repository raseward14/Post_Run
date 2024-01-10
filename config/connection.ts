const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'post_run',
 'root',
 '12345678',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);
  
module.exports = sequelize
export {}