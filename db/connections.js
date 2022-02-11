const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'SMUcoding2022',
        database: 'employee_tracker'
    },
    console.log('connect to the employee tracker database.')
);

module.exports = db;
