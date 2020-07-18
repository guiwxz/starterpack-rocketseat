const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors(/* parametros como: dominios que quer dar acesso... */));

require('./connection')

requireDir('./src/models');

// Rotas
app.use('/', require('./src/routes'));

app.listen(3001);