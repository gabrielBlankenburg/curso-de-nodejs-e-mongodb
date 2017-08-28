// chama o express, e ele retorna uma função
var express = require('express');
// executa a funcao que o express retornou, passando o app como parametro
var app = express(app);
// configura diretorio de views padrão
app.set('views', './app/views')

// set the view engine to ejs
app.set('view engine', 'ejs');

module.exports = app;