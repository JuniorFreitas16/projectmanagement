const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Definir rotas
router.get('/', projectController.getAllProjects);
router.post('/', projectController.createProject);

module.exports = router;
