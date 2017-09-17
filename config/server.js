// chama o express, e ele retorna uma função
var express = require('express');
// chama o consign que é responsável por diminuir o número de linhas quando tem várias páginas
var consign = require('consign');
// executa a funcao que o express retornou, passando o app como parametro
var app = express(app);
// configura diretorio de views padrão
app.set('views', './app/views')

// set the view engine to ejs
app.set('view engine', 'ejs');

// o consign reconhece todos os modules de routes e manda para o app
consign()
	.include('app/routes')
	// E depois carrega o dbConnection.js
	.then('config/dbConnection.js')
	.into(app);

module.exports = app;