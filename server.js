const express = require('express');
const connection = require('./database')
// const routes = require('./routes')
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const me = {
    name: 'Richard',
    status: 'Your server is running!'
}

app.get('/', (req, res) => {
    let sql = "SELECT * FROM runs";
    connection.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    })
})
app.get('/hello', (req, res) => res.send(`Hello ${me.name}, ${me.status}`))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    connection.connect((err) => {
        if(err) throw err;
        console.log('Database connected')
    })
});

