// var dbConnection = require('../../config/dbConnection');

// Recebe o parametro app (que vem do express)
module.exports = function(app){
	app.get('/noticias', function(req, res){
		// Pega a conexão do dbConnection
		var connection = app.config.dbConnection();

		// Acessa o noticiasModel
		var noticiasModel = app.app.models.noticiasModel;

		// Chama a função getNoticias do noticias model, passando como parametro a conexão e o callback
		noticiasModel.getNoticias(connection, function(error, result){
			res.render('noticias/noticias', {noticias: result});
		});


	});
};
	