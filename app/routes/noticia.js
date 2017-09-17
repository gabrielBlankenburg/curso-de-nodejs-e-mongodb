module.exports = function(app){
	app.get('/noticia', function(req, res){
		// Pega a conexão do dbConnection
		var connection = app.config.dbConnection();

		var noticiasModel = app.app.models.noticiasModel;

		// Chama a função getNoticia do noticias model, passando como parametro a conexão e o callback
		noticiasModel.getNoticia(connection, function(error, result){
			res.render('noticias/noticia', {noticia: result});
		});

	});
};