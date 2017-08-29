// modulo para poder usar o mysql
var mysql = require('mysql');

module.exports = function(){
	// Retorna a conexão
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'portal_noticias'
	});
}
