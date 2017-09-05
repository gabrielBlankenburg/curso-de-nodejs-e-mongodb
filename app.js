var app = require('./config/server');

// Chama a rota de noticias
// var rotaNoticias = require('./app/routes/noticias')(app);

// var rotaHome = require('./app/routes/home')(app);

// var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

// Escuta requisições na porta 3000
app.listen(3000, function(){
	console.log('running');
});