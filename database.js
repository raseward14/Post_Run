const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'post_run',
    user: 'root',
    password: '12345678'
});

module.exports = connection;