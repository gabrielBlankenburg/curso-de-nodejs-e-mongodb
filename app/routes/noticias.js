var dbConnection = require('../../config/dbConnection');

// Recebe o parametro app (que vem do express)
module.exports = function(app){
	// Pega a conexão do dbConnection
	var connection = dbConnection();
	app.get('/noticias', function(req, res){
		// parametros sao a query e o callback
		connection.query('select * from noticias', function(error, result){
			res.render('noticias/noticias', {noticias: result});
		});

	});
};
	