const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const me = {
    name: 'Richard',
    status: 'Your server is running!'
}

app.get('/', (req, res) => res.send('Home route'))
app.get('/hello', (req, res) => res.send(`Hello ${me.name}, ${me.status}`))

app.listen(
    PORT, 
    () => { console.log(`Listening on port ${PORT}`) }
)
