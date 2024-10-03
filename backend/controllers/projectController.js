// projectController.js
const db = require('../db');  // Conexão ao banco de dados

exports.getAllProjects = (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.createProject = (req, res) => {
    const { name, description, start_date, end_date, status, priority } = req.body;
    const sql = 'INSERT INTO projects (name, description, start_date, end_date, status, priority) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, description, start_date, end_date, status, priority], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId });
    });
};