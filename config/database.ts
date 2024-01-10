const mysql = require('mysql');

// resources:
// stack overflow: https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
// this youtube video: https://www.youtube.com/watch?v=tIV90xQ0k6A&t=1s
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'post_run',
    user: 'root',
    password: '12345678'
});

module.exports = connection;
export {}