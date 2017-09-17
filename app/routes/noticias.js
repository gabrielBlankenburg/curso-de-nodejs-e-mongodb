// var dbConnection = require('../../config/dbConnection');

// Recebe o parametro app (que vem do express)
module.exports = function(app){
	app.get('/noticias', function(req, res){
		// Pega a conexão do dbConnection
		var connection = app.config.dbConnection();

		// parametros sao a query e o callback
		connection.query('select * from noticias', function(error, result){
			res.render('noticias/noticias', {noticias: result});
		});

	});
};
	