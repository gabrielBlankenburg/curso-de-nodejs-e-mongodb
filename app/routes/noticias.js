// Recebe o parametro app (que vem do express)
module.exports = function(app){
	app.get('/noticias', function(req, res){

		// modulo para poder usar o mysql
		var mysql = require('mysql');

		// Efetua a conexão
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '1234',
			database: 'portal_noticias'
		});

		// parametros sao a query e o callback
		connection.query('select * from noticias', function(error, result){
			res.render('noticias/noticias', {noticias: result});
		});

	});
};
	