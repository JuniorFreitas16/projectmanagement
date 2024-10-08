const express = require('express');
const cors = require('cors'); // Certifique-se de que o CORS está sendo usado corretamente
const bodyParser = require('body-parser'); // Para processar dados JSON
const projectRoutes = require('./routes/projectRoutes'); // Caminho para as rotas de projetos

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usar as rotas do projeto
app.use('/api/projects', projectRoutes);

// Porta em que o servidor irá rodar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
