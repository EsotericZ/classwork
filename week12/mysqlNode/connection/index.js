const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'classlist_db'
});

const newD = () => {
    
}

module.exports = connection, newD;