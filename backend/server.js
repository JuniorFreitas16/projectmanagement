// server.js
const express = require('express');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/api/projects', projectRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));