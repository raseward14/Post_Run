// import User from './User';
// import Run from './Run';
// const User = require('./User');
// const Run = require('./Run');

// User.hasMany(Run, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Run.belongsTo(User, {
//     foreignKey: 'user_id'
// });

module.exports = { User, Run };
