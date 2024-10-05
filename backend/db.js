const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seda',
    password: 'Seda@2024',
    database: 'project_management'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;
