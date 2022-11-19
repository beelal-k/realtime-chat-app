const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host:'localhost',
    user:'bilalk',
    password:'bilalkadmin',
    database:'ChatApp'
})