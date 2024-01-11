const express = require('express');
// this is for a mySQL connection only
const connection = require('./config/database')
// using Sequelize
// const sequelize = require('./config/connection');
const routes = require('./routes')
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const me = {    
    name: 'Richard',
    status: 'Your server is running!'
}
// mySQL connection only
app.get('/', (req: any, res: any) => {
    let sql = "SELECT * FROM runs";
    connection.query(sql, (err: any, results: any) => {
        if(err) throw err;
        res.send(results);
    })
})
app.get('/hello', (req: any, res: any) => res.send(`Hello ${me.name}, ${me.status}`))
app.use(routes);

// mySQL connection only
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    connection.connect((err: any) => {
        if(err) throw err;
        console.log('Database connected')
    })
});

// sequelize connection
// sequelize.sync({ force: false}).then(() => {
//     app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
// });

