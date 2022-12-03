require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http')
const { Server } = require('socket.io');
const db = require('./db');

const server = http.createServer(app);
app.use(cors());
app.use(express.json());

if (db.connect) {
    console.log('Connected to database!');
}


const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }

})


io.on('connection', (socket) => {
    console.log(`User connected with ID: ${socket.id}`)

    socket.on('send-message', (data) => {
        socket.broadcast.emit('receive-message', data);
    })

})

app.get('/', (req, res) => {

    res.send('Hello from server again and again and again!');

})

app.post('/create-user', (req, res) => {
    // const { username, password } = req.body;
    const newUser = req.body;
    const createUserQuery = `INSERT INTO users(user_name, user_password, user_email) VALUES('${newUser.username}', '${newUser.password}', '${newUser.email}');`
    // console.log(temp)
    db.query(createUserQuery, (err, result) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log('Created user!');
        }
    })
})

app.get('/login-user', (req, res) => {
    const user = req.headers;
    const loginUserQuery = `SELECT * FROM users WHERE user_email="${user.email}" && user_password = "${user.password}";`;

    db.query(loginUserQuery, (err, results) => {
        if (err) {
            console.log(err.message);
            res.send(err)
        }
        if (results) {
            console.log(`Logged in as ${user.email}!`);
            // console.log('rows: ',rows)
            // console.log('fields: ',fields)
            //     res.send('Logged in!');
            res.send(results)
        }

    })
})


server.listen(process.env.SERVER_PORT, () => {
    console.log('Server started!')
})