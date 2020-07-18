require('dotenv').config();
const mongoose = require('mongoose');

//Iniciando o Banco de dados
module.exports = mongoose.connect(process.env.CONNECTION_ENV, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
