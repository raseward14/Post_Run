const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'runs',
    user: 'root',
    password: '12345678'
})