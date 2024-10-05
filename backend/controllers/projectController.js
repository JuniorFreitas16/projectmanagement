const db = require('../db');  // Importa a conexão ao banco de dados

exports.getAllProjects = (req, res) => {
    const sql = 'SELECT * FROM projects';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao buscar projetos:', err);
            return res.status(500).json({ error: 'Erro ao buscar projetos' });
        }
        res.json(results);
    });
};

exports.createProject = (req, res) => {
    const { name, description, start_date, end_date, status, priority } = req.body;
    const sql = 'INSERT INTO projects (name, description, start_date, end_date, status, priority) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, description, start_date, end_date, status, priority], (err, result) => {
        if (err) {
            console.error('Erro ao criar projeto:', err);
            return res.status(500).json({ error: 'Erro ao criar projeto' });
        }
        res.json({ id: result.insertId });
    });
};
