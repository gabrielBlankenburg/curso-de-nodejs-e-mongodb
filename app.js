// chama o express, e ele retorna uma função
var express = require('express');
// chama o modulo teste
var msg = require('./mod_test');
// executa a funcao que o express retornou
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Configura resposta para o root ('/')
app.get('/', function(req, res){
	res.render('home/index');
});

app.get('/formulario_inclusao_noticia', function(req, res){
	res.render('admin/form_add_noticia');
});

app.get('/noticias', function(req, res){
	res.render('noticias/noticias');
});

// Escuta requisições na porta 3000
app.listen(3000, function(){
	console.log(msg());
})