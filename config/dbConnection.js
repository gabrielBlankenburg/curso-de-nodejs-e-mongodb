// modulo para poder usar o mysql
var mysql = require('mysql');

var connMySQL = function(){
	// Retorna a conexão
	console.log('conexao estabelecida');
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'portal_noticias'
	});
}


module.exports = function(){
	// Cria um wrapper, assim a funcao não é chamada sempre que carregar a página
	return connMySQL;
}
