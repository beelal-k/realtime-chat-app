require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http')
const { Server } = require('socket.io');
const db = require('./db');

const server = http.createServer(app);
app.use(cors());

if(db.connect){
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

server.listen(process.env.SERVER_PORT, () => {
    console.log('Server started!')
})