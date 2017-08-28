// chama o express, e ele retorna uma função
var express = require('express');
// executa a funcao que o express retornou
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Configura resposta para o /tecnologia
app.get('/tecnologia', function(req, res){
	res.render('secao/tecnologia');
});

// Configura resposta para o root ('/')
app.get('/', function(req, res){
	res.send('<html><body>Portal de Noticias</body></html>');
});

// Escuta requisições na porta 3000
app.listen(3000, function(){
	console.log('servidor funcionando');
})